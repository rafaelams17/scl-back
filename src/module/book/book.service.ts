import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(data: BookDTO) {
    const bookExists = await this.prisma.book.findFirst({
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
