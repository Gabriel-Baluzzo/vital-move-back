import { Module } from '@nestjs/common';
import { AdminPerfilController } from './admin-perfil.controller';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { PerfilService } from 'src/perfil/perfil.service';
import { VideoService } from 'src/video/video.service';
import { AdminVideoController } from './admin-video.controller';
import { CredencialService } from 'src/credencial/credencial.service';
import { ZonaMuscularService } from 'src/zona-muscular/zona-muscular.service';
import { ZonaMuscular } from 'src/zona-muscular/entities/zona-muscular.entity';
import { NivelService } from 'src/nivel/nivel.service';
import { Video } from 'src/video/entities/video.entity';
import { Nivel } from 'src/nivel/entities/nivel.entity';
import { Perfil } from 'src/perfil/entities/perfil.entity';
import { Credencial } from 'src/credencial/entities/credencial.entity';
import { PrismaModule } from 'prisma/prisma.module';

/**
 * Módulo administrador que agrupa los controladores y servicios
 * relacionados con los perfiles y videos gestionados por el admin.
 *
 * Importa módulos de autenticación, control de acceso y acceso a base de datos.
 * Provee los servicios y entidades necesarias para la gestión administrativa.
 */
@Module({
  imports: [CaslModule, AuthModule, PrismaModule],
  controllers: [AdminPerfilController, AdminVideoController],
  providers: [
    PerfilService,
    VideoService,
    Perfil,
    CredencialService,
    Credencial,
    NivelService,
    ZonaMuscularService,
    ZonaMuscular,
    Video,
    Nivel,
  ],
})
export class AdminModule {}
