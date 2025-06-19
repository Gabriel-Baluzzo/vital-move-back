import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO para las operaciones de autenticación (registro e inicio de sesión).
 *
 * Contiene los datos necesarios para autenticar a un usuario.
 */
export class AuthDto {
  /**
   * Correo electrónico del usuario.
   * Debe tener un formato de email válido.
   */
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  /**
   * Contraseña del usuario.
   */
  @ApiProperty()
  @IsString()
  password: string;
}
