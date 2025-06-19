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
import { ZonaMuscularService } from './zona-muscular.service';
import { CreateZonaMuscularDto } from './dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from './dto/update-zona-muscular.dto';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { PoliciesGuard } from '../../src/casl/policies.guard';
import { Permission } from '../../src/casl/decorators/permissions.decorator';
import { Action } from '../casl/enum/action.enum';
import { ZonaMuscular } from '@prisma/client';

/**
 * Controlador para la gestión de Zonas Musculares.
 *
 * Protegido con JwtAuthGuard y PoliciesGuard para control de acceso.
 */
@Controller('zona-muscular')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class ZonaMuscularController {
  /**
   * Constructor que inyecta el servicio de zonas musculares.
   * @param zonaMuscularService Servicio para gestionar zonas musculares.
   */
  constructor(private readonly zonaMuscularService: ZonaMuscularService) {}

  /**
   * Crea una nueva zona muscular.
   *
   * @param createZonaMuscularDto DTO con los datos para crear la zona muscular.
   * @returns La zona muscular creada.
   */
  @Post()
  @Permission(Action.Create, 'Zona_Muscular')
  async create(@Body() createZonaMuscularDto: CreateZonaMuscularDto) {
    return this.zonaMuscularService.create(createZonaMuscularDto);
  }

  /**
   * Obtiene todas las zonas musculares.
   *
   * @returns Lista de zonas musculares.
   */
  @Get()
  @Permission(Action.Read, 'Zona_Muscular')
  async findAll(): Promise<ZonaMuscular[]> {
    return this.zonaMuscularService.findAll();
  }

  /**
   * Obtiene una zona muscular por ID.
   *
   * @param id ID de la zona muscular.
   * @returns La zona muscular encontrada.
   */
  @Get(':id')
  @Permission(Action.Read, 'Zona_Muscular')
  async findOne(@Param('id') id: number): Promise<ZonaMuscular> {
    return this.zonaMuscularService.findOne(id);
  }

  /**
   * Actualiza una zona muscular por ID.
   *
   * @param id ID de la zona muscular a actualizar.
   * @param updateZonaMuscularDto DTO con los datos de actualización.
   * @returns La zona muscular actualizada.
   */
  @Patch(':id')
  @Permission(Action.Update, 'Zona_Muscular')
  async update(
    @Param('id') id: number,
    @Body() updateZonaMuscularDto: UpdateZonaMuscularDto,
  ): Promise<ZonaMuscular> {
    return this.zonaMuscularService.update(id, updateZonaMuscularDto);
  }

  /**
   * Elimina una zona muscular por ID.
   *
   * @param id ID de la zona muscular a eliminar.
   * @returns La zona muscular eliminada.
   */
  @Delete(':id')
  @Permission(Action.Delete, 'Zona_Muscular')
  async remove(@Param('id') id: number): Promise<ZonaMuscular> {
    return this.zonaMuscularService.remove(id);
  }
}
