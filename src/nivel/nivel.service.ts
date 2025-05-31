import { Injectable } from '@nestjs/common';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorNivelService } from './services/validator-nivel.service';

@Injectable()
export class NivelService {
  constructor(
    private readonly prisma: PrismaService,
    private validadorNivel: ValidatorNivelService,
  ) {}

  async create(createNivelDto: CreateNivelDto) {
    return this.prisma.nivel.create({
      data: createNivelDto,
    });
  }

  async findAll() {
    return this.prisma.nivel.findMany();
  }

  async findOne(id: number) {
    const nivel = await this.validadorNivel.validar(id);
    return nivel;
  }

  async update(id: number, updateNivelDto: UpdateNivelDto) {
    await this.validadorNivel.validar(id);
    return this.prisma.nivel.update({
      where: { id },
      data: updateNivelDto,
    });
  }

  async remove(id: number) {
    await this.validadorNivel.validar(id);
    return this.prisma.nivel.delete({
      where: { id },
    });
  }
}
