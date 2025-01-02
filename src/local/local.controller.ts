import { Body, Controller, Get, Post } from '@nestjs/common';
import { LocalService } from './local.service';
import { CreateLocalDTO } from './dto/create-local-dto';

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Get()
  async findLocals() {
    return this.localService.getLocals();
  }

  @Post()
  async createLocal(@Body() request: CreateLocalDTO) {
    return this.localService.createLocal(request);
  }
}
