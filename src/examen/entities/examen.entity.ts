/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { BadRequestException, Injectable } from '@nestjs/common';
import { differenceInDays } from 'date-fns';
import { PrismaService } from 'prisma/prisma.service';
import { eNivel } from '../enum/eNivel';
import { PerfilService } from 'src/perfil/perfil.service';
import { ResultadoExamenDto } from '../dto/resultado-examen.dto';
import { Perfil } from '@prisma/client';

@Injectable()
export class Examen {
  constructor(
    private readonly prisma: PrismaService,
    private perfil: PerfilService,
  ) {}

  async update(id: number, resultado: ResultadoExamenDto): Promise<Perfil> {
    await Promise.all([this.perfil.findOne(id)]);
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
