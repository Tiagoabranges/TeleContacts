import { Injectable } from '@nestjs/common';
import { ContactDto } from './Dto/Contact.dto';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './Dto/CreateContactDto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const contactExiste = await this.prisma.contact.findFirst({
      where: {
        name: data.name,
      },
    });

    if (contactExiste) {
      throw new Error('Existing contact');
    }
    const contact = await this.prisma.contact.create({
      data,
    });
    return contact;
  }

  async findAll() {
    return this.prisma.contact.findMany({
      include: {
        phones: {
          select: {
            phone: true,
          },
        },
      },
    });
  }

  async update(id: string, data: ContactDto) {
    const contactExist = await this.prisma.contact.findUnique({
      where: {
        id,
      },
    });

    if (!contactExist) {
      throw new Error('contact does not exist');
    }
    return this.prisma.contact.update({
      data: {
        name: data.name,
        age: data.age,
      },
      where: {
        id,
      },
    });
  }
  async remove(id) {
    const contactExist = await this.prisma.contact.findUnique({
      where: {
        id,
      },
    });

    if (!contactExist) {
      throw new Error('contact does not exist');
    }

    // Registre o evento de exclusão no log
    const msgLog = `contact ID ${id} It was excluded.`;
    this.registerLog(msgLog);

    return await this.prisma.contact.delete({
      where: {
        id,
      },
    });
  }

  // Função para registrar eventos em um arquivo de log
  registerLog(msg) {
    const dataAtual = new Date().toLocaleString();
    const log = `${dataAtual}: ${msg}\n`;

    fs.appendFile('contacts.log', log, (err) => {
      if (err) {
        console.error('Error recording log:', err);
      } else {
        console.log('Log registered successfully:', msg);
      }
    });
  }
}
