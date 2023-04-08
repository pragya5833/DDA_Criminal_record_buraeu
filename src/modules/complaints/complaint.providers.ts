import { Complaint } from './entities/complaint.entity';
import { ComplaintAgainst } from './entities/complaint_against.entity';
import { COMPLAINT_REPOSITORY } from 'src/core/constants';
import { COMPLAINT_AGAINST_REPOSITORY } from 'src/core/constants';

export const ComplaintProviders = [
  {
    provide: COMPLAINT_REPOSITORY,
    useValue: Complaint,
  },
  {
    provide: COMPLAINT_AGAINST_REPOSITORY,
    useValue: ComplaintAgainst,
  },
];
