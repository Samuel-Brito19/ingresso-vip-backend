import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
  exports: [TicketsService],
  imports: [DatabaseModule],
})
export class TicketsModule {}
