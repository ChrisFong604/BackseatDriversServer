import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Request, Ride } from '@prisma/client';
import { RidesService } from './rides.service';
@Controller('api/rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @HttpCode(200)
  @Get('all')
  getAllRides() {
    return this.ridesService.getAllRides({});
  }

  // @Patch('update')
  // updateRideStatus() {
  //   return this.ridesService.
  // }

  @Delete(':id')
  async removeRide(@Param() id: number) {
    return this.ridesService.deleteRide(id);
  }
}
