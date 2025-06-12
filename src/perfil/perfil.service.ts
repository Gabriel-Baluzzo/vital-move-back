import { Injectable } from '@nestjs/common';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { Perfil as PerfilP } from '@prisma/client';

@Injectable()
export class PerfilService {
  constructor(private perfil: Perfil) {}

  async findAll(): Promise<PerfilP[]> {
    return this.perfil.findMany();
  }

  async findOne(id: number): Promise<PerfilP> {
    return this.perfil.findOrThrow(id);
  }

  async update(id: number, data: UpdatePerfilDto): Promise<PerfilP> {
    return this.perfil.update(id, data);
  }

  async remove(id: number): Promise<PerfilP> {
    return this.perfil.delete(id);
  }
}
