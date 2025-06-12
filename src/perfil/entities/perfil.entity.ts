import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdatePerfilDto } from '../dto/update-perfil.dto';
import { CredencialService } from 'src/credencial/credencial.service';
import { Perfil as PerfilP } from '@prisma/client';

@Injectable()
export class Perfil {
  constructor(
    private readonly prisma: PrismaService,
    private credencialService: CredencialService,
  ) {}

  async findMany(): Promise<PerfilP[]> {
    return this.prisma.perfil.findMany({
      include: { credencial: true, nivel_actual: true },
    });
  }

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

  async update(id: number, data: UpdatePerfilDto): Promise<PerfilP> {
    await this.findOrThrow(id);
    const { credencial, ...perfilData } = data;

    if (credencial) {
      await this.credencialService.update(id, credencial);
    }
    return this.prisma.perfil.update({
      where: { credencialesId: id },
      data: perfilData,
      include: { credencial: true, nivel_actual: true },
    });
  }

  async delete(id: number): Promise<PerfilP> {
    await this.findOrThrow(id);
    return this.prisma.perfil.delete({ where: { credencialesId: id } });
  }
}
