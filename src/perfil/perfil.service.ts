import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.perfil.findMany({
      include: { credencial: true, nivel_actual: true },
    });
  }

  async findOne(id: number) {
    const perfil = await this.prisma.perfil.findUnique({
      where: { id },
      include: { credencial: true, nivel_actual: true },
    });

    if (!perfil)
      throw new NotFoundException(`Perfil con id ${id} no encontrado`);
    return perfil;
  }

  update(id: number, data: UpdatePerfilDto) {
    return this.prisma.perfil.update({
      where: { id },
      data,
      include: {
        nivel_actual: true,
        credencial: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.perfil.delete({ where: { id } });
  }
}
