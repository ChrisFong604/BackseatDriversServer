import { User } from 'src/user/entities/user.entity';
import { Ride } from 'src/rides/entity/ride.entity';

export class Driver {
  driver_id: number;
  User?: User;
  user_id: number;
  Ride?: Ride[];
}
