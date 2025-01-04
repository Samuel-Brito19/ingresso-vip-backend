import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { event } from 'src/event/schema';

export const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
  creation_date: timestamp('creation_date', { mode: 'string' }).defaultNow(),
  qtd: integer('qtd').notNull(),
  event_id: integer('event_id').references(() => event.id),
});

export const ticketsRelations = relations(tickets, ({ one }) => ({
  event: one(event, {
    fields: [tickets.event_id],
    references: [event.id],
  }),
}));
