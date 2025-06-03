import { Injectable } from '@nestjs/common';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorPerfilService } from 'src/perfil/services/validator-perfil.service';
import { FechaValidator } from './services/validar-fecha.service';

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
    const puntos = resultado.puntos;
    let nuevoNivelId: number;

    if (puntos < 4) {
      nuevoNivelId = 1;
    } else if (puntos < 7) {
      nuevoNivelId = 2;
    } else {
      nuevoNivelId = 3;
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
