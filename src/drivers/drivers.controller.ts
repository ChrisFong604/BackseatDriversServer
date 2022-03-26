import { Controller, Get, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from '@prisma/client';

@Controller('api/drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get('/:id')
  async getDriverById(@Param('id') id: string): Promise<Driver> {
    return this.driversService.getUniqueDriver({
      driver_id: id,
    });
  }
}
