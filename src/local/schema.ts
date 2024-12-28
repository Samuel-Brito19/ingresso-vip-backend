import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { event } from 'src/event/schema';

export const local = pgTable('local', {
  id: serial('id').primaryKey(),
  name: text().notNull(),
  city: text().notNull(),
  street: text().notNull(),
  neighborhood: text().notNull(),
  number: text().notNull(),
  event_id: integer('event_id').references(() => event.id),
});

export const localRelations = relations(local, ({ many }) => ({
  event: many(event),
}));
