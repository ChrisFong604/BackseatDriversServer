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

  async createRide(
    driver_id: number,
    data: Prisma.RideCreateInput,
  ): Promise<Ride> {
    return await this.prisma.ride.create({
      data: {
        driver: {
          connect: {
            driver_id: driver_id,
          },
        },
        date_of_ride: data.date_of_ride,
        number_of_seats: data.number_of_seats,
        departure_location: data.departure_location,
        school_location: data.school_location,
      },
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
