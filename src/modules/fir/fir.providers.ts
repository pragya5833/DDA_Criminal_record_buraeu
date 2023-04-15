import {
  FIR_REPOSITORY,
  FIR_AGAINST_REPOSITORY,
  FIR_UPDATES_REPOSITORY,
} from 'src/core/constants';
import { Fir } from './entities/fir.entity';
import { FirAgainst } from './entities/fir_against.entity';
import { FirUpdates } from './entities/fir_updates.entity';

export const firProviders = [
  {
    provide: FIR_REPOSITORY,
    useValue: Fir,
  },
  {
    provide: FIR_AGAINST_REPOSITORY,
    useValue: FirAgainst,
  },
  {
    provide: FIR_UPDATES_REPOSITORY,
    useValue: FirUpdates,
  },
];
