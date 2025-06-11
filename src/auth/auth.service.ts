import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private auth: Auth) {}

  async register(dto: AuthDto) {
    return this.auth.register(dto);
  }

  async login(dto: AuthDto) {
    return this.auth.login(dto);
  }
}
