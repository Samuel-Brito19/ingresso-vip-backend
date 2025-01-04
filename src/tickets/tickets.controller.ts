import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDTO } from './dto/create-ticket-dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get(':id')
  async findTickets(@Param('id') param: number): Promise<any> {
    return this.ticketsService.getTickets(param);
  }

  @Post()
  async createTicket(@Body() request: CreateTicketDTO) {
    return this.ticketsService.createTicket(request);
  }
}
