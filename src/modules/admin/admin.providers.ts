import { ADMIN_REPOSITORY } from 'src/core/constants';
import { Admin } from './entities/admin.entity';

export const AdminProviders = [
  {
    provide: ADMIN_REPOSITORY,
    useValue: Admin,
  },
];
