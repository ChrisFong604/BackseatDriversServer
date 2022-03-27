import { Injectable } from '@nestjs/common';
import { Driver, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { RidesService } from 'src/rides/rides.service';

@Injectable()
export class DriversService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ridesService: RidesService,
  ) {}

  async getAllDrivers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DriverWhereUniqueInput;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput;
  }): Promise<Driver[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.driver.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getUniqueDriver(
    driverWhereUniqueInput: Prisma.DriverWhereUniqueInput,
  ): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: driverWhereUniqueInput,
    });
  }

  async createDriver(data: Prisma.DriverCreateInput): Promise<Driver> {
    return await this.prisma.driver.create({
      data,
    });
  }

  async createRideFromDriver(
    data: Prisma.RideCreateInput,
    driver_id: number,
  ): Promise<void> {
    this.ridesService.createRide(data, driver_id);
    return;
  }

  async deleteRideFromDriverId(driver_id: number) {
    await this.ridesService.deleteRide(driver_id);
    await this.prisma.driver.delete({ where: { driver_id } });
  }
}
