import { Prisma } from '@prisma/client';

export class CreateDriverDto {
  User: Prisma.UserCreateNestedOneWithoutDriverInput;
  Ride?: Prisma.RideCreateNestedManyWithoutDriverInput;
}
