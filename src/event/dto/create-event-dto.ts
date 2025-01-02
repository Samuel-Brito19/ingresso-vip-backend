export class CreateEventDto {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  total_capacity: number;
  local_id: number;
  category_id: number;
}
