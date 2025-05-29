import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ValidatorNivelService {
  constructor(private readonly prisma: PrismaService) {}
  async validar(id: number) {
    const nivel = await this.prisma.nivel.findUnique({
      where: { id },
    });
    if (!nivel) {
      throw new NotFoundException(`Nivel con id ${id} no encontrada`);
    }
    return nivel;
  }
}
