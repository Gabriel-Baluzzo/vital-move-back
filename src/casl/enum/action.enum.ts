/**
 * Enumeración que representa las acciones posibles
 * para el control de acceso basado en permisos.
 */
export enum Action {
  /** Permite gestionar todos los aspectos del recurso */
  Manage = 'manage',

  /** Permite crear nuevos recursos */
  Create = 'create',

  /** Permite leer o consultar recursos */
  Read = 'read',

  /** Permite actualizar recursos existentes */
  Update = 'update',

  /** Permite eliminar recursos */
  Delete = 'delete',
}
