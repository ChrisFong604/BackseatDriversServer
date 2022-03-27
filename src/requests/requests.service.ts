import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Request as RequestModel, Ride } from '@prisma/client';
import { CreateRequestDto } from './dto/create-request.dto';
import { ConnectRequestDto } from './dto/connect-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  //Parses the defined DTO into a query
  async sendRequest(requestObject: RequestModel): Promise<RequestModel> {
    return await this.prisma.request.create({
      data: {
        requester: {
          connect: {
            id: requestObject.requester_id,
          },
        },
        requested_ride: {
          connect: {
            ride_id: requestObject.requested_ride_id,
          },
        },
        requester_location: requestObject.requester_location,
      },
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
          isFull: true,
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
