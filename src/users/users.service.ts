import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/database/database.module';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
@Injectable()
export class UsersService {
  constructor(
    @Inject(DRIZZLE) private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getUsers() {
    return this.database.query.users.findMany();
  }

  async createUser(user: typeof schema.users.$inferInsert) {
    await this.database.insert(schema.users).values(user);
  }
}
