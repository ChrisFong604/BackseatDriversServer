import { Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from '@prisma/client';
import { CreateDriverDto } from './dto/create-driver.dto';

@Controller('api/drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @HttpCode(200)
  @Get('/all')
  async getAllDrivers() {
    return this.driversService.getAllDrivers({});
  }

  @HttpCode(200)
  @Get('/:id')
  async getDriverById(@Param('id') id: number): Promise<Driver> {
    return this.driversService.getUniqueDriver({
      driver_id: id,
    });
  }

  @HttpCode(201)
  @Post(':/id')
  createDriver(@Param(':id') id: number, createDriverDto: CreateDriverDto) {
    return this.driversService;
  }
}
