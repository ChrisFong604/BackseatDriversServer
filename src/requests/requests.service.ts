import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Request } from '@prisma/client';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  async sendRequest(data: Prisma.RequestCreateInput): Promise<Request> {
    return this.prisma.request.create({
      data,
    });
  }
}
