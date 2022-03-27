import { Prisma, School } from '@prisma/client';

export class CreateUserDto {
  school: Prisma.SchoolCreateNestedOneWithoutUsersInput;
  first_name: string;
  last_name: string;
  email: string;
  address?: string;
  phone_number?: string;
}
