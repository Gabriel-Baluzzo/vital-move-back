/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { BadRequestException, Injectable } from '@nestjs/common';
import { differenceInDays } from 'date-fns';
import { PrismaService } from 'prisma/prisma.service';
import { eNivel } from '../enum/eNivel';
import { PerfilService } from 'src/perfil/perfil.service';
import { ResultadoExamenDto } from '../dto/resultado-examen.dto';

@Injectable()
export class Examen {
  constructor(
    private readonly prisma: PrismaService,
    private perfil: PerfilService,
  ) {}

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

  async update(id: number, resultado: ResultadoExamenDto) {
    await this.perfil.findOne(id);
    await this.validar(id);
    const puntaje = resultado.puntos;
    let nuevoNivelId: number;

    if (puntaje < eNivel.MINIMO_REQUERIDO_INTERMEDIO) {
      nuevoNivelId = eNivel.PRINCIPIANTE;
    } else if (puntaje < eNivel.MINIMO_REQUERIDO_AVANZADO) {
      nuevoNivelId = eNivel.INTERMEDIO;
    } else {
      nuevoNivelId = eNivel.AVANZADO;
    }

    return this.prisma.perfil.update({
      where: { credencialesId: id },
      data: {
        nivel_actual_id: nuevoNivelId,
        fecha_ultima_evaluacion: new Date(),
      },
    });
  }
}
