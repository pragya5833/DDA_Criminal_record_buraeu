import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Index,
} from 'sequelize-typescript';
import { PINCODE_PRIMARY_KEY } from 'src/core/constants';
import { PincodeCity } from 'src/modules/pincode-entity/entities/pincode-entity.entity';

@Table
export class Citizen extends Model<Citizen> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastname: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dob: Date;
  @Index
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: PincodeCity,
      key: PINCODE_PRIMARY_KEY,
    },
  })
  pincode: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  house_no: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  flat_no: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
