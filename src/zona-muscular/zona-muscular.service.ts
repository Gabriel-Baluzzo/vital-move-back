import { Injectable } from '@nestjs/common';
import { CreateZonaMuscularDto } from './dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from './dto/update-zona-muscular.dto';
import { ZonaMuscular } from './entities/zona-muscular.entity';
import { ZonaMuscular as ZonaM } from '@prisma/client';

/**
 * Servicio que provee métodos para gestionar zonas musculares.
 *
 * Actúa como capa de abstracción entre el controlador y la entidad `ZonaMuscular`.
 */
@Injectable()
export class ZonaMuscularService {
  /**
   * Constructor que inyecta la entidad ZonaMuscular.
   * @param zona Instancia de la entidad para acceso a la base de datos.
   */
  constructor(private zona: ZonaMuscular) {}

  /**
   * Crea una nueva zona muscular.
   * @param createZonaMuscularDto Datos para crear la zona muscular.
   * @returns La zona muscular creada.
   */
  async create(createZonaMuscularDto: CreateZonaMuscularDto) {
    return this.zona.create(createZonaMuscularDto);
  }

  /**
   * Obtiene todas las zonas musculares existentes.
   * @returns Lista de zonas musculares.
   */
  async findAll(): Promise<ZonaM[]> {
    return this.zona.findMany();
  }

  /**
   * Busca una zona muscular por su ID.
   * @param id ID de la zona muscular.
   * @returns La zona muscular encontrada.
   */
  async findOne(id: number): Promise<ZonaM> {
    return this.zona.findOrThrow(id);
  }

  /**
   * Actualiza una zona muscular existente.
   * @param id ID de la zona muscular a actualizar.
   * @param updateZonaMuscularDto Datos para actualizar.
   * @returns La zona muscular actualizada.
   */
  async update(
    id: number,
    updateZonaMuscularDto: UpdateZonaMuscularDto,
  ): Promise<ZonaM> {
    await this.zona.findOrThrow(id);
    return this.zona.update(id, updateZonaMuscularDto);
  }

  /**
   * Elimina una zona muscular por su ID.
   * @param id ID de la zona muscular a eliminar.
   * @returns La zona muscular eliminada.
   */
  async remove(id: number): Promise<ZonaM> {
    await this.zona.findOrThrow(id);
    return this.zona.delete(id);
  }
}
