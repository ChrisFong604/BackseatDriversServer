import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Request, Ride } from '@prisma/client';
import { RequestsService } from 'src/requests/requests.service';
import { CreateRideDto } from './dto/create-ride.dto';
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

  @Post('create')
  async createRide(@Body() createRideDto: CreateRideDto) {
    return await this.ridesService.createRide(createRideDto);
  }

  @HttpCode(200)
  @Get('ride-requests/:id')
  async getRequestsForRide(@Param('id', ParseIntPipe) id: number) {
    return await this.requestService.getRideRequests(id);
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
