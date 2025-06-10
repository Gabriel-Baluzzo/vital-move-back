import { PrismaService } from 'prisma/prisma.service';
import { UpdateVideoDto } from '../dto/update-video.dto';
import { FilterVideoDto } from '../dto/filter-video.dto';
import { CreateVideoDto } from '../dto/create-video.dto';
import { ZonaMuscularService } from 'src/zona-muscular/zona-muscular.service';
import { NivelService } from 'src/nivel/nivel.service';
import { Prisma } from '@prisma/client';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class Video {
  constructor(
    private readonly prisma: PrismaService,
    private zona: ZonaMuscularService,
    private nivel: NivelService,
  ) {}

  async create(createVideoDto: CreateVideoDto) {
    const { zona_muscular_id, nivel_id } = createVideoDto;

    await this.zona.findOne(zona_muscular_id);

    await this.nivel.findOne(nivel_id);

    const nuevoVideo = await this.prisma.video.create({
      data: createVideoDto,
    });

    return nuevoVideo;
  }

  async findQuery(nivelUsuario: number, query: FilterVideoDto) {
    const { nivel_id, zona_muscular_id, nombre, descripcion } = query;

    let nivelFilter: Prisma.IntFilter;

    if (nivel_id !== undefined) {
      if (nivel_id > nivelUsuario) {
        throw new BadRequestException('No alcanzaste esta dificultad.');
      }
      nivelFilter = { equals: nivel_id };
    } else {
      nivelFilter = { lte: nivelUsuario };
    }

    const where = {
      nivel_id: nivelFilter,
      ...(zona_muscular_id && { zona_muscular_id }),
      ...(nombre && {
        nombre: {
          contains: nombre,
          mode: 'insensitive' as const,
        },
      }),
      ...(descripcion && {
        descripcion: {
          contains: descripcion,
          mode: 'insensitive' as const,
        },
      }),
    };

    return this.prisma.video.findMany({ where });
  }

  async findMany() {
    return this.prisma.video.findMany();
  }

  async findOrThrow(id: number) {
    const video = await this.prisma.video.findUnique({
      where: { id },
    });
    if (!video) {
      throw new NotFoundException(`Video con id ${id} no encontrado`);
    }
    return video;
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    await this.findOrThrow(id);
    const { nivel_id, zona_muscular_id } = updateVideoDto;
    if (nivel_id !== undefined) {
      await this.nivel.findOne(nivel_id);
    }
    if (zona_muscular_id !== undefined) {
      await this.zona.findOne(zona_muscular_id);
    }

    return this.prisma.video.update({
      where: { id },
      data: updateVideoDto,
    });
  }

  async delete(id: number) {
    await this.findOrThrow(id);
    return this.prisma.video.delete({ where: { id } });
  }
}
