/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { BadRequestException, Injectable } from '@nestjs/common';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { Perfil } from '@prisma/client';
import { PerfilService } from '../../src/perfil/perfil.service';
import { eNivel } from './enum/eNivel';
import { differenceInDays } from 'date-fns';
import { AuthService } from '../../src/auth/auth.service';

/**
 * Servicio encargado de gestionar la lógica relacionada con los exámenes físicos de los usuarios.
 *
 * Valida si el usuario es nuevo, verifica la frecuencia con la que puede rendir el examen,
 * y actualiza el nivel del perfil según el puntaje obtenido.
 */
@Injectable()
export class ExamenService {
  /**
   * Constructor que inyecta los servicios necesarios.
   *
   * @param perfil Servicio para manejar perfiles de usuario.
   * @param auth Servicio para manejo de autenticación y generación de tokens.
   */
  constructor(
    private perfil: PerfilService,
    private auth: AuthService,
  ) {}

  /**
   * Valida si un usuario es nuevo y debe tomar el examen físico.
   *
   * @param id ID del perfil del usuario.
   * @throws BadRequestException si el usuario no ha tomado el examen aún.
   */
  async validarNuevoUsuario(id: number): Promise<void> {
    const perfil = await this.perfil.findOne(id);
    if (perfil?.fecha_ultima_evaluacion === null) {
      throw new BadRequestException(`Debes tomar el examen de aptitud fisica`);
    }
  }

  /**
   * Valida si ha pasado el tiempo necesario para volver a rendir el examen.
   *
   * @param id ID del perfil del usuario.
   * @throws BadRequestException si faltan días para poder rendir nuevamente.
   */
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

  /**
   * Actualiza el nivel del perfil del usuario según el resultado del examen.
   *
   * Genera un nuevo token de acceso con el nivel actualizado.
   *
   * @param id ID del perfil del usuario.
   * @param resultado Resultado del examen con los puntos obtenidos.
   * @returns Objeto con el perfil actualizado y un token de acceso nuevo.
   */
  async update(
    id: number,
    resultado: ResultadoExamenDto,
  ): Promise<{ perfil: Perfil; access_token: string }> {
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

    const perfil = await this.perfil.updateNivel(id, nuevoNivelId);
    const { id: userId, email } = perfil.credencial;
    const { access_token } = this.auth.generateToken(
      userId,
      email,
      perfil.rol,
      perfil.nivel_actual_id,
    );

    return { perfil, access_token };
  }
}
