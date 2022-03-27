import { Injectable, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Request, Request as RequestModel, Ride } from '@prisma/client';
import { CreateRequestDto } from './dto/create-request.dto';
import { ConnectRequestDto } from './dto/connect-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  //Get all requests for a specific ride
  async getRideRequests(ride_id: number): Promise<RequestModel[]> {
    return await this.prisma.request.findMany({
      where: { requested_ride_id: ride_id },
    });
  }

  // async getSpecificRequest(ride_id: number): Promise<RequestModel>{
  //   return await this.prisma.request.findUnique({
  //     where
  //   })
  // }

  //Parses the defined DTO into a query
  async createRequest(data: Prisma.RequestCreateInput): Promise<RequestModel> {
    return await this.prisma.request.create({
      data,
    });
  }

  //updates request status and/or location of passenger
  // async updateRequestStatus(
  //   flag: boolean,
  //   requestBody: Prisma.RequestUncheckedUpdateInput,
  // ): Promise<Request> {
  //   const requestObj = await this.prisma.request.update({
  //     where: {
  //       request_id: requestBody.requested_ride_id,
  //     },
  //     data: {
  //       status: flag,
  //     },
  //     include: {
  //       requested_ride: {
  //         select: {
  //           number_of_seats: true,
  //         },
  //       },
  //     },
  //   });

  //   const record = await this.prisma.ride.findUnique({
  //     where: {
  //       ride_id: requestBody.requested_ride_id,
  //     },
  //   });

  //   if (record.number_of_seats - 1 == 0) {
  //     await this.prisma.ride.update({
  //       where: {
  //         ride_id: requestBody.requested_ride_id,
  //       },
  //       data: {
  //         number_of_seats: 0,
  //         is_full: true,
  //       },
  //     });

  //     return requestObj;
  //   }

  //   await this.prisma.ride.update({
  //     where: {
  //       ride_id: requestBody.requested_ride_id,
  //     },
  //     data: {
  //       number_of_seats: record.number_of_seats - 1,
  //     },
  //   });
  //   return requestObj;
  // }
}
