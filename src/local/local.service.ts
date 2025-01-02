import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DRIZZLE } from 'src/database/database.module';
import * as schema from './schema';

@Injectable()
export class LocalService {
  constructor(
    @Inject(DRIZZLE) private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getLocals() {
    return this.database.query.local.findMany({});
  }

  async createLocal(local: typeof schema.local.$inferInsert) {
    await this.database.insert(schema.local).values(local);
    return local;
  }
}
