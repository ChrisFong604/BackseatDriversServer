import { Injectable } from '@nestjs/common';
import { Driver, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  async getUniqueDriver(
    driverWhereUniqueInput: Prisma.DriverWhereUniqueInput,
  ): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: driverWhereUniqueInput,
    });
  }

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
}
