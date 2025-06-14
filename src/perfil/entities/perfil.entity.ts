/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdatePerfilDto } from '../dto/update-perfil.dto';
import { CredencialService } from 'src/credencial/credencial.service';
import { Perfil as PerfilP } from '@prisma/client';
import { differenceInDays } from 'date-fns';

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
  
  async validar(id: number): Promise<void> {
    const perfil = await this.prisma.perfil.findUnique({
      where: { credencialesId: id },
    });

    if (perfil?.fecha_ultima_evaluacion) {
      const dias = differenceInDays(new Date(), perfil.fecha_ultima_evaluacion);

      if (dias < 30) {
        const falta = Math.ceil(30 - dias);
        throw new BadRequestException(
          `El examen se puede tomar cada 30 dias. Faltan ${falta} dia(s) para tu siguiente intento.`,
        );
      }
    }
    else if (perfil?.fecha_ultima_evaluacion === null) {
        throw new BadRequestException(
          `Debes tomar el examen de aptitud fisica`,
        );
    }
  }
}
