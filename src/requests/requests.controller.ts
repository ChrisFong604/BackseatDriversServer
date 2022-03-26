import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { Request as RequestModel } from '@prisma/client';
import { RequestsService } from './requests.service';

@Controller('api/request')
export class RequestsController {
  constructor(private requestService: RequestsService) {}

  // @HttpCode(200)
  // @Get('/request/:id')
  // async sendRequest(@Param(':id') id: string) {
  //   return this.requestService.sendRequest({ id: id });
  // }

  // @HttpCode(201)
  // @Post('/request')
  // async sendRequest(
  //   @Body() CreateRequestDto: CreateRequestDto,
  // ): Promise<RequestModel> {
  //   return this.requestService.sendRequest(CreateRequestDto);
}
