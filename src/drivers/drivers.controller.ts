import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from '@prisma/client';

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
}
