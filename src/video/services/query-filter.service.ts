import { BadRequestException } from '@nestjs/common';
import { FilterVideoDto } from '../dto/filter-video.dto';
import { Prisma } from '@prisma/client';

export class QueryFilterService {
  queryFilter(nivelUsuario: number, query: FilterVideoDto) {
    const { nivel_id, zona_muscular_id, nombre, descripcion } = query;

    let nivelFilter: Prisma.IntFilter;

    if (nivel_id !== undefined) {
      if (nivel_id > nivelUsuario) {
        throw new BadRequestException('No alcanzaste esta dificultad.');
      }
      nivelFilter = { equals: nivel_id };
    } else {
      nivelFilter = { lte: nivelUsuario };
    }

    const where = {
      nivel_id: nivelFilter,
      ...(zona_muscular_id && { zona_muscular_id }),
      ...(nombre && {
        nombre: {
          contains: nombre,
          mode: 'insensitive' as const,
        },
      }),
      ...(descripcion && {
        descripcion: {
          contains: descripcion,
          mode: 'insensitive' as const,
        },
      }),
    };

    return where;
  }
}
