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
  async findAll() {
    return this.prisma.phone.findMany();
  }

  async update(id: string, data: PhoneDto) {
    const phoneExist = await this.prisma.phone.findUnique({
      where: {
        id,
      },
    });

    if (!phoneExist) {
      throw new Error('phone does not exist');
    }
    return this.prisma.phone.update({
      data,
      where: {
        id,
      },
    });
  }
  async remove(id: string) {
    const phoneExist = await this.prisma.phone.findUnique({
      where: {
        id,
      },
    });

    if (!phoneExist) {
      throw new Error('phone does not exist');
    }
    return await this.prisma.phone.delete({
      where: {
        id,
      },
    });
  }
}
