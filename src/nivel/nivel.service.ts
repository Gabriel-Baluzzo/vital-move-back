import { Injectable } from '@nestjs/common';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { Nivel } from './entities/nivel.entity';

@Injectable()
export class NivelService {
  constructor(private nivel: Nivel) {}

  create(createNivelDto: CreateNivelDto) {
    return this.nivel.create(createNivelDto);
  }

  findAll() {
    return this.nivel.findMany();
  }

  findOne(id: number) {
    return this.nivel.findOrThrow(id);
  }

  update(id: number, updateNivelDto: UpdateNivelDto) {
    return this.nivel.update(id, updateNivelDto);
  }

  remove(id: number) {
    return this.nivel.delete(id);
  }
}
