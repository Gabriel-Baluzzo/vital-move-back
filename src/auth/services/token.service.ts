import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ITokenService } from '../interfaces/token.interface';

@Injectable()
export class TokenService implements ITokenService {
  constructor(private jwtService: JwtService) {}

  generateToken(
    userId: number,
    email: string,
    role: string,
  ): { access_token: string } {
    const payload = { sub: userId, email, role };
    return { access_token: this.jwtService.sign(payload) };
  }
}
