import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class ZonaMuscular {
  constructor(private readonly prisma: PrismaService) {}
  async findById(id: number) {
    const zona = await this.prisma.zonaMuscular.findUnique({
      where: { id },
    });
    return zona;
  }
}
