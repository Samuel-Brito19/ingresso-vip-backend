import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './dto/create-user-dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard)
  @Post()
  async createUser(@Body() request: CreateUserRequest) {
    return this.userService.createUser(request);
  }
}
