
import {Request} from './request.entity'
import {Driver} from './driver.entity'


export class Ride {
  ride_id: number ;
passenger_requests?: Request[] ;
passenger_id: number ;
Driver?: Driver ;
driver_id: number ;
date_of_ride: string ;
number_of_seats: number ;
departure_location: string ;
school_location: string ;
}
