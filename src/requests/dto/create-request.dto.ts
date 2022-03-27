import { Prisma } from '@prisma/client';

export class CreateRequestDto {
  requester: Prisma.UserCreateNestedOneWithoutRequestInput;
  requested_ride: Prisma.RideCreateNestedOneWithoutPassenger_requestsInput;
  requester_id: number;
  ride_id: number;
  requester_location: string;
}
