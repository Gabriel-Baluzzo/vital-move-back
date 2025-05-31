import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ITokenService } from '../interfaces/token.interface';

@Injectable()
export class TokenService implements ITokenService {
  constructor(private jwtService: JwtService) {}

  generateToken(
    userId: number,
    email: string,
    rol: string,
    nivel_actual_id: number,
  ): { access_token: string } {
    const payload = { userId, email, rol, nivel_actual_id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
