import { IsOptional, IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoDto } from './create-video.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * DTO para filtrar videos.
 *
 * Extiende de CreateVideoDto con todos sus campos opcionales
 * y agrega filtros adicionales opcionales para nivel y zona muscular.
 */
export class FilterVideoDto extends PartialType(CreateVideoDto) {
  /**
   * ID del nivel para filtrar videos (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  nivel_id?: number;

  /**
   * ID de la zona muscular para filtrar videos (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  zona_muscular_id?: number;

  /**
   * Nombre del video para filtrar (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nombre?: string;

  /**
   * Descripción del video para filtrar (opcional).
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  descripcion?: string;
}
