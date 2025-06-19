/**
 * Representa el payload contenido en el token JWT.
 *
 * Contiene la información mínima necesaria para identificar
 * y autorizar a un usuario en el sistema.
 */
export interface JwtPayload {
  /** Identificador único del usuario */
  userId: number;

  /** Correo electrónico del usuario */
  email: string;

  /** Rol asignado al usuario (ej. admin, usuario) */
  rol: string;

  /** Identificador del nivel actual asociado al usuario */
  nivel_actual_id: number;
}
