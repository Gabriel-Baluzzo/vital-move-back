import { Module } from '@nestjs/common';
import { AbilityFactory } from './ability.factory';

/**
 * Módulo CASL que provee la fábrica de habilidades (AbilityFactory)
 * para el control de acceso basado en roles y permisos.
 *
 * Este módulo registra AbilityFactory como proveedor y lo exporta
 * para que pueda ser inyectado en otros módulos de la aplicación.
 */
@Module({
  providers: [AbilityFactory],
  exports: [AbilityFactory],
})
export class CaslModule {}
