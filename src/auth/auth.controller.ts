import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { Request } from 'express';

/**
 * Controlador encargado de gestionar las operaciones de autenticación.
 *
 * Permite a los usuarios registrarse, iniciar sesión y obtener su perfil autenticado.
 *
 * Ruta base: `/auth`
 */
@Controller('auth')
export class AuthController {
  /**
   * Crea una nueva instancia del controlador.
   *
   * @param authService Servicio encargado de la lógica de autenticación.
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * Registra un nuevo usuario en el sistema.
   *
   * @param dto Datos necesarios para el registro del usuario.
   * @returns Token de acceso generado para el usuario registrado.
   */
  @Post('register')
  async register(@Body() dto: AuthDto): Promise<{ access_token: string }> {
    return this.authService.register(dto);
  }

  /**
   * Inicia sesión de un usuario existente.
   *
   * @param dto Datos necesarios para el inicio de sesión (email y contraseña).
   * @returns Token de acceso generado para el usuario autenticado.
   */
  @Post('login')
  async login(@Body() dto: AuthDto): Promise<{ access_token: string }> {
    return this.authService.login(dto);
  }

  /**
   * Obtiene el perfil del usuario autenticado.
   *
   * Esta ruta está protegida por el guardia JWT.
   *
   * @param req Solicitud HTTP que contiene el usuario autenticado.
   * @returns Datos del usuario autenticado.
   */
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
