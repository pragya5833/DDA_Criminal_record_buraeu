import {
  Column,
  PrimaryKey,
  Table,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Citizen } from '../../citizen/citizen.entity';
import { CITIZEN_PRIMARY_KEY } from 'src/core/constants';
import { PoliceStation } from 'src/modules/police-station/entities/police-station.entity';
import { Complaint_Status } from 'src/core/constants';
@Table
export class Complaint extends Model<Complaint> {
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Citizen,
      key: CITIZEN_PRIMARY_KEY,
    },
    allowNull: false,
  })
  created_by: number;

  @Column({
    type: DataType.ENUM(...Object.values(Complaint_Status)),
    allowNull: false,
    defaultValue: Complaint_Status.Open,
  })
  complaint_status: Complaint_Status;
  
  @ForeignKey(() => PoliceStation)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: PoliceStation,
      key: 'code',
    },
    allowNull: false,
  })
  station_code: number;

  @BelongsTo(() => Citizen, { foreignKey: 'created_by' })
  createdBy: Citizen;

  @BelongsTo(() => PoliceStation, { foreignKey: 'station_code' })
  police_station: PoliceStation;


}
