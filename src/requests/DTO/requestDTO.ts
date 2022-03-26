import { IsBoolean, IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRequestDto {
  @IsNumber()
  requester_id: Number;

  @IsString()
  requester_location: string;

  @IsString()
  requested_ride: string;

  @IsString()
  requested_ride_id: string;

  @IsBoolean()
  status: Boolean;

  @IsString()
  requester: string;
}
