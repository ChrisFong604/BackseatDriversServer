export class CreateRideDto {
  Driver: {
    id: number;
  };
  driver_id: number;
  date_of_ride: string;
  number_of_seats: number;
  departure_location: string;
  school_location: string;
}
