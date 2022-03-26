import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateRideDto {
  @IsString()
  ride_id: String;

  @IsNumber()
  passenger_id: Number;

  @IsString()
  driver_id: String;

  @IsString()
  date_of_ride: String;

  @IsNumber()
  number_of_seats: Number;

  @IsString()
  departure_location: String;

  @IsString()
  school_location: String;
}

export class ListAllRides extends PartialType(CreateRideDto) {}
