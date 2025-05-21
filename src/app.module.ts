import { Module } from '@nestjs/common';
import { PerfilModule } from './perfil/perfil.module';

@Module({
  imports: [PerfilModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
