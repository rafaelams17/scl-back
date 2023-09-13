import { IsOptional, IsString } from 'class-validator';

export class BookDTO {
  @IsOptional()
  id?: number;

  @IsString()
  titulo: string;

  @IsOptional()
  autor: string;

  @IsOptional()
  quantPage: number;

  @IsOptional()
  genero: string;

  @IsOptional()
  data_inicial: string; // "2023-08-14T23:59:00Z"

  @IsOptional()
  data_fim: string; // "2023-08-14T23:59:00Z"

  @IsOptional()
  id_user?: number;
}
