import { PrismaService } from 'prisma/prisma.service';
import { differenceInDays } from 'date-fns';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FechaValidator {
  constructor(private readonly prisma: PrismaService) {}

  async validar(id: number) {
    const perfil = await this.prisma.perfil.findUnique({
      where: { credencialesId: id },
    });

    if (perfil?.fecha_ultima_evaluacion) {
      const dias = differenceInDays(new Date(), perfil.fecha_ultima_evaluacion);

      if (dias < 30) {
        const falta = Math.ceil(30 - dias);
        throw new BadRequestException(
          `El examen se puede tomar cada 30 dias. Faltan ${falta} dia(s) para tu siguiente intento.`,
        );
      }
    }
  }
}
