import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { Ride } from '@prisma/client';
import { CreateRideDto } from './dto/create-ride.dto';
import { RidesService } from './rides.service';
@Controller('api/rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @HttpCode(200)
  @Get('all')
  async getAllRides() {
    return this.ridesService.getAllRides({});
  }

  /* @HttpCode(201)
  @Post('createride')
  async createRide(@Body() createRideDto: CreateRideDto): Promise<Ride> {
    return this.ridesService.createRide(createRideDto);
  } */
}
