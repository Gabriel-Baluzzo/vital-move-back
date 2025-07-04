import { PartialType } from '@nestjs/mapped-types';
import { CreateZonaMuscularDto } from './create-zona-muscular.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * DTO para la actualización parcial de una zona muscular.
 *
 * Extiende de CreateZonaMuscularDto con todos sus campos opcionales,
 * permitiendo actualizar solo algunos campos.
 */
export class UpdateZonaMuscularDto extends PartialType(CreateZonaMuscularDto) {
  /**
   * Nombre de la zona muscular (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nombre: string;

  /**
   * Descripción de la zona muscular (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  descripcion: string;
}
