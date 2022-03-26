import { Injectable } from '@nestjs/common';
import { Prisma, School } from '@prisma/client';
import { create } from 'domain';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}

  async createSchool(createSchoolDto: CreateSchoolDto): Promise<School> {
    return await this.prisma.school.create({ data: createSchoolDto });
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

  async getSpecificSchool(id: string) {
    return await this.prisma.school.findUnique({
      where: {
        school_name: id,
      },
    });
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  async removeSchool(id: string) {
    return await this.prisma.school.delete({
      where: {
        school_name: id,
      },
    });
  }
}
