import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('rides')
export class RidesController {
    @Get()
    findAll(): string {
    return 'This action returns all locations';
  }

}
