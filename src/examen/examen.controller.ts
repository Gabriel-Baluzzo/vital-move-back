import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { CurrentUser } from '../../src/auth/jwt/decorator/current-user.decorator';
import { JwtPayload } from '../../src/auth/jwt/jwt.payload';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { Perfil } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Controlador encargado de manejar las rutas relacionadas con el examen.
 *
 * Protegido por JWT para asegurar que solo usuarios autenticados accedan.
 */
@ApiBearerAuth('jwt-auth')
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
  @ApiOperation({ summary: 'Ver si pasaron 30 dias para volver a evaluar' })
  @ApiResponse({ status: 200, description: 'Puede tomar el examen.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @Get()
  async validarFecha(@CurrentUser() user: JwtPayload): Promise<void> {
    await this.examenService.validarFechaExamen(user.userId);
  }

  /**
   * Endpoint para validar si el usuario es nuevo y puede rendir el examen.
   *
   * @param user Usuario autenticado extraído del token JWT.
   */
  @ApiOperation({ summary: 'Ver si el usuario es nuevo' })
  @ApiResponse({ status: 200, description: 'Usuario nuevo.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
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
  @ApiOperation({ summary: 'Tomar examen' })
  @ApiResponse({ status: 200, description: 'Actualiza el nivel.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @Post()
  async examen(
    @Body() resultado: ResultadoExamenDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<{ perfil: Perfil; access_token: string }> {
    return this.examenService.update(user.userId, resultado);
  }
}
