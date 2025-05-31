import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ValidatorVideoService {
  constructor(private readonly prisma: PrismaService) {}
  async validar(id: number) {
    const video = await this.prisma.video.findUnique({
      where: { id },
    });
    if (!video) {
      throw new NotFoundException(`Video con id ${id} no encontrado`);
    }
    return video;
  }
}
