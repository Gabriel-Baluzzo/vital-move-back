import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min } from 'class-validator';

/**
 * DTO para la creación de un nuevo nivel.
 *
 * Contiene el nombre del nivel y su orden numérico.
 */
export class CreateNivelDto {
  /**
   * Nombre descriptivo del nivel.
   */
  @ApiProperty()
  @IsString()
  nombre: string;

  /**
   * Número que representa el orden del nivel.
   * Debe ser un entero mayor o igual a 0.
   */
  @ApiProperty()
  @IsInt()
  @Min(0)
  numero_orden: number;
}
