/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { BadRequestException, Injectable } from '@nestjs/common';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { Perfil } from '@prisma/client';
import { PerfilService } from 'src/perfil/perfil.service';
import { eNivel } from './enum/eNivel';
import { differenceInDays } from 'date-fns';

@Injectable()
export class ExamenService {
  constructor(private perfil: PerfilService) {}

  async validarNuevoUsuario(id: number): Promise<void> {
    const perfil = await this.perfil.findOne(id);
    await this.validarFechaExamen(id);
    if (perfil?.fecha_ultima_evaluacion === null) {
      throw new BadRequestException(`Debes tomar el examen de aptitud fisica`);
    }
  }

  async validarFechaExamen(id: number) {
    const perfil = await this.perfil.findOne(id);

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

  async validarTotal(id: number) {
    await Promise.all([
      this.validarFechaExamen(id),
      this.validarNuevoUsuario(id),
    ]);
  }

  async update(id: number, resultado: ResultadoExamenDto): Promise<Perfil> {
    await this.validarFechaExamen(id);
    const puntaje = resultado.puntos;
    let nuevoNivelId: number;

    if (puntaje < eNivel.MINIMO_REQUERIDO_INTERMEDIO) {
      nuevoNivelId = eNivel.PRINCIPIANTE;
    } else if (puntaje < eNivel.MINIMO_REQUERIDO_AVANZADO) {
      nuevoNivelId = eNivel.INTERMEDIO;
    } else {
      nuevoNivelId = eNivel.AVANZADO;
    }
    return this.perfil.updateNivel(id, nuevoNivelId);
  }
}
