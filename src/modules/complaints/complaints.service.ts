import { HttpException, Injectable } from '@nestjs/common';
import {
  COMPLAINT_AGAINST_REPOSITORY,
  COMPLAINT_REPOSITORY,
  COMPLAINT_UPDATES_REPOSITORY,
} from 'src/core/constants';
import { ComplaintDTO } from './dto/complaint.dto';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { Complaint } from './entities/complaint.entity';
import { Inject } from '@nestjs/common';
import { ComplaintAgainst } from './entities/complaint_against.entity';
import { CreateComplaintAgainstDto } from './dto/create-complain-against.dto';
import { ComplaintUpdates } from './entities/complaint_updates.entity';

@Injectable()
export class ComplaintsService {
  constructor(
    @Inject(COMPLAINT_REPOSITORY)
    private complainRepository: typeof Complaint,
    @Inject(COMPLAINT_AGAINST_REPOSITORY)
    private complainAgainstRepository: typeof ComplaintAgainst,
    @Inject(COMPLAINT_UPDATES_REPOSITORY)
    private complainUpdatesRepository: typeof ComplaintUpdates,
  ) {}

  async create(complaintDto: ComplaintDTO, user: any) {
    const complaintData: CreateComplaintDto = {
      created_by: user.id,
      station_code: complaintDto.station_code,
    };
    try {
      const complaintEntity = await this.complainRepository.create(
        complaintData,
      );
      const complaintAgainstEntities = [];
      try {
        const complaint_update_data = {
          complaint_id: complaintEntity.id,
          created_by: user.id,
        };
        const complaint_update_entity =
          await this.complainUpdatesRepository.create(complaint_update_data);

        try {
          for (const citizen of complaintDto.citizen_against) {
            const complaintAgainstData: CreateComplaintAgainstDto = {
              citizen_against: citizen,
              complaint_id: complaintEntity.id,
            };
            const complaintAgainstEntity =
              await this.complainAgainstRepository.create(complaintAgainstData);
            console.log(complaintAgainstEntity);

            complaintAgainstEntities.push(complaintAgainstEntity.dataValues);
          }

          return {
            complaintEntity,
            complaintAgainstEntities,
            complaint_update_entity,
          };
        } catch (error) {
          await this.complainUpdatesRepository.destroy({
            where: { id: complaint_update_entity.id },
          });
          await this.complainRepository.destroy({
            where: { id: complaintEntity.id },
          });
          console.log(error);
          return new HttpException(
            {
              message: 'something went wrong while creating complaint_against',
              error,
            },
            400,
          );
        }
      } catch (error) {
        console.log(error);

        await this.complainRepository.destroy({
          where: { id: complaintEntity.id },
        });
        return new HttpException(
          {
            message: 'something went wrong while creating complaint_updates',
            error,
          },
          400,
        );
      }
    } catch (error) {
      return new HttpException(
        {
          message: 'something went wrong while creating complaint',
          error,
        },
        400,
      );
    }
  }

  async findAll() {
    const allComplaintsids = await this.complainRepository.findAll({
      attributes: ['id'],
    });

    const allComplaintsData = [];

    for (const complaint of allComplaintsids) {
      const complaintDetails = await this.getComplaintDetails(complaint.id);
      allComplaintsData.push(complaintDetails);
    }

    console.log(allComplaintsData);
    return allComplaintsData;
  }

  async findOne(id: number) {
    return await this.getComplaintDetails(id);
  }

  private async getComplaintDetails(id: number) {
    const complaintData = await this.complainRepository.findOne({
      include: ['police_station', 'createdBy'],
      where: { id },
    });
    const complaintAgainstData = await this.complainAgainstRepository.findAll({
      where: { complaint_id: id },
      include: ['citizen'],
    });
    // console.log(complaintAgainstData);
    return { complaintData, complaint_against: [...complaintAgainstData] };
  }

  update(id: number, updateComplaintDto: UpdateComplaintDto) {
    return `This action updates a #${id} complaint`;
  }

  remove(id: number) {
    return `This action removes a #${id} complaint`;
  }
}
