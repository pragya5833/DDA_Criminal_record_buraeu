import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

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
    unique: true,
    allowNull: false,
  })
  dob: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
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
