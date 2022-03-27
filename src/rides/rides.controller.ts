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
import { Ride } from '@prisma/client';
import { CreateRideDto } from './dto/create-ride.dto';
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

  /* @HttpCode(201)
  @Post('createride')
  async createRide(@Body() createRideDto: CreateRideDto): Promise<Ride> {
    return this.ridesService.createRide(createRideDto);
  } */
}
