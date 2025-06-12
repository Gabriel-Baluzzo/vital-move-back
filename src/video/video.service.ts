import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FilterVideoDto } from './dto/filter-video.dto';
import { Video } from './entities/video.entity';
import { Video as VideoP } from '@prisma/client';

@Injectable()
export class VideoService {
  constructor(private video: Video) {}
  async create(createVideoDto: CreateVideoDto): Promise<VideoP> {
    return this.video.create(createVideoDto);
  }

  async findQuery(
    nivelUsuario: number,
    query: FilterVideoDto,
  ): Promise<VideoP[]> {
    return this.video.findQuery(nivelUsuario, query);
  }

  async findAll(): Promise<VideoP[]> {
    return this.video.findMany();
  }

  async findOne(id: number): Promise<VideoP> {
    return this.video.findOrThrow(id);
  }

  async update(id: number, updateVideoDto: UpdateVideoDto): Promise<VideoP> {
    return this.video.update(id, updateVideoDto);
  }

  async remove(id: number): Promise<VideoP> {
    return this.video.delete(id);
  }
}
