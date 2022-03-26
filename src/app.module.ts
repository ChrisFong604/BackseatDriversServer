import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidesController } from './rides/rides.controller';
import { RidesModule } from './rides/rides.module';
import { DriversController } from './drivers/drivers.controller';
import { RequestsController } from './requests/requests.controller';
import { RequestsModule } from './requests/requests.module';
import { DriversModule } from './drivers/drivers.module';
import { RidesService } from './rides/rides.service';
import { RequestsService } from './requests/requests.service';
import { PrismaModule } from './prismadatabase/prisma.module';
import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { UserController } from './user/user.controller';
@Module({
  imports: [
    PrismaModule,
    RidesModule,
    RequestsModule,
    DriversModule,
    UserModule,
    SchoolModule,
  ],
  controllers: [
    AppController,
    RidesController,
    DriversController,
    RequestsController,
    UserController,
  ],
  providers: [AppService, RidesService, RequestsService],
})
export class AppModule {}
