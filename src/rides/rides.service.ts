import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Ride } from '@prisma/client';

@Injectable()
export class RidesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRides(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RideWhereInput;
    where?: Prisma.RideWhereInput;
    orderBy?: Prisma.RideOrderByWithRelationInput;
  }): Promise<Ride[]> {
    return await this.prisma.ride.findMany();
  }

  async createRide(data: Prisma.RideCreateInput): Promise<Ride> {
    return await this.prisma.ride.create({
      data,
    });
  }

  async deleteRide(id: number): Promise<Ride> {
    return await this.prisma.ride.delete({
      where: {
        ride_id: id,
      },
    });
  }
}
