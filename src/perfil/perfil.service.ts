import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ValidatorService } from './services/validator.service';

@Injectable()
export class PerfilService {
  constructor(
    private readonly prisma: PrismaService,
    private validatorService: ValidatorService,
  ) {}

  findAll() {
    return this.prisma.perfil.findMany({
      include: { credencial: true, nivel_actual: true },
    });
  }

  async findOne(id: number) {
    const perfil = await this.validatorService.validar(id);
    return perfil;
  }

  async update(id: number, data: Prisma.PerfilUpdateInput) {
    await this.validatorService.validar(id);

    return this.prisma.perfil.update({
      where: { credencialesId: id },
      data,
    });
  }

  async remove(id: number) {
    await this.validatorService.validar(id);
    return this.prisma.perfil.delete({ where: { credencialesId: id } });
  }
}
