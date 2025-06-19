import { PrismaService } from '../../../prisma/prisma.service';
import { CreateNivelDto } from '../dto/create-nivel.dto';
import { UpdateNivelDto } from '../dto/update-nivel.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Nivel as NivelP } from '@prisma/client';

/**
 * Servicio encargado de gestionar las operaciones CRUD para los niveles.
 */
@Injectable()
export class Nivel {
  /**
   * Crea una instancia del servicio de niveles.
   *
   * @param prisma Servicio de acceso a la base de datos con Prisma.
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Crea un nuevo nivel en la base de datos.
   *
   * @param createNivelDto Datos para crear el nivel.
   * @returns El nivel creado.
   */
  async create(createNivelDto: CreateNivelDto): Promise<NivelP> {
    return this.prisma.nivel.create({
      data: createNivelDto,
    });
  }

  /**
   * Obtiene todos los niveles almacenados.
   *
   * @returns Lista de niveles.
   */
  async findMany(): Promise<NivelP[]> {
    return this.prisma.nivel.findMany();
  }

  /**
   * Busca un nivel por su ID, lanzando error si no existe.
   *
   * @param id ID del nivel.
   * @throws NotFoundException si no se encuentra el nivel.
   * @returns El nivel encontrado.
   */
  async findOrThrow(id: number): Promise<NivelP> {
    const nivel = await this.prisma.nivel.findUnique({
      where: { id },
    });
    if (!nivel) {
      throw new NotFoundException(`Nivel con id ${id} no encontrada`);
    }
    return nivel;
  }

  /**
   * Actualiza un nivel existente.
   *
   * @param id ID del nivel a actualizar.
   * @param updateNivelDto Datos para actualizar.
   * @returns El nivel actualizado.
   */
  async update(id: number, updateNivelDto: UpdateNivelDto): Promise<NivelP> {
    return this.prisma.nivel.update({
      where: { id },
      data: updateNivelDto,
    });
  }

  /**
   * Elimina un nivel por su ID.
   *
   * @param id ID del nivel a eliminar.
   * @returns El nivel eliminado.
   */
  async delete(id: number): Promise<NivelP> {
    return this.prisma.nivel.delete({
      where: { id },
    });
  }
}
