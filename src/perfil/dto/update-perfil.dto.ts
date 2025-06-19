import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilDto } from './create-perfil.dto';
import { IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateCredencialDto } from '../../../src/credencial/dto/update-credencial.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO para la actualización parcial de un perfil de usuario.
 *
 * Extiende de {@link CreatePerfilDto} y permite modificar de forma opcional
 * el nombre, la fecha de nacimiento y las credenciales asociadas.
 */
export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  /**
   * Nombre del usuario (opcional).
   */
  @ApiProperty()
  @IsString()
  @IsOptional()
  nombre?: string;

  /**
   * Fecha de nacimiento del usuario (opcional).
   */
  @ApiProperty()
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  fecha_nacimiento?: Date;

  /**
   * Datos para actualizar las credenciales asociadas (opcional).
   */
  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateCredencialDto)
  credencial?: UpdateCredencialDto;
}
