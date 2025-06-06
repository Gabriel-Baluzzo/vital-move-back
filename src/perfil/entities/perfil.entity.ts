import { PrismaService } from 'prisma/prisma.service';

export class Perfil {
  constructor(private readonly prisma: PrismaService) {}
  async findPerfilById(id: number) {
    const perfil = await this.prisma.perfil.findUnique({
      where: { credencialesId: id },
    });
    return perfil;
  }
}
