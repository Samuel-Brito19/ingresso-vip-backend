import { pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const UserRole = pgEnum('userRole', ['ADMIN', 'USER']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  role: UserRole('userRole').default('USER'),
});
