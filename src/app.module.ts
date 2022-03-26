import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidesController } from './rides/rides.controller';
import { RidesModule } from './rides/rides.module';
import { DriversController } from './drivers/drivers.controller';
import { RequestsController } from './requests/requests.controller';
import { RequestsModule } from './requests/requests.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [RidesModule, RequestsModule, DriversModule],
  controllers: [
    AppController,
    RidesController,
    DriversController,
    RequestsController,
  ],
  providers: [AppService],
})
export class AppModule {}
