import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

/**
 * DTO para la creación de un video.
 *
 * Contiene los datos necesarios para registrar un video en el sistema,
 * incluyendo nombre, descripción, URLs, y referencias a zona muscular y nivel.
 */
export class CreateVideoDto {
  /**
   * Nombre del video.
   */
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  /**
   * Descripción del video.
   */
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  /**
   * URL del video.
   */
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  url_video: string;

  /**
   * URL de la miniatura del video.
   */
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  url_miniatura: string;

  /**
   * ID de la zona muscular relacionada con el video.
   */
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  zona_muscular_id: number;

  /**
   * ID del nivel asociado al video.
   */
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  nivel_id: number;
}
