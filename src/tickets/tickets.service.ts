import { Inject, Injectable } from '@nestjs/common';
import * as schema from './schema';
import { DRIZZLE } from 'src/database/database.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

@Injectable()
export class TicketsService {
  constructor(
    @Inject(DRIZZLE) private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async createTicket(ticket: typeof schema.tickets.$inferInsert) {
    await this.database.insert(schema.tickets).values(ticket);
    return ticket;
  }

  async getTickets(id: number) {
    return this.database
      .select()
      .from(schema.tickets)
      .where(eq(schema.tickets.event_id, id));
  }
}
