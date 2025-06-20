import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { VideoService } from './video.service';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { FilterVideoDto } from './dto/filter-video.dto';
import { CurrentUser } from '../../src/auth/jwt/decorator/current-user.decorator';
import { JwtPayload } from '../../src/auth/jwt/jwt.payload';
import { Video } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Controlador para manejar solicitudes relacionadas con videos.
 *
 * Protegido con JwtAuthGuard para asegurar que solo usuarios autenticados puedan acceder.
 */
@ApiBearerAuth('jwt-auth')
@Controller('video')
@UseGuards(JwtAuthGuard)
export class VideoController {
  /**
   * Constructor que inyecta el servicio de videos.
   * @param videoService Servicio que maneja la lógica de videos.
   */
  constructor(private readonly videoService: VideoService) {}

  /**
   * Obtiene una lista de videos filtrados según parámetros y nivel del usuario.
   *
   * @param user Información del usuario extraída del token JWT.
   * @param query Parámetros opcionales para filtrar la búsqueda de videos.
   * @returns Lista de videos que cumplen con los filtros y nivel del usuario.
   */
  @ApiOperation({ summary: 'Obtener videos' })
  @ApiResponse({ status: 200, description: 'Devuelve array de videos.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @Get()
  async findQuery(
    @CurrentUser() user: JwtPayload,
    @Query() query: FilterVideoDto,
  ): Promise<Video[]> {
    return this.videoService.findQuery(user.nivel_actual_id, query);
  }
}
