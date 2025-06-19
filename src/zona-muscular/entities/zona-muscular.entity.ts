import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZonaMuscularDto } from '../dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from '../dto/update-zona-muscular.dto';
import { ZonaMuscular as ZonaM } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';

/**
 * Servicio para gestionar operaciones CRUD sobre zonas musculares.
 */
@Injectable()
export class ZonaMuscular {
  /**
   * Constructor que inyecta el servicio Prisma para acceso a la base de datos.
   * @param prisma Servicio Prisma para manejo de datos.
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Crea una nueva zona muscular en la base de datos.
   * @param createZonaMuscularDto Datos necesarios para crear la zona muscular.
   * @returns La zona muscular creada.
   */
  async create(createZonaMuscularDto: CreateZonaMuscularDto): Promise<ZonaM> {
    return this.prisma.zonaMuscular.create({ data: createZonaMuscularDto });
  }

  /**
   * Busca una zona muscular por su ID, o lanza una excepción si no existe.
   * @param id ID de la zona muscular a buscar.
   * @throws NotFoundException si la zona muscular no existe.
   * @returns La zona muscular encontrada.
   */
  async findOrThrow(id: number): Promise<ZonaM> {
    const zona = await this.prisma.zonaMuscular.findUnique({
      where: { id },
    });

    if (!zona) {
      throw new NotFoundException(`La Zona Muscular con Id ${id} no existe`);
    }

    return zona;
  }

  /**
   * Obtiene todas las zonas musculares disponibles.
   * @returns Lista de zonas musculares.
   */
  async findMany(): Promise<ZonaM[]> {
    return this.prisma.zonaMuscular.findMany();
  }

  /**
   * Actualiza una zona muscular existente.
   * @param id ID de la zona muscular a actualizar.
   * @param updateZonaMuscularDto Datos para actualizar la zona muscular.
   * @returns La zona muscular actualizada.
   */
  async update(
    id: number,
    updateZonaMuscularDto: UpdateZonaMuscularDto,
  ): Promise<ZonaM> {
    return this.prisma.zonaMuscular.update({
      where: { id },
      data: updateZonaMuscularDto,
    });
  }

  /**
   * Elimina una zona muscular por su ID.
   * @param id ID de la zona muscular a eliminar.
   * @returns La zona muscular eliminada.
   */
  async delete(id: number): Promise<ZonaM> {
    return this.prisma.zonaMuscular.delete({
      where: { id },
    });
  }
}
