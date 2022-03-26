import { Module } from '@nestjs/common';
import { RidesService } from './rides.service';

@Module({
  providers: [RidesService]
})
export class RidesModule {}
