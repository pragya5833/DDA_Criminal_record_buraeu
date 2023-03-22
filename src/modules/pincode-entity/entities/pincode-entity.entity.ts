import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
@Table
export class PincodeCity extends Model<PincodeCity> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  pin_code: number;

  @Column({
    type: DataType.STRING,
  })
  city: string;

  @Column({
    type: DataType.STRING,
  })
  state: string;
}
