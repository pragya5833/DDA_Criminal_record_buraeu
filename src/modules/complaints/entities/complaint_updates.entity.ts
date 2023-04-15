import {
  Column,
  PrimaryKey,
  Table,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import {
  ADMIN_PRIMARY_KEY,
  CITIZEN_PRIMARY_KEY,
  COMPLAINT_PRIMARY_KEY,
  Complaint_Status,
} from 'src/core/constants';
import { Admin } from 'src/modules/admin/entities/admin.entity';
import { Citizen } from 'src/modules/citizen/citizen.entity';
import { Complaint } from './complaint.entity';

@Table
export class ComplaintUpdates extends Model<ComplaintUpdates> {
  @ForeignKey(() => Complaint)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: Complaint,
      key: COMPLAINT_PRIMARY_KEY,
    },
  })
  complaint_id: number;

  @ForeignKey(() => Citizen)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Citizen,
      key: CITIZEN_PRIMARY_KEY,
    },
    allowNull: false,
  })
  created_by: number;

  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Admin,
      key: ADMIN_PRIMARY_KEY,
    },
  })
  updated_by: number;

  @Column({
    type: DataType.ENUM(...Object.values(Complaint_Status)),
  })
  old_status: Complaint_Status;

  @Column({
    type: DataType.ENUM(...Object.values(Complaint_Status)),
    allowNull: false,
    defaultValue: Complaint_Status.Open,
  })
  updated_status: Complaint_Status;
}
