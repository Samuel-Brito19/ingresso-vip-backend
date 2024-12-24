import {
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: integer().notNull(),
  creation_date: timestamp('creation_date', { mode: 'date' }).defaultNow(),
});
