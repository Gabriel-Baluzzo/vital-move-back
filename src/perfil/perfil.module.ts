import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { CredencialModule } from 'src/credencial/credencial.module';
import { Perfil } from './entities/perfil.entity';

@Module({
  imports: [PrismaModule, CaslModule, AuthModule, CredencialModule],
  controllers: [PerfilController],
  providers: [PerfilService, PrismaService, Perfil],
})
export class PerfilModule {}
