import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { NamesController } from './names/names.controller';

@Module({
  imports: [PropertyModule],
  controllers: [AppController, NamesController],
  providers: [AppService],
})
export class AppModule {}
