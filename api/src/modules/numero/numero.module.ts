import { Module } from '@nestjs/common';
import { NumeroService } from './numero.service';
import { NumeroController } from './numero.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [NumeroController],
  providers: [NumeroService, PrismaService],
})
export class NumeroModule {}
