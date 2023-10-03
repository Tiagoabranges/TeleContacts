import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ContatoController],
  providers: [ContatoService, PrismaService],
})
export class ContatoModule {}
