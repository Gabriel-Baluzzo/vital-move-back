import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ValidatorZonaService {
  constructor(private readonly prisma: PrismaService) {}
  async validar(id: number) {
    const zona = await this.prisma.zonaMuscular.findUnique({
      where: { id },
    });
    if (!zona) {
      throw new NotFoundException(`Zona_Muscular con id ${id} no encontrada`);
    }
    return zona;
  }
}
