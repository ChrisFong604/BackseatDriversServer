import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { RidersController } from './riders/riders.controller';
import { RidersModule } from './riders/riders.module';

@Module({
  imports: [RidersModule],
  controllers: [AppController, ControllerController, RidersController],
  providers: [AppService],
})
export class AppModule {}
