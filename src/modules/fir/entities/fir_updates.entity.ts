import {
    Column, DataType, ForeignKey, Index, Model, Table
} from 'sequelize-typescript';
import {
    ADMIN_PRIMARY_KEY,
    FIR_PRIMARY_KEY,
    Fir_Status
} from 'src/core/constants';
import { Admin } from 'src/modules/admin/entities/admin.entity';
import { Fir } from './fir.entity';

@Table
export class FirUpdates extends Model<FirUpdates> {
  @ForeignKey(() => Fir)
  @Index
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: Fir,
      key: FIR_PRIMARY_KEY,
    },
  })
  fir_id: number;

  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Admin,
      key: ADMIN_PRIMARY_KEY,
    },
  })
  admin_id: number;

  @Column({
    type: DataType.ENUM(...Object.values(Fir_Status)),
  })
  old_status: Fir_Status;

  @Column({
    type: DataType.ENUM(...Object.values(Fir_Status)),
    allowNull: false,
    defaultValue: Fir_Status.Open,
  })
  updated_status: Fir_Status;
}
