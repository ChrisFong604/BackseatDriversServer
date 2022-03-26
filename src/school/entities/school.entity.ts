import { User } from '../../user/entities/user.entity';

export class School {
  id: number;
  school_name: string;
  school_location: string;
  users?: User[];
}
