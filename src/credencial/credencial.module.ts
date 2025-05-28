import { Module } from '@nestjs/common';
import { CredencialService } from './credencial.service';
import { CredencialController } from './credencial.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { HashingService } from 'src/auth/services/hash.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [CredencialController],
  providers: [CredencialService, HashingService],
  exports: [CredencialService],
})
export class CredencialModule {}
