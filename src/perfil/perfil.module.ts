import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { ValidatorPerfilService } from './services/validator-perfil.service';
import { PrismaService } from 'prisma/prisma.service';
import { CredencialModule } from 'src/credencial/credencial.module';

@Module({
  imports: [PrismaModule, CaslModule, AuthModule, CredencialModule],
  controllers: [PerfilController],
  providers: [PerfilService, ValidatorPerfilService, PrismaService],
})
export class PerfilModule {}
