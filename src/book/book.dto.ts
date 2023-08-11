import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BookDTO {
  @IsString()
  titulo: string;

  @IsString()
  autor: string;

  @IsNumber()
  quantPage: number;

  @IsString()
  sinopse: string;

  @IsString()
  editora: string;

  @IsNotEmpty()
  anoPublicacao: Date;

  @IsString()
  image: string;
}
