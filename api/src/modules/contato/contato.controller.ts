import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoDto } from './contato.dto';

@Controller('contato')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @Post()
  async create(@Body() data: ContatoDto) {
    return this.contatoService.create(data);
  }
  @Get()
  findAll() {
    return this.contatoService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: ContatoDto) {
    return this.contatoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatoService.remove(id);
  }
}
