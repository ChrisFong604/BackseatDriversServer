import { School } from 'src/school/entities/school.entity';
import { Request } from 'src/requests/entity/request.entity';
import { Driver } from 'src/drivers/entity/driver.entity';

export class User {
  id: number;
  school?: School | null;
  school_id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  phone_number: string | null;
  Request?: Request[];
  Driver?: Driver | null;
}
