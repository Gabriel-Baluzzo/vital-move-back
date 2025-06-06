import { Injectable } from '@nestjs/common';
import { CreateZonaMuscularDto } from './dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from './dto/update-zona-muscular.dto';
import { ZonaMuscular } from './entities/zona-muscular.entity';

@Injectable()
export class ZonaMuscularService {
  constructor(private zona: ZonaMuscular) {}

  create(createZonaMuscularDto: CreateZonaMuscularDto) {
    return this.zona.create(createZonaMuscularDto);
  }

  findAll() {
    return this.zona.findMany();
  }

  findOne(id: number) {
    return this.zona.findOrThrow(id);
  }

  update(id: number, updateZonaMuscularDto: UpdateZonaMuscularDto) {
    return this.zona.update(id, updateZonaMuscularDto);
  }

  remove(id: number) {
    return this.zona.delete(id);
  }
}
