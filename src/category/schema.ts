import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const category = pgTable('category', {
  id: serial('id').primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
});
