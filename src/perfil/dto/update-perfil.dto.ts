import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilDto } from './create-perfil.dto';
import { IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateCredencialDto } from 'src/credencial/dto/update-credencial.dto';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  @IsString()
  @IsOptional()
  nombre: string;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  fecha_nacimiento: Date;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateCredencialDto)
  credencial: UpdateCredencialDto;
}
