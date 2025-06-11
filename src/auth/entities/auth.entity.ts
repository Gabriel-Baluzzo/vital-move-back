import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import { CredencialService } from 'src/credencial/credencial.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Auth {
  constructor(
    private credencial: CredencialService,
    private jwtService: JwtService,
  ) {}

  generateToken(
    userId: number,
    email: string,
    rol: string,
    nivel_actual_id: number,
  ): { access_token: string } {
    const payload = { userId, email, rol, nivel_actual_id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async register(dto: AuthDto) {
    const existingUser = await this.credencial.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('El usuario ya existe');
    }
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.credencial.create(dto.email, hashed);
    return this.generateToken(
      user.id,
      user.email,
      user.perfil!.rol,
      user.perfil!.nivel_actual_id,
    );
  }

  async login(dto: AuthDto) {
    const user = await this.credencial.findByEmail(dto.email);

    const isValid = user && (await bcrypt.compare(dto.password, user.password));
    if (!isValid) {
      throw new UnauthorizedException('Password o email incorrecto');
    }

    return this.generateToken(
      user.id,
      user.email,
      user.perfil!.rol,
      user.perfil!.nivel_actual_id,
    );
  }
}
