/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { Injectable } from '@nestjs/common';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorPerfilService } from 'src/perfil/services/validator-perfil.service';
import { FechaValidator } from './services/validar-fecha.service';
import { eNivel } from './enum/eNivel';

@Injectable()
export class ExamenService {
  constructor(
    private readonly prisma: PrismaService,
    private perfilValidator: ValidatorPerfilService,
    private fechaValidator: FechaValidator,
  ) {}

  async examen(id: number, resultado: ResultadoExamenDto) {
    await this.perfilValidator.validar(id);
    await this.fechaValidator.validar(id);
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
