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
export class CitizenPhone extends Model<CitizenPhone> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Citizen,
      key: CITIZEN_PRIMARY_KEY,
    },
    allowNull: false,
  })
  citizen_id: number;

  @Index
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    unique: true,
  })
  phone_number: string;
}
