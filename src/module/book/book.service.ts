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
      // verifica pelo tiyulo e o id do usuario
      where: {
        titulo: data.titulo,
      },
    });

    if (bookExists) {
      throw new Error('The Book already exists!');
    }

    const book = await this.prisma.book.create({
      data,
    });

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
