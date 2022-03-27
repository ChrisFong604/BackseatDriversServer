import { Injectable } from '@nestjs/common';
import { Driver, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { identity } from 'rxjs';
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
      include: {
        driver: {
          select: {
            first_name: true,
            last_name: true,
            school_name: true,
          },
        },
      },
    });
  }

  async getUniqueDriver(
    driverWhereUniqueInput: Prisma.DriverWhereUniqueInput,
  ): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: driverWhereUniqueInput,
    });
  }

  async createDriver(user_id: number) {
    return await this.prisma.driver.create({
      data: {
        driver: {
          connect: {
            id: user_id,
          },
        },
      },
    });
  }

  async createRideFromDriver(
    driver_id: number,
    data: Prisma.RideCreateInput,
  ): Promise<void> {
    this.ridesService.createRide(data);
    return;
  }

  async deleteRideFromDriverId(driver_id: number) {
    await this.ridesService.deleteRide(driver_id);
    await this.prisma.driver.delete({ where: { driver_id } });
  }
}
