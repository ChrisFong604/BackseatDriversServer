import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Controller('api/school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @HttpCode(201)
  @Post('create')
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.createSchool(createSchoolDto);
  }

  @HttpCode(200)
  @Get('/all')
  findAll() {
    return this.schoolService.getAllSchools({});
  }

  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.getSpecificSchool(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
  //   return this.schoolService.update(+id, updateSchoolDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.removeSchool(id);
  }
}
