import { Injectable } from '@nestjs/common';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { Nivel } from './entities/nivel.entity';
import { Nivel as NivelP } from '@prisma/client';

/**
 * Servicio que provee la lógica de negocio para manejar niveles.
 *
 * Utiliza la entidad `Nivel` para interactuar con la base de datos.
 */
@Injectable()
export class NivelService {
  /**
   * Crea una instancia del servicio de niveles.
   *
   * @param nivel Entidad encargada del acceso a datos de niveles.
   */
  constructor(private nivel: Nivel) {}

  /**
   * Crea un nuevo nivel.
   *
   * @param createNivelDto Datos para crear el nivel.
   * @returns El nivel creado.
   */
  async create(createNivelDto: CreateNivelDto): Promise<NivelP> {
    return this.nivel.create(createNivelDto);
  }

  /**
   * Obtiene todos los niveles disponibles.
   *
   * @returns Lista de niveles.
   */
  async findAll(): Promise<NivelP[]> {
    return this.nivel.findMany();
  }

  /**
   * Obtiene un nivel por su ID.
   *
   * @param id ID del nivel.
   * @returns El nivel encontrado.
   */
  async findOne(id: number): Promise<NivelP> {
    return this.nivel.findOrThrow(id);
  }

  /**
   * Actualiza un nivel existente.
   *
   * @param id ID del nivel a actualizar.
   * @param updateNivelDto Datos para actualizar el nivel.
   * @returns El nivel actualizado.
   */
  async update(id: number, updateNivelDto: UpdateNivelDto): Promise<NivelP> {
    await this.nivel.findOrThrow(id);
    return this.nivel.update(id, updateNivelDto);
  }

  /**
   * Elimina un nivel por su ID.
   *
   * @param id ID del nivel a eliminar.
   * @returns El nivel eliminado.
   */
  async remove(id: number): Promise<NivelP> {
    await this.nivel.findOrThrow(id);
    return this.nivel.delete(id);
  }
}
