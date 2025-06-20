import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { Permission } from '../../src/casl/decorators/permissions.decorator';
import { Action } from '../casl/enum/action.enum';
import { PoliciesGuard } from '../../src/casl/policies.guard';
import { UpdatePerfilDto } from '../../src/perfil/dto/update-perfil.dto';
import { PerfilService } from '../../src/perfil/perfil.service';
import { Perfil } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Controlador de perfiles de usuario para uso de admins.
 *
 * Gestiona operaciones CRUD sobre perfiles con control de acceso
 * basado en roles y permisos.
 *
 * Ruta base: `/admin/perfil`
 */
@ApiBearerAuth('jwt-auth')
@Controller('admin/perfil')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class AdminPerfilController {
  /**
   * Crea una nueva instancia del controlador.
   *
   * @param perfilService Servicio encargado de manejar la lógica de negocio relacionada con perfiles.
   */
  constructor(private readonly perfilService: PerfilService) {}

  /**
   * Obtiene la lista completa de perfiles.
   *
   * @returns Lista de perfiles registrados.
   */
  @ApiOperation({ summary: 'Obtener perfiles' })
  @ApiResponse({ status: 200, description: 'Devuelve array de perfiles.' })
  @Get()
  @Permission(Action.Read, 'Perfil')
  async findAll(): Promise<Perfil[]> {
    return this.perfilService.findAll();
  }

  /**
   * Obtiene un perfil por su ID.
   *
   * @param id Identificador único del perfil.
   * @returns Perfil correspondiente al ID proporcionado.
   */
  @ApiOperation({ summary: 'Obtener perfil' })
  @ApiResponse({ status: 200, description: 'Devuelve el perfil.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get(':id')
  @Permission(Action.Read, 'Perfil')
  async findOne(@Param('id') id: number): Promise<Perfil> {
    return this.perfilService.findOne(id);
  }

  /**
   * Actualiza un perfil existente por su ID.
   *
   * @param id Identificador único del perfil.
   * @param updatePerfilDto Datos actualizados del perfil.
   * @returns Perfil actualizado.
   */
  @ApiOperation({ summary: 'Editar perfil' })
  @ApiResponse({ status: 200, description: 'Edita el perfil.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Patch(':id')
  @Permission(Action.Update, 'Perfil')
  async update(
    @Param('id') id: number,
    @Body() updatePerfilDto: UpdatePerfilDto,
  ): Promise<Perfil> {
    return this.perfilService.update(id, updatePerfilDto);
  }

  /**
   * Elimina un perfil por su ID.
   *
   * @param id Identificador único del perfil.
   * @returns Perfil eliminado.
   */
  @ApiOperation({ summary: 'Eliminar perfil' })
  @ApiResponse({ status: 200, description: 'Elimina el perfil.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Delete(':id')
  @Permission(Action.Delete, 'Perfil')
  async remove(@Param('id') id: number): Promise<Perfil> {
    return this.perfilService.remove(id);
  }
}
