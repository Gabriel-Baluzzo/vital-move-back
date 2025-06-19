import { Module } from '@nestjs/common';
import { ZonaMuscularService } from './zona-muscular.service';
import { ZonaMuscularController } from './zona-muscular.controller';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { ZonaMuscular } from './entities/zona-muscular.entity';
import { PrismaModule } from 'prisma/prisma.module';

/**
 * Módulo que agrupa todos los componentes relacionados con la gestión de zonas musculares.
 *
 * Importa módulos para control de acceso (CaslModule), autenticación (AuthModule) y acceso a la base de datos (PrismaModule).
 * Declara el controlador y los servicios relacionados con las zonas musculares.
 */
@Module({
  imports: [CaslModule, AuthModule, PrismaModule],
  controllers: [ZonaMuscularController],
  providers: [ZonaMuscularService, ZonaMuscular],
})
export class ZonaMuscularModule {}
