import { Injectable } from '@nestjs/common';
import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { Action } from './interfaces/action.enum';
import { Perfil } from '@prisma/client';

@Injectable()
export class AbilityFactory {
  createForUser(perfil: Perfil) {
    const { can, build } = new AbilityBuilder(createMongoAbility);

    if (perfil.rol === 'admin') {
      can(Action.Manage, 'all');
    } else {
      //   can(Action.Read, 'Perfil', { credencialesId: perfil.credencialesId });
      //   can(Action.Update, 'Perfil', { credencialesId: perfil.credencialesId });
    }
    //buscar forma dinamica para hacerlo desde bb.dd
    return build();
  }
}
