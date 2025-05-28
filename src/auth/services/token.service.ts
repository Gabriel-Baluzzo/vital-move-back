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
  ): { access_token: string } {
    const payload = { sub: userId, email, rol };
    return { access_token: this.jwtService.sign(payload) };
  }
}
