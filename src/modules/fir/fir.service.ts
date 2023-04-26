import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateComplaintAgainstDto } from '../complaints/dto/create-complain-against.dto';
import { CreateComplaintDto } from '../complaints/dto/create-complaint.dto';
import { CreateFirDto } from './dto/create-fir.dto';
import { CreateFirAgainstDto } from './dto/create_fir_against.dto';
import { CreateFirUpdatesDto } from './dto/create_fir_updates.dto';
import { FirDTO } from './dto/fir.dto';
import { UpdateFirDto } from './dto/update-fir.dto';
import { Fir } from './entities/fir.entity';
import { FirAgainst } from './entities/fir_against.entity';
import { FirUpdates } from './entities/fir_updates.entity';
import { QueryTypes, Sequelize } from 'sequelize';
import { SEQUELIZE } from 'src/core/constants';

@Injectable()
export class FirService {
  constructor(
    @Inject('FIR_REPOSITORY')
    private firRepository: typeof Fir,

    @Inject('FIR_AGAINST_REPOSITORY')
    private firAgainstRepository: typeof FirAgainst,

    @Inject('FIR_UPDATES_REPOSITORY')
    private firUpdatesRepository: typeof FirUpdates,
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize, // Inject the Sequelize instance
  ) {}
  async create(firDto: FirDTO, user: any) {
    const firData: CreateFirDto = {
      complaint_id: firDto.complaint_id,
      // TODO : Fix the user with admin id
      admin_id: user.admin.id,
    };
    try {
      const firEntity = await this.firRepository.create(firData);
      const firAgainstEntities = [];
      try {
        const fir_update_data: CreateFirUpdatesDto = {
          fir_id: firEntity.id,
          admin_id: user.admin.id,
        };
        const fir_update_entity = await this.firUpdatesRepository.create(
          fir_update_data,
        );

        try {
          for (const citizen of firDto.fir_against) {
            const firAgainstData: CreateFirAgainstDto = {
              fir_against: citizen,
              fir_id: firEntity.id,
            };
            const firAgainstEntity = await this.firAgainstRepository.create(
              firAgainstData,
            );

            firAgainstEntities.push(firAgainstEntity.dataValues);
          }

          return {
            firEntity,
            firAgainstEntities,
            fir_update_entity,
          };
        } catch (error) {
          await this.firUpdatesRepository.destroy({
            where: { id: fir_update_entity.id },
          });
          await this.firRepository.destroy({
            where: { id: firEntity.id },
          });
          return new HttpException(
            {
              message: 'something went wrong while creating fir_against',
              error,
            },
            400,
          );
        }
      } catch (error) {
        console.log(error);

        await this.firRepository.destroy({
          where: { id: firEntity.id },
        });
        return new HttpException(
          {
            message: 'something went wrong while creating fir_updates',
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

  async createWithTransactions(firDto: FirDTO, user: any) {
    const firData: CreateFirDto = {
      complaint_id: firDto.complaint_id,
      admin_id: user.admin.id,
    };

    // Use a transaction for better control over multiple operations.
    const t = await this.sequelize.transaction();

    try {
      const firEntity = await this.firRepository.create(firData, {
        transaction: t,
      });

      const fir_update_data: CreateFirUpdatesDto = {
        fir_id: firEntity.id,
        admin_id: user.admin.id,
      };
      const fir_update_entity = await this.firUpdatesRepository.create(
        fir_update_data,
        { transaction: t },
      );

      const firAgainstEntities = [];
      for (const citizen of firDto.fir_against) {
        const firAgainstData: CreateFirAgainstDto = {
          fir_against: citizen,
          fir_id: firEntity.id,
        };
        const firAgainstEntity = await this.firAgainstRepository.create(
          firAgainstData,
          { transaction: t },
        );
        firAgainstEntities.push(firAgainstEntity.dataValues);
      }

      // Commit the transaction if everything went well.
      await t.commit();

      return {
        firEntity,
        firAgainstEntities,
        fir_update_entity,
      };
    } catch (error) {
      // Rollback the transaction if there was an error.
      await t.rollback();

      console.log(error);
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
    const allFirIds = await this.firRepository.findAll({
      attributes: ['id'],
    });

    const allFirsData = [];

    for (const fir of allFirIds) {
      const firDetails = await this.getFirDetails(fir.id);
      allFirsData.push(firDetails);
    }

    return allFirsData;
  }

  findOne(id: number) {
    return this.getFirDetails(id);
  }

  async update(id: number, updateFirDto: UpdateFirDto, user: any) {
    const firData = await this.firRepository.findOne({
      where: { id },
    });
    const updateData = {
      ...updateFirDto,
      old_status: firData.fir_status,
      admin_id: user.admin.id,
      fir_id: id,
    };
    try {
      const firUpdateEntity = await this.firUpdatesRepository.create(
        updateData,
      );
      const firEntity = await this.firRepository.update(updateFirDto, {
        where: { id },
      });
      return { firEntity, firUpdateEntity };
    } catch (error) {
      return new HttpException(
        {
          message: 'something went wrong while updating fir',
          error,
        },
        400,
      );
    }
  }
  async updateWithStoredProcedure(
    id: number,
    updateFirDto: UpdateFirDto,
    user: any,
  ) {
    const firData = await this.firRepository.findOne({ where: { id } });
    try {
      // Call the stored procedure using Sequelize
      const [result] = await this.sequelize.query(
        `CALL update_fir_and_insert_update(:id, :fir_status, :admin_id, :old_status, :updated_status);`,
        {
          replacements: {
            id: id,
            fir_status: updateFirDto.fir_status,
            admin_id: user.admin.id,
            old_status: firData.fir_status,
            updated_status: updateFirDto.fir_status,
          },
          type: QueryTypes.RAW,
        },
      );

      const firEntity = await this.firRepository.findOne({ where: { id } });
      const firUpdateEntity = await this.firUpdatesRepository.findOne({
        where: { fir_id: id },
        order: [['id', 'DESC']],
      });

      return { firEntity, firUpdateEntity };
    } catch (error) {
      return new HttpException(
        {
          message: 'something went wrong while updating fir',
          error,
        },
        400,
      );
    }
  }

  remove(id: number) {
    return `This action removes a #${id} fir`;
  }

  private async getFirDetails(id: number) {
    const firData = await this.firRepository.findOne({
      include: ['complaint', 'admin'],
      where: { id },
    });
    const firAgainstData = await this.firAgainstRepository.findAll({
      where: { fir_id: id },
      include: ['citizen'],
    });
    // console.log(complaintAgainstData);
    return { firData, fir_against: [...firAgainstData] };
  }
}
