import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Request as RequestModel, Ride } from '@prisma/client';
import { CreateRequestDto } from './dto/create-request.dto';
import { ConnectRequestDto } from './dto/connect-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

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
  async updateRequestStatus(requestModel: RequestModel): Promise<RequestModel> {
    const requestObj = await this.prisma.request.update({
      where: {
        request_id: requestModel.request_id,
      },
      data: {
        status: requestModel.status,
      },
    });

    const record = await this.prisma.ride.findUnique({
      where: {
        ride_id: requestModel.requested_ride_id,
      },
    });

    if (record.number_of_seats - 1 == 0) {
      await this.prisma.ride.update({
        where: {
          ride_id: requestModel.requested_ride_id,
        },
        data: {
          number_of_seats: 0,
          is_full: true,
        },
      });

      return requestObj;
    }

    await this.prisma.ride.update({
      where: {
        ride_id: requestModel.requested_ride_id,
      },
      data: {
        number_of_seats: record.number_of_seats - 1,
      },
    });
    return requestObj;
  }
}
