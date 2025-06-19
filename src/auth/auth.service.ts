import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { CredencialService } from '../../src/credencial/credencial.service';
import * as bcrypt from 'bcrypt';

/**
 * Servicio encargado de gestionar la lógica de autenticación,
 * incluyendo el registro, inicio de sesión y generación de tokens JWT.
 */
@Injectable()
export class AuthService {
  /**
   * Crea una nueva instancia del servicio de autenticación.
   *
   * @param credencial Servicio para la gestión de credenciales de usuario.
   * @param jwtService Servicio de NestJS para la generación de tokens JWT.
   */
  constructor(
    private credencial: CredencialService,
    private jwtService: JwtService,
  ) {}

  /**
   * Genera un token JWT para el usuario autenticado.
   *
   * @param userId ID del usuario.
   * @param email Correo electrónico del usuario.
   * @param rol Rol del usuario.
   * @param nivel_actual_id Nivel actual del perfil del usuario.
   * @returns Objeto con el token de acceso.
   */
  generateToken(
    userId: number,
    email: string,
    rol: string,
    nivel_actual_id: number,
  ): { access_token: string } {
    const payload = { userId, email, rol, nivel_actual_id };
    return { access_token: this.jwtService.sign(payload) };
  }

  /**
   * Registra un nuevo usuario.
   *
   * @param dto Datos del usuario para el registro (email y contraseña).
   * @throws ConflictException Si el usuario ya existe.
   * @returns Token de acceso del nuevo usuario.
   */
  async register(dto: AuthDto): Promise<{ access_token: string }> {
    const existingUser = await this.credencial.findByEmail(dto.email);

    if (existingUser) {
      throw new ConflictException('El usuario ya existe');
    }

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.credencial.create(dto.email, hashed);

    return this.generateToken(
      user.id,
      user.email,
      user.perfil!.rol,
      user.perfil!.nivel_actual_id,
    );
  }

  /**
   * Autentica a un usuario y genera su token.
   *
   * @param dto Datos del usuario para iniciar sesión (email y contraseña).
   * @throws UnauthorizedException Si el email o contraseña son incorrectos.
   * @returns Token de acceso del usuario autenticado.
   */
  async login(dto: AuthDto): Promise<{ access_token: string }> {
    const user = await this.credencial.findByEmail(dto.email);

    const isValid = user && (await bcrypt.compare(dto.password, user.password));
    if (!isValid) {
      throw new UnauthorizedException('Password o email incorrecto');
    }

    return this.generateToken(
      user.id,
      user.email,
      user.perfil!.rol,
      user.perfil!.nivel_actual_id,
    );
  }
}
