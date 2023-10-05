import { Module } from '@nestjs/common';
import { ContactModule } from './modules/Contact/Contact.module';
import { PhoneModule } from './modules/Phone/Phone.module';
@Module({
  imports: [ContactModule, PhoneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
