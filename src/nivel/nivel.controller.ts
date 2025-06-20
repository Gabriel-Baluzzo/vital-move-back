import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { NivelService } from './nivel.service';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { PoliciesGuard } from '../../src/casl/policies.guard';
import { Permission } from '../../src/casl/decorators/permissions.decorator';
import { Action } from '../casl/enum/action.enum';
import { Nivel } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Controlador que maneja las rutas relacionadas con la gestión de niveles.
 *
 * Aplica guards para autenticación y control de permisos basado en roles.
 */
@ApiBearerAuth('jwt-auth')
@Controller('nivel')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class NivelController {
  /**
   * Constructor que inyecta el servicio de niveles.
   *
   * @param nivelService Servicio que contiene la lógica para manejar niveles.
   */
  constructor(private readonly nivelService: NivelService) {}

  /**
   * Crea un nuevo nivel.
   *
   * @param createNivelDto Datos para crear el nivel.
   * @returns El nivel creado.
   */
  @ApiOperation({ summary: 'Crea nivel' })
  @ApiResponse({ status: 201, description: 'Crea el nivel exitosamente.' })
  @Post()
  @Permission(Action.Create, 'Nivel')
  async create(@Body() createNivelDto: CreateNivelDto): Promise<Nivel> {
    return this.nivelService.create(createNivelDto);
  }

  /**
   * Obtiene la lista completa de niveles.
   *
   * @returns Array con todos los niveles.
   */
  @ApiOperation({ summary: 'Obtener niveles' })
  @ApiResponse({ status: 200, description: 'Devuelve array de niveles.' })
  @Get()
  @Permission(Action.Read, 'Nivel')
  async findAll(): Promise<Nivel[]> {
    return this.nivelService.findAll();
  }

  /**
   * Obtiene un nivel por su ID.
   *
   * @param id ID del nivel.
   * @returns El nivel encontrado.
   */
  @ApiOperation({ summary: 'Obtener nivel' })
  @ApiResponse({ status: 200, description: 'Devuelve el nivel.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get(':id')
  @Permission(Action.Read, 'Nivel')
  async findOne(@Param('id') id: number): Promise<Nivel> {
    return this.nivelService.findOne(id);
  }

  /**
   * Actualiza un nivel existente.
   *
   * @param id ID del nivel a actualizar.
   * @param updateNivelDto Datos a actualizar.
   * @returns El nivel actualizado.
   */
  @ApiOperation({ summary: 'Editar nivel' })
  @ApiResponse({ status: 200, description: 'Edita el nivel.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Patch(':id')
  @Permission(Action.Update, 'Nivel')
  async update(
    @Param('id') id: number,
    @Body() updateNivelDto: UpdateNivelDto,
  ): Promise<Nivel> {
    return this.nivelService.update(id, updateNivelDto);
  }

  /**
   * Elimina un nivel por su ID.
   *
   * @param id ID del nivel a eliminar.
   * @returns El nivel eliminado.
   */
  @ApiOperation({ summary: 'Eliminar nivel' })
  @ApiResponse({ status: 200, description: 'Elimina el nivel.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Delete(':id')
  @Permission(Action.Delete, 'Nivel')
  async remove(@Param('id') id: number): Promise<Nivel> {
    return this.nivelService.remove(id);
  }
}
