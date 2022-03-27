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

  @HttpCode(201)
  @Post('send')
  async sendRequest(@Body() requestModel: RequestModel): Promise<RequestModel> {
    return this.requestService.sendRequest(requestModel);
  }

  @Patch('update')
  async updateRequest(
    @Body() requestModel: RequestModel,
  ): Promise<RequestModel> {
    return this.requestService.updateRequestStatus(requestModel);
  }

  // @Put('updaterequest/:id')
  // async updateRequest(@Param(':id') id: string): Promise<RequestModel> {}
}
