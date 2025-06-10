import { Injectable } from '@nestjs/common';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { Nivel } from './entities/nivel.entity';

@Injectable()
export class NivelService {
  constructor(private nivel: Nivel) {}

  async create(createNivelDto: CreateNivelDto) {
    return this.nivel.create(createNivelDto);
  }

  async findAll() {
    return this.nivel.findMany();
  }

  async findOne(id: number) {
    return this.nivel.findOrThrow(id);
  }

  async update(id: number, updateNivelDto: UpdateNivelDto) {
    return this.nivel.update(id, updateNivelDto);
  }

  async remove(id: number) {
    return this.nivel.delete(id);
  }
}
