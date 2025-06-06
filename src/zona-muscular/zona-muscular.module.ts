import { Module } from '@nestjs/common';
import { ZonaMuscularService } from './zona-muscular.service';
import { ZonaMuscularController } from './zona-muscular.controller';
import { PrismaService } from 'prisma/prisma.service';
import { CaslModule } from 'src/casl/casl.module';
import { AuthModule } from 'src/auth/auth.module';
import { ZonaMuscular } from './entities/zona-muscular.entity';

@Module({
  imports: [CaslModule, AuthModule],
  controllers: [ZonaMuscularController],
  providers: [ZonaMuscularService, PrismaService, ZonaMuscular],
})
export class ZonaMuscularModule {}
