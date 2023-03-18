import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CitizenModule } from './modules/citizen/citizen.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal: true}), CitizenModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
