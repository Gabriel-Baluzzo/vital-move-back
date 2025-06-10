import { PrismaService } from 'prisma/prisma.service';
import { CreateNivelDto } from '../dto/create-nivel.dto';
import { UpdateNivelDto } from '../dto/update-nivel.dto';
import { NotFoundException } from '@nestjs/common';

export class Nivel {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNivelDto: CreateNivelDto) {
    return this.prisma.nivel.create({
      data: createNivelDto,
    });
  }

  async findMany() {
    return this.prisma.nivel.findMany();
  }

  async findOrThrow(id: number) {
    const nivel = await this.prisma.nivel.findUnique({
      where: { id },
    });
    if (!nivel) {
      throw new NotFoundException(`Nivel con id ${id} no encontrada`);
    }
    return nivel;
  }

  async update(id: number, updateNivelDto: UpdateNivelDto) {
    await this.findOrThrow(id);
    return this.prisma.nivel.update({
      where: { id },
      data: updateNivelDto,
    });
  }

  async delete(id: number) {
    await this.findOrThrow(id);
    return this.prisma.nivel.delete({
      where: { id },
    });
  }
}
