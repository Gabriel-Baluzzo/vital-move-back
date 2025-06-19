import { SetMetadata } from '@nestjs/common';
import { Action } from '../enum/action.enum';

/**
 * Interfaz que representa un permiso requerido para acceder
 * a un recurso o acción específica.
 */
export interface RequiredPermission {
  /** Acción que se quiere realizar (ej. Read, Create, Update, Delete) */
  action: Action;

  /** Recurso o sujeto sobre el que se aplica la acción */
  subject: string;
}

/**
 * Decorador que asigna metadatos de permisos requeridos
 * a controladores o métodos para el sistema de control de acceso.
 *
 * @param action Acción requerida (ej. lectura, creación).
 * @param subject Recurso sobre el que se aplica el permiso.
 * @returns Decorador que añade metadata 'permissions'.
 *
 * @example
 * ```ts
 * @Permission(Action.Read, 'User')
 * ```
 */
export const Permission = (action: Action, subject: string) =>
  SetMetadata('permissions', [{ action, subject }]);
