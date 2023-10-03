import { Injectable } from '@nestjs/common';
import { ContatoDto } from './contato.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ContatoService {
  constructor(private prisma: PrismaService) {}
  async create(data: ContatoDto) {
    const contatoExiste = await this.prisma.contato.findFirst({
      where: {
        nome: data.nome,
      },
    });

    if (contatoExiste) {
      throw new Error('Contato ja exixte');
    }
    const contato = await this.prisma.contato.create({
      data,
    });
    return contato;
  }

  async findAll() {
    return this.prisma.contato.findMany({
      include: {
        numeros: {
          select: {
            numero: true,
          },
        },
      },
    });
  }

  async update(id: string, data: ContatoDto) {
    const contatoExiste = await this.prisma.contato.findUnique({
      where: {
        id,
      },
    });

    if (!contatoExiste) {
      throw new Error('contato nao existe');
    }
    return this.prisma.contato.update({
      data,
      where: {
        id,
      },
    });
  }
  async remove(id: string) {
    const contatoExiste = await this.prisma.contato.findUnique({
      where: {
        id,
      },
    });

    if (!contatoExiste) {
      throw new Error('contato nao existe');
    }
    return await this.prisma.contato.delete({
      where: {
        id,
      },
    });
  }
}
