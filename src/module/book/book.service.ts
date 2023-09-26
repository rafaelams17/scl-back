import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  // cria um livro
  async create(data: BookDTO) {
    // verifica se o livro já foi criado
    const bookExists = await this.prisma.book.findFirst({
      // procure um book onde o titulo do livro é igual ao titulo do livro que está no bd
      where: {
        titulo: data.titulo,
        id_user: data.id_user,
      },
    });

    console.log('dADOS DE DATA', data);
    if (bookExists) {
      throw new Error('The Book already exists!');
    }

    // Data inicial e final recebida informada pelo usuário
    // Converta as strings em objetos DateTime
    const data_i = new Date(data.data_inicial);
    const data_f = new Date(data.data_final);

    // Formatar as datas
    const dataFormatadaInicial =
      // eslint-disable-next-line prettier/prettier
      data_i.getDate() +
      '/' +
      (data_i.getMonth() + 1) +
      '/' +
      data_i.getFullYear();
    const dataFormatadaFinal =
      // eslint-disable-next-line prettier/prettier
      data_f.getDate() +
      '/' +
      (data_f.getMonth() + 1) +
      '/' +
      data_f.getFullYear();

    // Crie o livro usando as datas convertidas
    const book = await this.prisma.book.create({
      data: {
        titulo: data.titulo,
        autor: data.autor,
        data_inicial:
          dataFormatadaInicial == 'NaN/NaN/NaN' ? '' : dataFormatadaInicial,
        leitura_atual: data.leitura_atual == null ? false : data.leitura_atual,
        data_final:
          dataFormatadaFinal == 'NaN/NaN/NaN' ? '' : dataFormatadaFinal,
        status: data.status == null ? '-' : data.status,
        avaliacao: data.avaliacao == null ? '-' : data.avaliacao,
        id_user: data.id_user,
      },
    });

    console.log(book);
    return book;
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async findOne(id: number) {
    console.log('Cheguei aquii');
    return this.prisma.book.findUnique({
      where: {
        id,
      },
    });
  }

  // somar a quantidade de livros cadastrados
  async totalBooks() {
    return this.prisma.book.count();
  }

  // atualiza os dados do livro
  async update(id: number, data: BookDTO) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }

  // deletar um livro
  async delete(id: number) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
