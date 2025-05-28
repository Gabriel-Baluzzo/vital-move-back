import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilDto } from './create-perfil.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsOptional()
  @IsInt()
  edad?: number;
}
