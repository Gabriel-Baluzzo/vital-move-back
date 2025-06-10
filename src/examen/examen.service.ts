import { Injectable } from '@nestjs/common';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { Examen } from './entities/examen.entity';

@Injectable()
export class ExamenService {
  constructor(private examen: Examen) {}

  async update(id: number, resultado: ResultadoExamenDto) {
    return this.examen.update(id, resultado);
  }
}
