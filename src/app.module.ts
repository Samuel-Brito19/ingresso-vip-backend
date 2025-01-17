import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { EventModule } from './event/event.module';
import { LocalModule } from './local/local.module';
import { CategoryModule } from './category/category.module';
import { PurchaseModule } from './purchase/purchase.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    TicketsModule,
    EventModule,
    LocalModule,
    CategoryModule,
    PurchaseModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
