import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Citizen } from 'src/modules/citizen/citizen.entity';
import { PoliceStation } from 'src/modules/police-station/entities/police-station.entity';
import {
  CITIZEN_PRIMARY_KEY,
  POLICE_STATION_PRIMARY_KEY,
} from 'src/core/constants';

// @Table
// export class Admin extends Model<Admin> {
//   @Column({
//     type: DataType.INTEGER,
//     references: {
//       model: Citizen,
//       key: CITIZEN_PRIMARY_KEY,
//     },
//   })
//   citizen_id: number;

//   @Column({
//     type: DataType.INTEGER,
//     references: {
//       model: PoliceStation,
//       key: POLICE_STATION_PRIMARY_KEY,
//     },
//   })
//   police_station_id: number;
// }

@Table
export class Admin extends Model<Admin> {
  @ForeignKey(() => Citizen)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Citizen,
      key: CITIZEN_PRIMARY_KEY,
    },
    allowNull: false,
  })
  citizen_id: number;

  @ForeignKey(() => PoliceStation)
  @Column({
    type: DataType.INTEGER,
    references: {
      model: PoliceStation,
      key: POLICE_STATION_PRIMARY_KEY,
    },
  })
  police_station_code: number;
}
