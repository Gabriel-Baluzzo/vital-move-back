import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FilterVideoDto } from './dto/filter-video.dto';
import { Video } from './entities/video.entity';
import { Prisma, Video as VideoP } from '@prisma/client';
import { ZonaMuscularService } from '../../src/zona-muscular/zona-muscular.service';
import { NivelService } from '../../src/nivel/nivel.service';

/**
 * Servicio que maneja la lógica de negocio para videos.
 *
 * Gestiona creación, búsqueda, actualización y eliminación de videos,
 * validando relaciones con zona muscular y nivel.
 */
@Injectable()
export class VideoService {
  /**
   * Constructor que inyecta los servicios y repositorios necesarios.
   * @param video Repositorio para manejo de videos.
   * @param zona Servicio para manejo de zonas musculares.
   * @param nivel Servicio para manejo de niveles.
   */
  constructor(
    private video: Video,
    private zona: ZonaMuscularService,
    private nivel: NivelService,
  ) {}

  /**
   * Crea un nuevo video después de validar zona muscular y nivel.
   * @param createVideoDto Datos para crear el video.
   * @returns El video creado.
   */
  async create(createVideoDto: CreateVideoDto): Promise<VideoP> {
    const { zona_muscular_id, nivel_id } = createVideoDto;
    await Promise.all([
      this.zona.findOne(zona_muscular_id),
      this.nivel.findOne(nivel_id),
    ]);
    return this.video.create(createVideoDto);
  }

  /**
   * Busca videos según filtros y nivel del usuario.
   *
   * Si el nivel solicitado es mayor al nivel del usuario, lanza excepción e iguala la solicitud al nivel de usuario.
   *
   * @param nivelUsuario Nivel actual del usuario.
   * @param query Filtros para la búsqueda.
   * @returns Lista de videos que cumplen los filtros.
   * @throws BadRequestException si el nivel solicitado es mayor que el nivel del usuario.
   */
  async findQuery(
    nivelUsuario: number,
    query: FilterVideoDto,
  ): Promise<VideoP[]> {
    const { nivel_id, zona_muscular_id, nombre, descripcion } = query;

    let nivelFilter: Prisma.IntFilter;

    if (nivel_id !== undefined) {
      if (nivel_id > nivelUsuario) {
        throw new BadRequestException('No alcanzaste esta dificultad.');
      }
      nivelFilter = { equals: nivel_id };
    } else {
      nivelFilter = { lte: nivelUsuario };
    }

    const where = {
      nivel_id: nivelFilter,
      ...(zona_muscular_id && { zona_muscular_id }),
      ...(nombre && {
        nombre: {
          contains: nombre,
          mode: 'insensitive' as const,
        },
      }),
      ...(descripcion && {
        descripcion: {
          contains: descripcion,
          mode: 'insensitive' as const,
        },
      }),
    };
    return this.video.findQuery(where);
  }

  /**
   * Obtiene todos los videos.
   * @returns Lista completa de videos.
   */
  async findAll(): Promise<VideoP[]> {
    return this.video.findMany();
  }

  /**
   * Obtiene un video por su ID.
   * @param id ID del video.
   * @returns Video encontrado.
   */
  async findOne(id: number): Promise<VideoP> {
    return this.video.findOrThrow(id);
  }

  /**
   * Actualiza un video después de validar que exista y sus relaciones.
   *
   * @param id ID del video a actualizar.
   * @param updateVideoDto Datos para actualizar el video.
   * @returns Video actualizado.
   */
  async update(id: number, updateVideoDto: UpdateVideoDto): Promise<VideoP> {
    await this.video.findOrThrow(id);

    const { nivel_id, zona_muscular_id } = updateVideoDto;

    if (nivel_id !== undefined) {
      await this.nivel.findOne(nivel_id);
    }
    if (zona_muscular_id !== undefined) {
      await this.zona.findOne(zona_muscular_id);
    }

    return this.video.update(id, updateVideoDto);
  }

  /**
   * Elimina un video por su ID.
   * @param id ID del video a eliminar.
   * @returns Video eliminado.
   */
  async remove(id: number): Promise<VideoP> {
    await this.video.findOrThrow(id);
    return this.video.delete(id);
  }
}
