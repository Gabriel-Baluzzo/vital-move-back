import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

/**
 * DTO para la creación de un perfil de usuario.
 *
 * Contiene información opcional como nombre y fecha de nacimiento,
 * y el ID obligatorio de las credenciales asociadas.
 */
export class CreatePerfilDto {
  /**
   * Nombre del usuario (opcional).
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre: string;

  /**
   * Fecha de nacimiento del usuario (opcional).
   */
  @ApiProperty()
  @IsOptional()
  @IsDate()
  fecha_nacimiento: Date;

  /**
   * ID de las credenciales asociadas al perfil.
   */
  @IsInt()
  credencialesId: number;
}
