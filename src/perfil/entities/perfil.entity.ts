/* eslint-disable prettier/prettier */
// src/perfil/entities/perfil.entity.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdatePerfilDto } from '../dto/update-perfil.dto';
import { CredencialService } from 'src/credencial/credencial.service';
import { Perfil as PerfilP } from '@prisma/client';

@Injectable()
export class Perfil {
  constructor(
    private readonly prisma: PrismaService,
    private credencialService: CredencialService, // Asumo que CredencialService es para operaciones CRUD directas sobre Credencial, no para inclusions.
  ) {}

  async findMany(): Promise<PerfilP[]> {
    return this.prisma.perfil.findMany({
      include: { credencial: true, nivel_actual: true },
    });
  }

  async findOrThrow(id: number): Promise<PerfilP> {
    const perfil = await this.prisma.perfil.findUnique({
      where: { credencialesId: id },
      // ✅ AÑADIDO: Incluir las relaciones credencial y nivel_actual
      include: { credencial: true, nivel_actual: true },
    });
    if (!perfil) {
      throw new NotFoundException(`Perfil con id ${id} no encontrado`);
    }
    return perfil;
  }

  async update(id: number, data: UpdatePerfilDto) {
    await this.findOrThrow(id);
    const { credencial, ...perfilData } = data;

    if (credencial) {
      // Asegúrate de que este update sea para la credencial asociada al perfil
      // El 'id' que se pasa aquí debe ser el 'credencialesId' del perfil.
      await this.credencialService.update(id, credencial);
    }
    return this.prisma.perfil.update({
      where: { credencialesId: id },
      data: perfilData,
      include: { credencial: true, nivel_actual: true }, // ✅ También asegúrate de incluir nivel_actual aquí si lo necesitas
    });
  }

  async delete(id: number): Promise<PerfilP> {
    await this.findOrThrow(id);
    return this.prisma.perfil.delete({ where: { credencialesId: id } });
  }
}