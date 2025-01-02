import { relations } from 'drizzle-orm';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { event } from 'src/event/schema';

export const local = pgTable('local', {
  id: serial('id').primaryKey(),
  name: text().notNull(),
  city: text().notNull(),
  street: text().notNull(),
  neighborhood: text().notNull(),
  number: text().notNull(),
});

export const localRelations = relations(local, ({ many }) => ({
  events: many(event),
}));
