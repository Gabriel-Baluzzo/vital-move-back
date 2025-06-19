import { Injectable } from '@nestjs/common';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { Perfil as PerfilP } from '@prisma/client';
import { CredencialService } from '../../src/credencial/credencial.service';

/**
 * Servicio que maneja la lógica de negocio para perfiles de usuario.
 */
@Injectable()
export class PerfilService {
  /**
   * Constructor que inyecta el repositorio de perfiles y el servicio de credenciales.
   * @param perfil Repositorio para acceso a datos de perfiles.
   * @param credencial Servicio para manejo de credenciales.
   */
  constructor(
    private perfil: Perfil,
    private credencial: CredencialService,
  ) {}

  /**
   * Obtiene todos los perfiles.
   * @returns Lista de perfiles.
   */
  async findAll(): Promise<PerfilP[]> {
    return this.perfil.findMany();
  }

  /**
   * Obtiene un perfil por ID.
   * @param id ID del perfil.
   * @returns Perfil encontrado.
   */
  async findOne(id: number): Promise<PerfilP> {
    return this.perfil.findOrThrow(id);
  }

  /**
   * Actualiza un perfil.
   *
   * Si se incluyen datos de credencial, también actualiza la credencial asociada.
   *
   * @param id ID del perfil a actualizar.
   * @param data Datos para la actualización.
   * @returns Perfil actualizado.
   */
  async update(id: number, data: UpdatePerfilDto): Promise<PerfilP> {
    await this.perfil.findOrThrow(id);
    const { credencial, ...perfilData } = data;

    if (credencial) {
      await this.credencial.update(id, credencial);
    }
    return this.perfil.update(id, perfilData);
  }

  /**
   * Actualiza el nivel actual del perfil.
   *
   * @param id ID del perfil.
   * @param nivelId ID del nuevo nivel.
   * @returns Perfil actualizado con el nuevo nivel.
   */
  async updateNivel(id: number, nivelId: number) {
    return this.perfil.updateNivel(id, nivelId);
  }

  /**
   * Elimina un perfil por ID.
   * @param id ID del perfil a eliminar.
   * @returns Perfil eliminado.
   */
  async remove(id: number): Promise<PerfilP> {
    await this.perfil.findOrThrow(id);
    return this.perfil.delete(id);
  }
}
