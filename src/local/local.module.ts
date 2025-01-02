import { Module } from '@nestjs/common';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [LocalService],
  controllers: [LocalController],
  exports: [LocalService],
  imports: [DatabaseModule],
})
export class LocalModule {}
