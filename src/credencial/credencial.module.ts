import { Module } from '@nestjs/common';
import { CredencialService } from './credencial.service';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { Credencial } from './entities/credencial.entity';

/**
 * Módulo encargado de gestionar las credenciales de usuario.
 *
 * Importa los módulos necesarios para acceder a la base de datos
 * y manejar la autenticación. Provee y exporta los servicios
 * relacionados con credenciales para su uso en otros módulos.
 */
@Module({
  imports: [PrismaModule, AuthModule],
  providers: [CredencialService, Credencial],
  exports: [CredencialService, Credencial],
})
export class CredencialModule {}
