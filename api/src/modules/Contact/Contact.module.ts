import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ContactService } from './Contact.service';
import { ContactController } from './Contact.controller';

@Module({
  controllers: [ContactController],
  providers: [ContactService, PrismaService],
})
export class ContactModule {}
