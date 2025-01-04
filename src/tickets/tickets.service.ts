import { Inject, Injectable } from '@nestjs/common';
import * as schema from './schema';
import { DRIZZLE } from 'src/database/database.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class TicketsService {
  constructor(
    @Inject(DRIZZLE) private readonly database: NodePgDatabase<typeof schema>,
  ) {}
}
