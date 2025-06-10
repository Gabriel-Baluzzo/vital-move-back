import { Injectable } from '@nestjs/common';
import { CreateZonaMuscularDto } from './dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from './dto/update-zona-muscular.dto';
import { ZonaMuscular } from './entities/zona-muscular.entity';

@Injectable()
export class ZonaMuscularService {
  constructor(private zona: ZonaMuscular) {}

  async create(createZonaMuscularDto: CreateZonaMuscularDto) {
    return this.zona.create(createZonaMuscularDto);
  }

  async findAll() {
    return this.zona.findMany();
  }

  async findOne(id: number) {
    return this.zona.findOrThrow(id);
  }

  async update(id: number, updateZonaMuscularDto: UpdateZonaMuscularDto) {
    return this.zona.update(id, updateZonaMuscularDto);
  }

  async remove(id: number) {
    return this.zona.delete(id);
  }
}
