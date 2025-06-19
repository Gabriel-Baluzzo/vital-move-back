import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

/**
 * Servicio encargado de gestionar las operaciones relacionadas
 * con las credenciales de usuario en la base de datos.
 */
@Injectable()
export class Credencial {
  /**
   * Crea una instancia del servicio de credenciales.
   *
   * @param prisma Servicio de acceso a la base de datos con Prisma.
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Actualiza una credencial existente en la base de datos.
   *
   * @param id ID de la credencial a actualizar.
   * @param data Datos a actualizar en la credencial.
   * @returns La credencial actualizada.
   */
  async update(id: number, data: Prisma.CredencialUpdateInput) {
    return this.prisma.credencial.update({
      where: { id },
      data,
    });
  }

  /**
   * Crea una nueva credencial de usuario junto con su perfil asociado.
   *
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario (debería ser previamente hasheada).
   * @returns La credencial creada junto con el perfil generado.
   */
  async create(email: string, password: string) {
    return this.prisma.credencial.create({
      data: {
        email,
        password,
        perfil: {
          create: {
            nivel_actual_id: 0,
          },
        },
      },
      include: { perfil: true },
    });
  }

  /**
   * Busca una credencial por su correo electrónico.
   *
   * @param email Correo electrónico del usuario.
   * @returns La credencial encontrada junto con su perfil, o `null` si no existe.
   */
  async findByEmail(email: string) {
    return this.prisma.credencial.findUnique({
      where: { email },
      include: { perfil: true },
    });
  }
}
