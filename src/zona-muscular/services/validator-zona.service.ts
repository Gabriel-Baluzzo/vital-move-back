import { Injectable, NotFoundException } from '@nestjs/common';
import { ZonaMuscular } from '@prisma/client';

@Injectable()
export class ValidatorZonaService {
  constructor() {}
  validar(zona: ZonaMuscular | null) {
    if (!zona) {
      throw new NotFoundException(`La Zona_Muscular buscada no existe`);
    }
  }
}
