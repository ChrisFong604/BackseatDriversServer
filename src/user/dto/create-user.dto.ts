export class CreateUserDto {
  school: {
    school_name: string;
  };
  first_name: string;
  last_name: string;
  email: string;
  address?: string;
  phone_number?: string;
}
