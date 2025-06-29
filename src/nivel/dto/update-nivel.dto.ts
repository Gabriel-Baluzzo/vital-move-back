import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelDto } from './create-nivel.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * DTO para la actualización parcial de un nivel.
 *
 * Extiende de {@link CreateNivelDto} haciendo opcionales sus propiedades.
 * Permite modificar el nombre y el número de orden del nivel.
 */
export class UpdateNivelDto extends PartialType(CreateNivelDto) {
  /**
   * Nombre descriptivo del nivel (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nombre?: string;

  /**
   * Número que representa el orden del nivel (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  numero_orden?: number;
}
