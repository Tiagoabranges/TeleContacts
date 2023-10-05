import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PhoneController } from './Phone.controller';
import { PhoneService } from './Phone.service';

@Module({
  controllers: [PhoneController],
  providers: [PhoneService, PrismaService],
})
export class PhoneModule {}
