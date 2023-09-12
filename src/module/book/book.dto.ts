import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BookDTO {
  @IsOptional()
  id?: number;

  @IsString()
  titulo: string;

  @IsString()
  autor: string;

  @IsNumber()
  quantPage: number;

  @IsString()
  genero: string;

  @IsDateString()
  data_inicial: string; // "2023-08-14T23:59:00Z"

  @IsBoolean()
  leitura_atual: boolean;

  @IsDateString()
  data_fim: string; // "2023-08-14T23:59:00Z"

  @IsNumber()
  id_user?: number;
}
