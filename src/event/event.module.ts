import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService],
  imports: [DatabaseModule],
})
export class EventModule {}
