import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorNivelService } from 'src/nivel/services/validator-nivel.service';
import { ValidatorZonaService } from 'src/zona-muscular/services/validator-zona.service';
import { ValidatorVideoService } from './services/validador-video.service';
import { FilterVideoDto } from './dto/filter-video.dto';
import { QueryFilterService } from './services/query-filter.service';

@Injectable()
export class VideoService {
  constructor(
    private readonly prisma: PrismaService,
    private nivelValidator: ValidatorNivelService,
    private zonaValidator: ValidatorZonaService,
    private videoValidator: ValidatorVideoService,
    private query: QueryFilterService,
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
    const filter = this.query.queryFilter(nivelUsuario, query);
    return this.prisma.video.findMany({ where: filter });
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
