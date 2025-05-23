import { Module } from '@nestjs/common';
import { PerfilModule } from './perfil/perfil.module';
import { CredencialModule } from './credencial/credencial.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NivelModule } from './nivel/nivel.module';

@Module({
  imports: [
    AuthModule,
    PerfilModule,
    CredencialModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    NivelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
