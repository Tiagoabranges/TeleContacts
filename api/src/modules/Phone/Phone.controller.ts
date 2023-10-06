import { Body, Controller, Post } from '@nestjs/common';
import { PhoneDto } from './Dto/Phone.dto';
import { PhoneService } from './Phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post()
  async create(@Body() data: PhoneDto) {
    return this.phoneService.create(data);
  }
}
