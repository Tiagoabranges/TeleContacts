import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PhoneDto } from './Dto/Phone.dto';
import { PhoneService } from './Phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post()
  async create(@Body() data: PhoneDto) {
    return this.phoneService.create(data);
  }

  @Get()
  findAll() {
    return this.phoneService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: PhoneDto) {
    return this.phoneService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneService.remove(id);
  }
}
