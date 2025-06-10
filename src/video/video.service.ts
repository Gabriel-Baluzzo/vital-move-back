import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FilterVideoDto } from './dto/filter-video.dto';
import { Video } from './entities/video.entity';

@Injectable()
export class VideoService {
  constructor(private video: Video) {}
  async create(createVideoDto: CreateVideoDto) {
    return this.video.create(createVideoDto);
  }

  async findQuery(nivelUsuario: number, query: FilterVideoDto) {
    return this.video.findQuery(nivelUsuario, query);
  }

  async findAll() {
    return this.video.findMany();
  }

  async findOne(id: number) {
    return this.video.findOrThrow(id);
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    return this.video.update(id, updateVideoDto);
  }

  async remove(id: number) {
    return this.video.delete(id);
  }
}
