import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ListAllRides } from './DTO/RideDTO';
import { RidesService } from './rides.service';
@Controller('api/rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @HttpCode(200)
  @Get('all')
  async getAllRides(@Query() query: ListAllRides) {
    return this.ridesService.getAllRides;
  }
}
