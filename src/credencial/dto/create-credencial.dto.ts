import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

/**
 * DTO utilizado para la creación de credenciales de usuario.
 *
 * Contiene el email y la contraseña necesarios para registrar una nueva credencial.
 */
export class CreateCredencialDto {
  /**
   * Correo electrónico asociado a la credencial.
   * Debe ser un email válido.
   */
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  /**
   * Contraseña asociada a la credencial.
   */
  @ApiProperty()
  @IsString()
  password: string;
}
