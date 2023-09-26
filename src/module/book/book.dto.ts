import { IsNumber, IsOptional, IsString } from 'class-validator';

export class BookDTO {
  @IsOptional()
  id?: number;

  @IsString()
  titulo: string;

  @IsOptional()
  autor: string;

  @IsNumber()
  @IsOptional()
  quant_page: number;

  @IsOptional()
  data_inicial: string; // "2023-08-14T23:59:00Z"

  @IsOptional()
  data_final: string; // "2023-08-14T23:59:00Z"

  @IsOptional()
  leitura_atual: boolean;

  @IsOptional()
  status: string;

  @IsOptional()
  tipo: string;

  @IsOptional()
  id_user?: number;
}
