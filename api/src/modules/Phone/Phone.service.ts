import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PhoneDto } from './Dto/Phone.dto';

@Injectable()
export class PhoneService {
  constructor(private prisma: PrismaService) {}
  async create(data: PhoneDto) {
    const phone = await this.prisma.phone.create({
      data,
    });
    return phone;
  }
}
