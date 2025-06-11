import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private auth: Auth) {}

  async register(dto: RegisterDto) {
    return this.auth.register(dto);
  }

  async login(dto: LoginDto) {
    return this.auth.login(dto);
  }
}
