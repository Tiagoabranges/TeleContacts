import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NumeroService } from './numero.service';
import { NumeroDto } from './numero.dto';

@Controller('numero')
export class NumeroController {
  constructor(private readonly numeroService: NumeroService) {}

  @Post()
  async create(@Body() data: NumeroDto) {
    return this.numeroService.create(data);
  }

  @Get()
  findAll() {
    return this.numeroService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: NumeroDto) {
    return this.numeroService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numeroService.remove(id);
  }
}
