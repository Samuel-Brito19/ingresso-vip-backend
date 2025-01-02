import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DRIZZLE } from 'src/database/database.module';
import * as schema from './schema';
import { eq } from 'drizzle-orm';
@Injectable()
export class EventService {
  constructor(
    @Inject(DRIZZLE) private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getEvents() {
    console.log(this.database.query.event);
    return this.database.query.event.findMany({
      columns: {},
    });
  }

  async createEvent(event: typeof schema.event.$inferInsert) {
    await this.database.insert(schema.event).values(event);
    return event;
  }

  async findByName(name: string) {
    return this.database.query.event.findFirst({
      where: eq(schema.event.name, name),
    });
  }
}
