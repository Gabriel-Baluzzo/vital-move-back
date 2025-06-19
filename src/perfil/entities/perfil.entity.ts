import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Perfil as PerfilP, Prisma } from '@prisma/client';

/**
 * Servicio encargado de gestionar las operaciones relacionadas con los perfiles de usuario.
 */
@Injectable()
export class Perfil {
  /**
   * Crea una instancia del servicio con el acceso a la base de datos Prisma.
   * @param prisma Servicio Prisma para acceso a la base de datos.
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Obtiene todos los perfiles incluyendo sus credenciales y nivel actual.
   * @returns Lista de perfiles.
   */
  async findMany(): Promise<PerfilP[]> {
    return this.prisma.perfil.findMany({
      include: { credencial: true, nivel_actual: true },
    });
  }

  /**
   * Busca un perfil por el ID de las credenciales.
   *
   * @param id ID de las credenciales asociadas al perfil.
   * @throws NotFoundException si no se encuentra el perfil.
   * @returns El perfil encontrado con credencial y nivel actual.
   */
  async findOrThrow(id: number): Promise<PerfilP> {
    const perfil = await this.prisma.perfil.findUnique({
      where: { credencialesId: id },
      include: { credencial: true, nivel_actual: true },
    });
    if (!perfil) {
      throw new NotFoundException(`Perfil con id ${id} no encontrado`);
    }
    return perfil;
  }

  /**
   * Actualiza un perfil con los datos indicados.
   *
   * @param id ID de las credenciales asociadas al perfil.
   * @param data Datos para actualizar el perfil.
   * @returns El perfil actualizado.
   */
  async update(id: number, data: Prisma.PerfilUpdateInput): Promise<PerfilP> {
    return this.prisma.perfil.update({
      where: { credencialesId: id },
      data,
      include: { credencial: true, nivel_actual: true },
    });
  }

  /**
   * Actualiza el nivel actual del perfil y la fecha de la última evaluación.
   *
   * @param id ID de las credenciales asociadas al perfil.
   * @param nivelId Nuevo nivel a asignar.
   * @returns El perfil actualizado con el nuevo nivel.
   */
  async updateNivel(id: number, nivelId: number) {
    return this.prisma.perfil.update({
      where: { credencialesId: id },
      data: {
        nivel_actual_id: nivelId,
        fecha_ultima_evaluacion: new Date(),
      },
      include: { credencial: true, nivel_actual: true },
    });
  }

  /**
   * Elimina un perfil por el ID de sus credenciales.
   *
   * @param id ID de las credenciales asociadas al perfil.
   * @returns El perfil eliminado.
   */
  async delete(id: number): Promise<PerfilP> {
    return this.prisma.perfil.delete({ where: { credencialesId: id } });
  }
}
