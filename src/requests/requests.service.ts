import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Request } from '@prisma/client';
import { CreateRequestDto } from './dto/create-request.dto';
import { ConnectRequestDto } from './dto/connect-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  //Parses the defined DTO into a query
  async sendRequest(DTO: CreateRequestDto): Promise<Request> {
    return this.prisma.request.create({
      data: {
        requester: {
          connect: {
            id: DTO.requester_id,
          },
        },
        requested_ride: {
          connect: {
            ride_id: DTO.ride_id,
          },
        },
        requester_location: DTO.requester_location,
      },
    });
  }

  //updates request status and/or location of passenger
  async updateRequestStatus(DTO: UpdateRequestDto): Promise<Request> {
    return this.prisma.request.update({
      where: {
        id: DTO.id,
      },
      data: {
        status: DTO.status,
        requester_location: DTO.requester_location,
      },
    });
  }
}
