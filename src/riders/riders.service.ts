import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RidersService {
  constructor(private prisma: PrismaService) {}
}
