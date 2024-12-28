import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const paymentStatus = pgEnum('paymentStatus', [
  'SUCCESS',
  'ERROR',
  'REVERSAL',
]);

export const purchase = pgTable('purchase', {
  id: serial('id').notNull(),
  purchase_date: timestamp('purchase_date', { mode: 'date' }).defaultNow(),
  price: integer('price').notNull(),
  status: text(),
  payment_method: text().notNull(),
});
