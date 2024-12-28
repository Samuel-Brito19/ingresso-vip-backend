import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

export const purchase = pgTable('purchase', {
  id: serial('id').notNull(),
  purchase_date: timestamp('purchase_date', { mode: 'date' }).defaultNow(),
  price: integer('price').notNull(),
});
