import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ValidatorPerfilService {
  constructor(private readonly prisma: PrismaService) {}
  async validar(id: number) {
    const perfil = await this.prisma.perfil.findUnique({
      where: { credencialesId: id },
    });
    if (!perfil) {
      throw new NotFoundException(`Perfil con id ${id} no encontrado`);
    }
    return perfil;
  }
}
