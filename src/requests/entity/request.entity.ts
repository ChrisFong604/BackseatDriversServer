import { User } from 'src/user/entities/user.entity';
import { Ride } from 'src/rides/entity/ride.entity';

export class Request {
  id: number;
  requester?: User;
  requester_id: number;
  requester_location: string;
  requested_ride?: Ride;
  requested_ride_id: number;
  status: boolean;
}
