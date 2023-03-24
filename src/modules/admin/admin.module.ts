import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminProviders } from './admin.providers';

@Module({
  controllers: [AdminController],
  providers: [AdminService, ...AdminProviders]
})
export class AdminModule {}
