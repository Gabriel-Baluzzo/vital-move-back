import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { CredencialModule } from 'src/credencial/credencial.module';
import { Perfil } from './entities/perfil.entity';

/**
 * Módulo que agrupa todo lo relacionado con el manejo de perfiles de usuario.
 *
 * Importa módulos necesarios para acceso a datos, autenticación y manejo de credenciales.
 * Declara los controladores y servicios relacionados con perfiles.
 */
@Module({
  imports: [PrismaModule, AuthModule, CredencialModule],
  controllers: [PerfilController],
  providers: [PerfilService, Perfil],
})
export class PerfilModule {}
