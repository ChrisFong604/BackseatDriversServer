import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateRequestDto } from './DTO/requestDTO';
import { Request as RequestModel } from '@prisma/client';
import { RequestsService } from './requests.service';

@Controller('api')
export class RequestsController {
  constructor(private requestService: RequestsService) {}

  //   @HttpCode(201)
  //   @Post('/request')
  //   async sendRequest(
  //     @Body() CreateRequestDto: CreateRequestDto,
  //   ): Promise<RequestModel> {
  //     return this.requestService.sendRequest(CreateRequestDto);
}
