import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * DTO para la creación de una zona muscular.
 *
 * Contiene el nombre y la descripción de la zona muscular.
 */
export class CreateZonaMuscularDto {
  /**
   * Nombre de la zona muscular.
   */
  @ApiProperty()
  @IsString()
  nombre: string;

  /**
   * Descripción de la zona muscular.
   */
  @ApiProperty()
  @IsString()
  descripcion: string;
}
