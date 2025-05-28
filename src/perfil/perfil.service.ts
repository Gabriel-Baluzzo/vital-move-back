import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorService } from './services/validator.service';
import { CredencialService } from 'src/credencial/credencial.service';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly validatorService: ValidatorService,
    private readonly credencialService: CredencialService,
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

  async update(id: number, data: UpdatePerfilDto) {
    await this.validatorService.validar(id);
    const { credencial, ...perfilData } = data;

    if (credencial) {
      await this.credencialService.update(id, credencial);
    }
    return this.prisma.perfil.update({
      where: { credencialesId: id },
      data: perfilData,
      include: { credencial: true },
    });
  }

  async remove(id: number) {
    await this.validatorService.validar(id);
    return this.prisma.perfil.delete({ where: { credencialesId: id } });
  }
}
