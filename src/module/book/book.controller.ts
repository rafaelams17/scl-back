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
  @Post() // criar
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @IsPublic()
  @Get() // pegar todos
  async findAll() {
    return this.bookService.findAll();
  }

  @IsPublic()
  @Get('unico/:id') // pegar um
  async findOne(@Param('id') id: number) {
    return this.bookService.findOne(id);
  }

  @Get('total/') // qauntidade de livros
  async totalModulos() {
    return this.bookService.totalBooks();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: BookDTO) {
    return this.bookService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.bookService.delete(id);
  }
}
