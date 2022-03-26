import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { RidersController } from './riders/riders.controller';
import { RidersModule } from './riders/riders.module';
import { RidesController } from './rides/rides.controller';
import { RidesModule } from './rides/rides.module';

@Module({
  imports: [RidersModule, RidesModule],
  controllers: [AppController, ControllerController, RidersController, RidesController],
  providers: [AppService],
})
export class AppModule {}
