import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorNivelService } from 'src/nivel/services/validator-nivel.service';
import { ValidatorZonaService } from 'src/zona-muscular/services/validator-zona.service';
import { ValidatorVideoService } from './services/validador-video.service';
import { FilterVideoDto } from './dto/filter-video.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class VideoService {
  constructor(
    private readonly prisma: PrismaService,
    private nivelValidator: ValidatorNivelService,
    private zonaValidator: ValidatorZonaService,
    private videoValidator: ValidatorVideoService,
  ) {}
  async create(createVideoDto: CreateVideoDto) {
    const { zona_muscular_id, nivel_id } = createVideoDto;

    await this.zonaValidator.validar(zona_muscular_id);

    await this.nivelValidator.validar(nivel_id);

    const nuevoVideo = await this.prisma.video.create({
      data: createVideoDto,
    });

    return nuevoVideo;
  }

  findQuery(nivelUsuario: number, query: FilterVideoDto) {
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

  async findAll() {
    return this.prisma.video.findMany();
  }

  async findOne(id: number) {
    const video = await this.videoValidator.validar(id);
    return video;
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    await this.videoValidator.validar(id);
    const { nivel_id, zona_muscular_id } = updateVideoDto;
    if (nivel_id !== undefined) {
      await this.nivelValidator.validar(nivel_id);
    }
    if (zona_muscular_id !== undefined) {
      await this.zonaValidator.validar(zona_muscular_id);
    }

    return this.prisma.video.update({
      where: { id },
      data: updateVideoDto,
    });
  }

  async remove(id: number) {
    await this.videoValidator.validar(id);
    return this.prisma.video.delete({ where: { id } });
  }
}
