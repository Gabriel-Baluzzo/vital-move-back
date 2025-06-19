import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

/**
 * DTO que representa el resultado de un examen realizado por el usuario.
 *
 * Contiene la cantidad de puntos obtenidos, limitada a un rango específico.
 */
export class ResultadoExamenDto {
  /**
   * Cantidad de puntos obtenidos en el examen.
   * Debe ser un número entero entre 0 y 12.
   */
  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(12)
  puntos: number;
}
