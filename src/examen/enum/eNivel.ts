/**
 * Enumeración que representa los distintos niveles del sistema.
 *
 * Los valores numéricos indican el nivel o el mínimo requerido para avanzar.
 */
export enum eNivel {
  /** Nivel principiante (1) */
  PRINCIPIANTE = 1,

  /** Nivel intermedio (2) */
  INTERMEDIO = 2,

  /** Nivel avanzado (3) */
  AVANZADO = 3,

  /** Puntaje mínimo requerido para alcanzar el nivel intermedio (4) */
  MINIMO_REQUERIDO_INTERMEDIO = 4,

  /** Puntaje mínimo requerido para alcanzar el nivel avanzado (7) */
  MINIMO_REQUERIDO_AVANZADO = 7,
}
