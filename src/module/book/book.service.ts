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
        id_user: data.id,
      },
    });

    if (bookExists) {
      throw new Error('The Book already exists!');
    }

    // Data inicial e final recebida informada pelo usuário
    const data_i = data.data_inicial;
    const data_f = data.data_fim;

    // Converta as strings em objetos DateTime
    const dataInicial = new Date(data_i);
    const dataFinal = new Date(data_f);

    // Crie o livro usando as datas convertidas
    const book = await this.prisma.book.create({
      data: {
        titulo: data.titulo,
        autor: data.autor,
        quantPage: data.quantPage,
        genero: data.genero,
        data_inicial: dataInicial,
        leitura_atual: data.leitura_atual,
        data_fim: dataFinal,
        id_user: data.id,
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
