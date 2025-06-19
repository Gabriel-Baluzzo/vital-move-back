import { PartialType } from '@nestjs/mapped-types';
import { CreateCredencialDto } from './create-credencial.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO utilizado para actualizar credenciales de usuario.
 *
 * Extiende de {@link CreateCredencialDto} convirtiendo todas sus propiedades en opcionales.
 * Permite actualizar el email, la contraseña o ambos.
 */
export class UpdateCredencialDto extends PartialType(CreateCredencialDto) {
  /**
   * Nuevo correo electrónico del usuario.
   * Debe tener formato de email válido.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  /**
   * Nueva contraseña del usuario.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  password?: string;
}
