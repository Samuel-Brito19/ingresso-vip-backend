import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const local = pgTable('local', {
  id: serial('id').primaryKey(),
  name: text().notNull(),
  city: text().notNull(),
  street: text().notNull(),
  neighborhood: text().notNull(),
  number: text().notNull(),
});
