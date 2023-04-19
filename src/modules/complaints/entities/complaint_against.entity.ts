import {
  Column,
  PrimaryKey,
  Table,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CITIZEN_PRIMARY_KEY, COMPLAINT_PRIMARY_KEY } from 'src/core/constants';

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
      key: COMPLAINT_PRIMARY_KEY,
    },
    allowNull: false,
  })
  complaint_id: number;

  @BelongsTo(() => Citizen, { foreignKey: 'citizen_against' })
  citizenAgainst: Citizen;

  @BelongsTo(() => Complaint, { foreignKey: 'complaint_id' })
  complaintData: Complaint;
}
