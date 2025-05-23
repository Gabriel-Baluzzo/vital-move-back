import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PrismaService } from 'prisma/prisma.service';
import { UserRepository } from './services/user.repository';
import { HashingService } from './services/hash.service';
import { TokenService } from './services/token.service';

@Module({
  imports: [
    ConfigModule, // <- para asegurar que esté disponible
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    PrismaService,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IHashingService',
      useClass: HashingService,
    },
    {
      provide: 'ITokenService',
      useClass: TokenService,
    },
  ],
  exports: [AuthService, JwtStrategy],
})
export class AuthModule {}
