import { HttpException, Injectable } from '@nestjs/common';
import {
  COMPLAINT_AGAINST_REPOSITORY,
  COMPLAINT_REPOSITORY,
} from 'src/core/constants';
import { ComplaintDTO } from './dto/complaint.dto';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { Complaint } from './entities/complaint.entity';
import { Inject } from '@nestjs/common';
import { ComplaintAgainst } from './entities/complaint_against.entity';
import { CreateComplaintAgainstDto } from './dto/create-complain-against.dto';

@Injectable()
export class ComplaintsService {
  constructor(
    @Inject(COMPLAINT_REPOSITORY)
    private complainRepository: typeof Complaint,
    @Inject(COMPLAINT_AGAINST_REPOSITORY)
    private complainAgainstRepository: typeof ComplaintAgainst,
  ) {}

  async create(complaintDto: ComplaintDTO, user: any) {
    console.log(complaintDto);
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
        complaintDto.citizen_against.forEach(async (citizen) => {
          const complaintAgainstData: CreateComplaintAgainstDto = {
            citizen_against: citizen,
            complaint_id: complaintEntity.id,
          };
          const complaintAgainstEntitie =
            await this.complainAgainstRepository.create(complaintAgainstData);
          console.log(complaintAgainstEntitie);

          complaintAgainstEntities.push(complaintAgainstEntitie.dataValues);
        });

        return { complaintEntity, complaintAgainstEntities };
      } catch (error) {
        await this.complainRepository.destroy({
          where: { id: complaintEntity.id },
        });
        return new HttpException(
          {
            message: 'something went wrong while creating complaint_against',
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
