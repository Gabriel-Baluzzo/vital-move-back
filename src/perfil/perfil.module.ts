import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { ValidatorService } from './services/validator.service';
import { PrismaService } from 'prisma/prisma.service';
import { CredencialModule } from 'src/credencial/credencial.module';

@Module({
  imports: [
    PrismaModule,
    CaslModule,
    AuthModule,
    CredencialModule, // Ya contiene JwtStrategy, AuthService, JwtModule.
  ],
  controllers: [PerfilController],
  providers: [PerfilService, ValidatorService, PrismaService],
})
export class PerfilModule {}
