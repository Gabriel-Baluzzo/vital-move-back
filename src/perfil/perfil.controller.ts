import {
  Controller,
  Get,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { JwtPayload } from '../../src/auth/jwt/jwt.payload';
import { CurrentUser } from '../../src/auth/jwt/decorator/current-user.decorator';
import { Perfil } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Controlador para gestionar el perfil del usuario autenticado.
 *
 * Aplica JwtAuthGuard para proteger las rutas y asegurar que solo
 * usuarios autenticados accedan a ellas.
 */
@ApiBearerAuth('jwt-auth')
@Controller('perfil')
@UseGuards(JwtAuthGuard)
export class PerfilController {
  /**
   * Constructor que inyecta el servicio de perfiles.
   * @param perfilService Servicio para manejo de perfiles.
   */
  constructor(private readonly perfilService: PerfilService) {}

  /**
   * Obtiene el perfil del usuario autenticado.
   *
   * @param user Información del usuario extraída del token JWT.
   * @returns Perfil del usuario.
   */
  @ApiOperation({ summary: 'Obtener Perfil' })
  @ApiResponse({ status: 200, description: 'Devuelve el Perfil.' })
  @Get()
  async getProfile(@CurrentUser() user: JwtPayload): Promise<Perfil> {
    return this.perfilService.findOne(user.userId);
  }

  /**
   * Actualiza el perfil del usuario autenticado.
   *
   * @param user Información del usuario extraída del token JWT.
   * @param data Datos para actualizar el perfil.
   * @returns Perfil actualizado.
   */
  @ApiOperation({ summary: 'Actualiza Perfil' })
  @ApiResponse({ status: 200, description: 'Actualiza con exito.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @Patch()
  async update(
    @CurrentUser() user: JwtPayload,
    @Body() data: UpdatePerfilDto,
  ): Promise<Perfil> {
    return this.perfilService.update(user.userId, data);
  }

  /**
   * Elimina el perfil del usuario autenticado.
   *
   * @param user Información del usuario extraída del token JWT.
   * @returns Perfil eliminado.
   */
  @ApiOperation({ summary: 'Elimina el Perfil' })
  @ApiResponse({ status: 200, description: 'Elimina con exito.' })
  @Delete()
  async remove(@CurrentUser() user: JwtPayload): Promise<Perfil> {
    return this.perfilService.remove(user.userId);
  }
}
