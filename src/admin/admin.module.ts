import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminPerfilController } from './admin-perfil.controller';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { PerfilService } from 'src/perfil/perfil.service';
import { VideoService } from 'src/video/video.service';
import { AdminVideoController } from './admin-video.controller';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorPerfilService } from 'src/perfil/services/validator-perfil.service';
import { ValidatorVideoService } from 'src/video/services/validador-video.service';
import { CredencialService } from 'src/credencial/credencial.service';
import { ValidatorNivelService } from 'src/nivel/services/validator-nivel.service';
import { ValidatorZonaService } from 'src/zona-muscular/services/validator-zona.service';
import { QueryFilterService } from 'src/video/services/query-filter.service';
import { CredencialModule } from 'src/credencial/credencial.module';
import { HashingService } from 'src/auth/services/hash.service';
import { ZonaMuscularService } from 'src/zona-muscular/zona-muscular.service';
import { ZonaMuscular } from 'src/zona-muscular/entities/zona-muscular.entity';

@Module({
  imports: [CaslModule, AuthModule, CredencialModule],
  controllers: [AdminPerfilController, AdminVideoController],
  providers: [
    AdminService,
    PerfilService,
    VideoService,
    PrismaService,
    ValidatorPerfilService,
    ValidatorVideoService,
    CredencialService,
    ValidatorNivelService,
    ValidatorZonaService,
    QueryFilterService,
    HashingService,
    ZonaMuscularService,
    ZonaMuscular,
  ],
})
export class AdminModule {}
