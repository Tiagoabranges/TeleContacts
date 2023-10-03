import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { NumeroDto } from './numero.dto';

@Injectable()
export class NumeroService {
  constructor(private prisma: PrismaService) {}
  async create(data: NumeroDto) {
    const numero = await this.prisma.numero.create({
      data,
    });
    return numero;
  }
  async findAll() {
    return this.prisma.numero.findMany();
  }

  async update(id: string, data: NumeroDto) {
    const numeroExiste = await this.prisma.numero.findUnique({
      where: {
        id,
      },
    });

    if (!numeroExiste) {
      throw new Error('numero nao existe');
    }
    return this.prisma.numero.update({
      data,
      where: {
        id,
      },
    });
  }
  async remove(id: string) {
    const numeroExiste = await this.prisma.numero.findUnique({
      where: {
        id,
      },
    });

    if (!numeroExiste) {
      throw new Error('numero nao existe');
    }
    return await this.prisma.numero.delete({
      where: {
        id,
      },
    });
  }
}
