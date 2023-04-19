import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';

import {
  ADMIN_PRIMARY_KEY,
  COMPLAINT_PRIMARY_KEY,
  Fir_Status,
} from 'src/core/constants';
import { Admin } from 'src/modules/admin/entities/admin.entity';
import { Complaint } from 'src/modules/complaints/entities/complaint.entity';

@Table
export class Fir extends Model<Fir> {
  @ForeignKey(() => Complaint)
  @Index
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Complaint,
      key: COMPLAINT_PRIMARY_KEY,
    },
    allowNull: false,
  })
  complaint_id: number;

  @Column({
    type: DataType.ENUM(...Object.values(Fir_Status)),
    allowNull: false,
    defaultValue: Fir_Status.Open,
  })
  fir_status: Fir_Status;

  @ForeignKey(() => Admin)
  @Index
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Admin,
      key: ADMIN_PRIMARY_KEY,
    },
    allowNull: false,
  })
  admin_id: number;

  @BelongsTo(() => Complaint, { foreignKey: 'complaint_id' })
  complaint: Complaint;

  @BelongsTo(() => Admin, { foreignKey: 'admin_id' })
  admin: Admin;
}
