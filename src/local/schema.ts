import { pgTable, serial } from 'drizzle-orm/pg-core';

export const local = pgTable('local', {
  id: serial('id').primaryKey(),
});
