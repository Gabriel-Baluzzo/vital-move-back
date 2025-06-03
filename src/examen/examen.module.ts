import { Module } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ExamenController } from './examen.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { ValidatorPerfilService } from 'src/perfil/services/validator-perfil.service';
import { FechaValidator } from './services/validar-fecha.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [ExamenController],
  providers: [ExamenService, ValidatorPerfilService, FechaValidator],
})
export class ExamenModule {}
