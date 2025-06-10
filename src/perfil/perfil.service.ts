import { Injectable } from '@nestjs/common';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfilService {
  constructor(private perfil: Perfil) {}

  async findAll() {
    return this.perfil.findMany();
  }

  async findOne(id: number) {
    return this.perfil.findOrThrow(id);
  }

  async update(id: number, data: UpdatePerfilDto) {
    return this.perfil.update(id, data);
  }

  async remove(id: number) {
    return this.perfil.delete(id);
  }
}
