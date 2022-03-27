import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Request } from '@prisma/client';
import { CreateRequestDto } from './dto/create-request.dto';
import { RequestsService } from './requests.service';

@Controller('api/request')
export class RequestsController {
  constructor(private requestService: RequestsService) {}

  // @HttpCode(200)
  // @Get('/request/:id')
  // async sendRequest(@Param(':id') id: string) {
  //   return this.requestService.sendRequest({ id: id });
  // }

  @HttpCode(201)
  @Post('send')
  async sendRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.createRequest(createRequestDto);
  }

  @Patch('update')
  async updateRequest(@Body() requestModel: Request): Promise<Request> {
    return this.requestService.updateRequestStatus(requestModel);
  }

  // @Put('updaterequest/:id')
  // async updateRequest(@Param(':id') id: string): Promise<RequestModel> {}
}
