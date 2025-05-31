import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { IUserRepository } from './interfaces/userRepository.interface';
import { IHashingService } from './interfaces/hashing.interface';
import { ITokenService } from './interfaces/token.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('IUserRepository') private userRepository: IUserRepository,
    @Inject('IHashingService') private hashingService: IHashingService,
    @Inject('ITokenService') private tokenService: ITokenService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.userRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('El usuario ya existe');
    }
    const hashed = await this.hashingService.hashPassword(dto.password);
    const user = await this.userRepository.createUser(dto.email, hashed);
    return this.tokenService.generateToken(
      user.id,
      user.email,
      user.perfil!.rol,
      user.perfil!.nivel_actual_id,
    );
  }

  async login(dto: LoginDto) {
    const user = await this.userRepository.findByEmail(dto.email);

    const isValid =
      user &&
      (await this.hashingService.comparePassword(dto.password, user.password));
    if (!isValid) {
      throw new UnauthorizedException('Password o email incorrecto');
    }

    return this.tokenService.generateToken(
      user.id,
      user.email,
      user.perfil!.rol,
      user.perfil!.nivel_actual_id,
    );
  }
}
