import { Module } from '@nestjs/common';
import { PerfilModule } from './perfil/perfil.module';
import { CredencialModule } from './credencial/credencial.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NivelModule } from './nivel/nivel.module';
import { ZonaMuscularModule } from './zona-muscular/zona-muscular.module';

@Module({
  imports: [
    AuthModule,
    PerfilModule,
    CredencialModule,
    NivelModule,
    ZonaMuscularModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
