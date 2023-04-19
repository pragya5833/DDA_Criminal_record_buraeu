import {
  Column,
  PrimaryKey,
  Table,
  DataType,
  Model,
  Index,
} from 'sequelize-typescript';

import { Citizen } from '../../citizen/citizen.entity';
import { CITIZEN_PRIMARY_KEY } from 'src/core/constants';

@Table
export class CitizenAadhar extends Model<CitizenAadhar> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Citizen,
      key: CITIZEN_PRIMARY_KEY,
    },
    allowNull: false,
    unique: true,
  })
  citizen_id: number;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  aadhar_number: string;
}
