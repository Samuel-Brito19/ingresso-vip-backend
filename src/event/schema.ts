import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { category } from 'src/category/schema';
import { local } from 'src/local/schema';
import { tickets } from 'src/tickets/schema';

export const eventStatus = pgEnum('eventStatus', ['AVAILABLE', 'UNAVAILABLE']);

export const event = pgTable('event', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  //change both to datetime
  start_date: timestamp({ mode: 'string' }),
  end_date: timestamp({ mode: 'string' }),
  status: eventStatus('eventStatus'),
  total_capacity: integer('total_capacity').notNull(),
  local_id: integer('local_id').references(() => local.id),
  category_id: integer('category_id').references(() => category.id),
});

export const eventRelations = relations(event, ({ one, many }) => ({
  local: one(local, {
    fields: [event.local_id],
    references: [local.id],
  }),
  category: one(category, {
    fields: [event.category_id],
    references: [category.id],
  }),
  ticket: many(tickets),
}));
