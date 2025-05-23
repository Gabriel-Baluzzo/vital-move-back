import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    CaslModule,
    AuthModule, // Ya contiene JwtStrategy, AuthService, JwtModule, etc.
  ],
  controllers: [PerfilController],
  providers: [PerfilService],
})
export class PerfilModule {}
