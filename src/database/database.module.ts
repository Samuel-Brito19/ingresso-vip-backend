import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as userSchema from '../users/schema';

export const DRIZZLE = 'drizzle_connection';
@Module({
  providers: [
    {
      provide: DRIZZLE,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
        });
        return drizzle(pool, {
          schema: {
            ...userSchema,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
