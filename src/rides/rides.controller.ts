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
import { RequestsService } from 'src/requests/requests.service';
import { RidesService } from './rides.service';
@Controller('api/rides')
export class RidesController {
  constructor(
    private readonly ridesService: RidesService,
    private readonly requestService: RequestsService,
  ) {}

  @HttpCode(200)
  @Get('all')
  getAllRides() {
    return this.ridesService.getAllRides({});
  }

  @HttpCode(200)
  @Get('ride-requests/:id')
  getRequestsForRide(@Param() id: number) {
    return this.requestService.getRideRequests(id);
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
