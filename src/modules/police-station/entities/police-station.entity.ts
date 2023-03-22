import {
  Column,
  PrimaryKey,
  Table,
  DataType,
  Model,
} from 'sequelize-typescript';
import { PincodeCity } from 'src/modules/pincode-entity/entities/pincode-entity.entity';
import { PINCODE_PRIMARY_KEY } from 'src/core/constants';

@Table
export class PoliceStation extends Model<PoliceStation> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  code: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  street: string;

  @Column({
    type: DataType.INTEGER,
    references: {
      model: PincodeCity,
      key: PINCODE_PRIMARY_KEY,
    },
  })
  pin_code: number;
}
