import { Module } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { NivelController } from './nivel.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorNivelService } from './services/validator-nivel.service';
import { AuthModule } from 'src/auth/auth.module';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [PrismaModule, AuthModule, CaslModule],
  controllers: [NivelController],
  providers: [NivelService, PrismaService, ValidatorNivelService],
})
export class NivelModule {}
