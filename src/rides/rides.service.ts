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
    return this.prisma.ride.findMany();
  }

  async findUniqueRide(
    rideWhereUniqueInput: Prisma.RideWhereUniqueInput,
  ): Promise<Ride | null> {
    return this.prisma.ride.findUnique({
      where: rideWhereUniqueInput,
    });
  }

  async createRide(
    data: Prisma.RideCreateInput,
    driver_id: number,
  ): Promise<Ride> {
    return await this.prisma.ride.create({
      data: {
        Driver: {
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
