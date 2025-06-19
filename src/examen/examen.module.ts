import { Module } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ExamenController } from './examen.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { PerfilService } from 'src/perfil/perfil.service';
import { Perfil } from 'src/perfil/entities/perfil.entity';
import { CredencialService } from 'src/credencial/credencial.service';
import { Credencial } from 'src/credencial/entities/credencial.entity';

/**
 * Módulo encargado de la gestión del examen y la validación de usuarios.
 *
 * Importa los módulos necesarios para acceder a la base de datos y autenticación.
 * Provee los controladores y servicios que gestionan la lógica del examen y perfil.
 */
@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [ExamenController],
  providers: [
    ExamenService,
    PerfilService,
    Perfil,
    CredencialService,
    Credencial,
  ],
})
export class ExamenModule {}
