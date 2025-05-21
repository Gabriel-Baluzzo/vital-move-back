import { Module } from '@nestjs/common';
import { PerfilModule } from './perfil/perfil.module';
import { CredencialModule } from './credencial/credencial.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PerfilModule,
    CredencialModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
