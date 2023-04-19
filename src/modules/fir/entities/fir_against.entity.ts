import {
  Column,
  Table,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
  Index,
} from 'sequelize-typescript';
import { CITIZEN_PRIMARY_KEY, FIR_PRIMARY_KEY } from 'src/core/constants';

import { Citizen } from '../../citizen/citizen.entity';
import { Fir } from './fir.entity';

@Table
export class FirAgainst extends Model<FirAgainst> {
  @ForeignKey(() => Citizen)
  @Index
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Citizen,
      key: CITIZEN_PRIMARY_KEY,
    },
    allowNull: false,
  })
  fir_against: number;

  @ForeignKey(() => Fir)
  @Index
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Fir,
      key: FIR_PRIMARY_KEY,
    },
    allowNull: false,
  })
  fir_id: number;

  @BelongsTo(() => Citizen, { foreignKey: 'fir_against' })
  citizen: Citizen;
}
