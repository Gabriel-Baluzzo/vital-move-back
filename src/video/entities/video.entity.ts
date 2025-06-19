import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateVideoDto } from '../dto/update-video.dto';
import { CreateVideoDto } from '../dto/create-video.dto';
import { Prisma, Video as VideoP } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

/**
 * Servicio encargado de gestionar las operaciones relacionadas con los videos.
 */
@Injectable()
export class Video {
  /**
   * Constructor que inyecta el servicio Prisma para acceso a la base de datos.
   * @param prisma Servicio Prisma para manejo de datos.
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Crea un nuevo video en la base de datos.
   * @param createVideoDto Datos necesarios para crear un video.
   * @returns El video creado.
   */
  async create(createVideoDto: CreateVideoDto): Promise<VideoP> {
    return this.prisma.video.create({
      data: createVideoDto,
    });
  }

  /**
   * Busca videos que cumplen con los criterios especificados.
   * @param where Condiciones para filtrar los videos.
   * @returns Lista de videos que cumplen con los filtros.
   */
  async findQuery(where: Prisma.VideoWhereInput): Promise<VideoP[]> {
    return this.prisma.video.findMany({ where });
  }

  /**
   * Obtiene todos los videos disponibles.
   * @returns Lista completa de videos.
   */
  async findMany(): Promise<VideoP[]> {
    return this.prisma.video.findMany();
  }

  /**
   * Busca un video por su ID.
   * @param id ID del video a buscar.
   * @throws NotFoundException si no se encuentra el video.
   * @returns El video encontrado.
   */
  async findOrThrow(id: number): Promise<VideoP> {
    const video = await this.prisma.video.findUnique({
      where: { id },
    });
    if (!video) {
      throw new NotFoundException(`Video con id ${id} no encontrado`);
    }
    return video;
  }

  /**
   * Actualiza un video existente.
   * @param id ID del video a actualizar.
   * @param updateVideoDto Datos para actualizar el video.
   * @returns El video actualizado.
   */
  async update(id: number, updateVideoDto: UpdateVideoDto): Promise<VideoP> {
    return this.prisma.video.update({
      where: { id },
      data: updateVideoDto,
    });
  }

  /**
   * Elimina un video por su ID.
   * @param id ID del video a eliminar.
   * @returns El video eliminado.
   */
  async delete(id: number): Promise<VideoP> {
    return this.prisma.video.delete({ where: { id } });
  }
}
