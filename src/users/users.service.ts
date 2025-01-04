import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/database/database.module';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { hash } from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @Inject(DRIZZLE) private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getUsers() {
    return this.database.query.users.findMany({
      columns: {
        name: true,
        email: true,
        role: true,
        password: true,
      },
    });
  }

  async createUser(user: typeof schema.users.$inferInsert) {
    const { password } = user;
    const hashPassword = await hash(password, 8);

    await this.database.insert(schema.users).values({
      ...user,
      password: hashPassword,
    });
    return user;
  }

  async findUser(name: string) {
    return this.database.query.users.findFirst({
      where: eq(schema.users.name, name),
    });
  }
}
