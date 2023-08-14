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
  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  // http://localhost:3000/238498239472934
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: BookDTO) {
    return this.bookService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.bookService.delete(id);
  }
}
