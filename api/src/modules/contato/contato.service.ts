import { Injectable } from '@nestjs/common';
import { ContatoDto } from './contato.dto';
import { PrismaService } from 'src/database/PrismaService';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

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
  async remove(id) {
    const contatoExiste = await this.prisma.contato.findUnique({
      where: {
        id,
      },
    });

    if (!contatoExiste) {
      throw new Error('contato nao existe');
    }

    // Registre o evento de exclusão no log
    const mensagemLog = `Contato ID ${id} foi excluído.`;
    this.registrarLog(mensagemLog);

    return await this.prisma.contato.delete({
      where: {
        id,
      },
    });
  }

  // Função para registrar eventos em um arquivo de log
  registrarLog(mensagem) {
    const dataAtual = new Date().toLocaleString();
    const log = `${dataAtual}: ${mensagem}\n`;

    fs.appendFile('contatos.log', log, (err) => {
      if (err) {
        console.error('Erro ao registrar o log:', err);
      } else {
        console.log('Log registrado com sucesso:', mensagem);
      }
    });
  }
}
