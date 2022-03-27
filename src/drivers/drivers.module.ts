import { Module } from '@nestjs/common';
import { RidesService } from 'src/rides/rides.service';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';

@Module({
  controllers: [DriversController],
  providers: [DriversService, RidesService],
  exports: [DriversService],
})
export class DriversModule {}
