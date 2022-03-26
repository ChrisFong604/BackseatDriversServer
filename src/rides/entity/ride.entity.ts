import { Request } from 'src/requests/entity/request.entity';
import { Driver } from 'src/drivers/entity/driver.entity';
export class Ride {
  ride_id: number;
  passenger_requests?: Request[];
  Driver?: Driver;
  driver_id: number;
  date_of_ride: string;
  number_of_seats: number;
  departure_location: string;
  school_location: string;
}
