import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactDto } from './Dto/Contact.dto';
import { ContactService } from './Contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() data: ContactDto) {
    return this.contactService.create(data);
  }
  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: ContactDto) {
    return this.contactService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
