import { Injectable } from '@nestjs/common';
import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { Action } from './enum/action.enum';
import { Perfil } from '@prisma/client';

/**
 * Fabrica para crear instancias de habilidades (abilities)
 * basadas en el perfil del usuario para el control de acceso.
 */
@Injectable()
export class AbilityFactory {
  /**
   * Crea una habilidad (ability) para un usuario según su perfil.
   *
   * @param perfil Perfil del usuario que contiene su rol y otros datos.
   * @returns Objeto de habilidades que define lo que el usuario puede hacer.
   */
  createForUser(perfil: Perfil) {
    const { can, build } = new AbilityBuilder(createMongoAbility);

    if (perfil.rol === 'admin') {
      can(Action.Manage, 'all');
    }
    return build();
  }
}
