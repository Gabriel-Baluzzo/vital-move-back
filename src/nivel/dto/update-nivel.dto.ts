import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelDto } from './create-nivel.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateNivelDto extends PartialType(CreateNivelDto) {
  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsInt()
  numero_orden: number;
}
