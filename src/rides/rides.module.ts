import { Module } from '@nestjs/common';
import { RequestsService } from 'src/requests/requests.service';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';

@Module({
  controllers: [RidesController],
  providers: [RidesService, RequestsService],
  exports: [RidesService],
})
export class RidesModule {}
