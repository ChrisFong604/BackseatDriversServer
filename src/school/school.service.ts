import { Injectable } from '@nestjs/common';
import { Prisma, School } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSchoolDto: CreateSchoolDto) {
    return 'This action adds a new school';
  }

  async getAllSchools(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SchoolWhereInput;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput;
  }): Promise<School[]> {
    return this.prisma.school.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
