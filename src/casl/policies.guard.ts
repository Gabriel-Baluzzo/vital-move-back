/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { AbilityFactory } from './ability.factory';
import { Reflector } from '@nestjs/core';
import { RequiredPermission } from './decorators/permissions.decorator';
import { Perfil } from '@prisma/client';

/**
 * Guardia que verifica las políticas de permisos
 * definidas mediante metadatos en controladores o métodos.
 *
 * Valida si el usuario autenticado posee los permisos requeridos
 * para ejecutar la acción solicitada.
 */
@Injectable()
export class PoliciesGuard implements CanActivate {
  /**
   * Crea una instancia del guardia de políticas.
   *
   * @param reflector Servicio para obtener metadatos de decoradores.
   * @param abilityFactory Fábrica para crear habilidades basadas en el perfil del usuario.
   */
  constructor(
    private reflector: Reflector,
    private abilityFactory: AbilityFactory,
  ) {}

  /**
   * Método que determina si la petición puede ser autorizada
   * según las políticas definidas.
   *
   * @param context Contexto de ejecución que contiene la solicitud HTTP.
   * @returns `true` si el usuario tiene permisos, lanza excepción si no los tiene.
   * @throws ForbiddenException si el usuario no tiene permiso.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions =
      this.reflector.get<RequiredPermission[]>(
        'permissions',
        context.getHandler(),
      ) || [];

    const request = context.switchToHttp().getRequest();
    const perfil: Perfil = request.user;
    const ability = this.abilityFactory.createForUser(perfil);

    for (const permission of requiredPermissions) {
      if (!ability.can(permission.action, permission.subject)) {
        throw new ForbiddenException(
          `No tienes permiso para ${permission.action} este ${permission.subject}`,
        );
      }
    }

    return true;
  }
}
