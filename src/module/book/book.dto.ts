import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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
  dataPublicacao: string; // "2023-08-14T23:59:00Z"

  @IsOptional()
  image: string;

  // @IsNumber()
  // id_user: number;
}
