import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminPerfilController } from './admin-perfil.controller';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { PerfilService } from 'src/perfil/perfil.service';
import { VideoService } from 'src/video/video.service';
import { AdminVideoController } from './admin-video.controller';
import { PrismaService } from 'prisma/prisma.service';
import { CredencialService } from 'src/credencial/credencial.service';
import { CredencialModule } from 'src/credencial/credencial.module';
import { HashingService } from 'src/auth/services/hash.service';
import { ZonaMuscularService } from 'src/zona-muscular/zona-muscular.service';
import { ZonaMuscular } from 'src/zona-muscular/entities/zona-muscular.entity';
import { NivelService } from 'src/nivel/nivel.service';
import { Video } from 'src/video/entities/video.entity';
import { Nivel } from 'src/nivel/entities/nivel.entity';
import { Perfil } from 'src/perfil/entities/perfil.entity';

@Module({
  imports: [CaslModule, AuthModule, CredencialModule],
  controllers: [AdminPerfilController, AdminVideoController],
  providers: [
    AdminService,
    PerfilService,
    VideoService,
    PrismaService,
    Perfil,
    CredencialService,
    NivelService,
    HashingService,
    ZonaMuscularService,
    ZonaMuscular,
    Video,
    Nivel,
  ],
})
export class AdminModule {}
