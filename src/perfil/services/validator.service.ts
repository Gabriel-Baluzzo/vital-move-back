import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ValidatorService {
  constructor(private readonly prisma: PrismaService) {}
  async validar(id: number) {
    console.log('id validar:', id);
    const perfil = await this.prisma.perfil.findUnique({
      where: { credencialesId: id },
    });
    if (!perfil) {
      throw new NotFoundException(`Perfil con id ${id} no encontrado`);
    }
    return perfil;
  }
}
