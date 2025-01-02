import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event-dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async findEvents() {
    return this.eventService.getEvents();
  }

  @Post()
  async createEvent(@Body() request: CreateEventDto) {
    return this.eventService.createEvent(request);
  }
}
