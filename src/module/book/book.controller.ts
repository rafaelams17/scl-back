import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BookService } from './book.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @IsPublic()
  @Post() // rota para criar o livro
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @IsPublic()
  @Get() // rota para pegar todos os livros cadastrados
  async findAll() {
    return this.bookService.findAll();
  }

  @IsPublic()
  @Get('unico/:id') // rota para pegar um livro
  async findOne(@Param('id') id: number) {
    return this.bookService.findOne(id);
  }

  @Get('total/') // rota para pegar a quantidade de livros cadastrados
  async totalModulos() {
    return this.bookService.totalBooks();
  }

  @Put(':id') // rota para atualizar um livro
  async update(@Param('id') id: number, @Body() data: BookDTO) {
    return this.bookService.update(id, data);
  }

  @Delete(':id') // rota para deletar um livro
  async delete(@Param('id') id: number) {
    return this.bookService.delete(id);
  }
}
