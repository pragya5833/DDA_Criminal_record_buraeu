import {
  COMPLAINT_AGAINST_REPOSITORY,
  COMPLAINT_REPOSITORY,
  COMPLAINT_UPDATES_REPOSITORY,
} from 'src/core/constants';
import { Complaint } from './entities/complaint.entity';
import { ComplaintAgainst } from './entities/complaint_against.entity';
import { ComplaintUpdates } from './entities/complaint_updates.entity';

export const ComplaintProviders = [
  {
    provide: COMPLAINT_REPOSITORY,
    useValue: Complaint,
  },
  {
    provide: COMPLAINT_AGAINST_REPOSITORY,
    useValue: ComplaintAgainst,
  },
  {
    provide: COMPLAINT_UPDATES_REPOSITORY,
    useValue: ComplaintUpdates,
  },
];
