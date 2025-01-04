import { Body, Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDTO } from './dto/create-ticket-dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get(':event_id')
  async findTickets(@Param() param: number): Promise<any> {
    return this.ticketsService.getTickets(param);
  }

  async createTicket(@Body() request: CreateTicketDTO) {
    return this.ticketsService.createTicket(request);
  }
}
