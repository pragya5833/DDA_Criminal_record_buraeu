import {
  Column,
  PrimaryKey,
  Table,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CITIZEN_PRIMARY_KEY, CMPLAINT_PRIMARY_KEY } from 'src/core/constants';

import { Citizen } from '../../citizen/citizen.entity';
import { Complaint } from './complaint.entity';

@Table
export class ComplaintAgainst extends Model<ComplaintAgainst> {
  @ForeignKey(() => Citizen)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Citizen,
      key: CITIZEN_PRIMARY_KEY,
    },
    allowNull: false,
  })
  citizen_against: number;

  @ForeignKey(() => Complaint)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Complaint,
      key: CMPLAINT_PRIMARY_KEY,
    },
    allowNull: false,
  })
  complaint_id: number;

  @BelongsTo(() => Citizen, { foreignKey: 'citizen_against' })
  citizen: Citizen;
}
