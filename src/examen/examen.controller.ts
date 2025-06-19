import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { CurrentUser } from '../../src/auth/jwt/decorator/current-user.decorator';
import { JwtPayload } from '../../src/auth/jwt/jwt.payload';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { Perfil } from '@prisma/client';

/**
 * Controlador encargado de manejar las rutas relacionadas con el examen.
 *
 * Protegido por JWT para asegurar que solo usuarios autenticados accedan.
 */
@Controller('examen')
@UseGuards(JwtAuthGuard)
export class ExamenController {
  /**
   * Constructor que inyecta el servicio de examen.
   *
   * @param examenService Servicio que contiene la lógica del examen.
   */
  constructor(private readonly examenService: ExamenService) {}

  /**
   * Endpoint para validar la fecha del examen del usuario actual.
   *
   * @param user Usuario autenticado extraído del token JWT.
   */
  @Get()
  async validarFecha(@CurrentUser() user: JwtPayload): Promise<void> {
    await this.examenService.validarFechaExamen(user.userId);
  }

  /**
   * Endpoint para validar si el usuario es nuevo y puede rendir el examen.
   *
   * @param user Usuario autenticado extraído del token JWT.
   */
  @Get('nuevo')
  async validarNuevo(@CurrentUser() user: JwtPayload): Promise<void> {
    await this.examenService.validarNuevoUsuario(user.userId);
  }

  /**
   * Endpoint para enviar el resultado del examen y actualizar el perfil.
   *
   * @param resultado Resultado del examen enviado en el cuerpo de la petición.
   * @param user Usuario autenticado extraído del token JWT.
   * @returns Objeto con el perfil actualizado y un nuevo token de acceso.
   */
  @Post()
  async examen(
    @Body() resultado: ResultadoExamenDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<{ perfil: Perfil; access_token: string }> {
    return this.examenService.update(user.userId, resultado);
  }
}
