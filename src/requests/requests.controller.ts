import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { Request as RequestModel } from '@prisma/client';
import { RequestsService } from './requests.service';
import { ConnectRequestDto } from './dto/connect-request.dto';

@Controller('api/request')
export class RequestsController {
  constructor(private requestService: RequestsService) {}

  // @HttpCode(200)
  // @Get('/request/:id')
  // async sendRequest(@Param(':id') id: string) {
  //   return this.requestService.sendRequest({ id: id });
  // }

  @HttpCode(201)
  @Post('createrequest')
  async sendRequest(
    @Body() createRequestDto: CreateRequestDto,
  ): Promise<RequestModel> {
    return this.requestService.sendRequest(createRequestDto);
  }

  // @Put('updaterequest/:id')
  // async updateRequest(@Param(':id') id: string): Promise<RequestModel> {}
}
