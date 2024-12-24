import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { local } from 'src/local/schema';

export const eventStatus = pgEnum('eventStatus', ['AVAILABLE', 'UNAVAILABLE']);

export const event = pgTable('event', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  start_date: timestamp(),
  end_date: timestamp(),
  status: eventStatus('eventStatus'),
  local_id: integer('local_id').references(() => local.id),
});
