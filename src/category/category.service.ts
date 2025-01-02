import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DRIZZLE } from 'src/database/database.module';
import * as schema from './schema';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(DRIZZLE) private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async findCategory() {
    return this.database.query.category.findMany();
  }

  async createCategory(category: typeof schema.category.$inferInsert) {
    await this.database.insert(schema.category).values(category);
    return category;
  }
}
