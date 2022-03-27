import { Prisma } from '@prisma/client';

export class CreateRideDto {
  driver: Prisma.DriverCreateNestedOneWithoutRideInput;
  date_of_ride: string;
  number_of_seats: number;
  departure_location: string;
  school_location: string;
}
