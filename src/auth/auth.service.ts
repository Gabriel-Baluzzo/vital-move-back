import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hashed = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.credencial.create({
      data: {
        email: dto.email,
        password: hashed,
        perfil: {
          create: {
            nivel_actual: { connect: { id: 1 } },
          },
        },
      },
      include: { perfil: true },
    });

    return this.signToken(user.id, user.email, user.perfil!.rol);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.credencial.findUnique({
      where: { email: dto.email },
      include: { perfil: true },
    });

    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return this.signToken(user.id, user.email, user.perfil!.rol);
  }

  private signToken(userId: number, email: string, role: string) {
    const payload = { sub: userId, email, role };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
