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
  dataPublicacao: Date; // "2023-08-14T23:59:00Z"

  @IsNotEmpty()
  image: string;
}
