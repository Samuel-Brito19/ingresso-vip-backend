import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/create-category-dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async listCategory() {
    return this.categoryService.findCategory();
  }

  @Post()
  async createCategory(@Body() request: CreateCategoryDTO) {
    return this.categoryService.createCategory(request);
  }
}
