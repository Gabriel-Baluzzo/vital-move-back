import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateZonaMuscularDto } from '../dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from '../dto/update-zona-muscular.dto';
@Injectable()
export class ZonaMuscular {
  constructor(private readonly prisma: PrismaService) {}

  async create(createZonaMuscularDto: CreateZonaMuscularDto) {
    return this.prisma.zonaMuscular.create({ data: createZonaMuscularDto });
  }

  async findOrThrow(id: number) {
    const zona = await this.prisma.zonaMuscular.findUnique({
      where: { id },
    });

    if (!zona) {
      throw new NotFoundException(`La Zona Muscular con Id ${id} no existe`);
    }

    return zona;
  }

  async findMany() {
    return this.prisma.zonaMuscular.findMany();
  }

  async update(id: number, updateZonaMuscularDto: UpdateZonaMuscularDto) {
    await this.findOrThrow(id);
    return this.prisma.zonaMuscular.update({
      where: { id },
      data: updateZonaMuscularDto,
    });
  }

  async delete(id: number) {
    await this.findOrThrow(id);
    return this.prisma.zonaMuscular.delete({
      where: { id },
    });
  }
}
