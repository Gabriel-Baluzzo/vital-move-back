import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilDto } from './create-perfil.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  @IsString()
  @IsOptional()
  nombre: string;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  fecha_nacimiento: Date;
}
