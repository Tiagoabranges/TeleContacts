import { Module } from '@nestjs/common';
import { ContatoModule } from './modules/contato/contato.module';
import { NumeroModule } from './modules/numero/numero.module';

@Module({
  imports: [ContatoModule, NumeroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
