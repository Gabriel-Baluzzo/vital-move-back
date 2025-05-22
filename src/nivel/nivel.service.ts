import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NivelService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNivelDto: CreateNivelDto) {
    return this.prisma.nivel.create({
      data: createNivelDto,
    });
  }

  async findAll() {
    return this.prisma.nivel.findMany();
  }

  async findOne(id: number) {
    const nivel = await this.prisma.nivel.findUnique({
      where: { id },
    });

    if (!nivel) {
      throw new NotFoundException(`Nivel con ID ${id} no encontrado`);
    }

    return nivel;
  }

  async update(id: number, updateNivelDto: UpdateNivelDto) {
    return this.prisma.nivel.update({
      where: { id },
      data: updateNivelDto,
    });
  }

  async remove(id: number) {
    return this.prisma.nivel.delete({
      where: { id },
    });
  }
}
