/* eslint-disable prettier/prettier */
// src/auth/services/auth.service.ts
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
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
import { User } from './interfaces/user.interface'; // ✅ Ensure User is imported

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
    const user: User = await this.userRepository.createUser(dto.email, hashed);

    if (!user.perfil) {
        throw new Error('Perfil no creado para el usuario recién registrado.');
    }

    const tokenResult = await this.tokenService.generateToken(
      user.id,
      user.email,
      user.perfil.rol,
      user.perfil.nivel_actual_id,
    );

    return { // This structure is correct for register
        access_token: tokenResult.access_token,
        user: { // Minimal user info for the client
            userId: user.id,
            email: user.email,
            rol: user.perfil.rol,
            nivel_actual_id: user.perfil.nivel_actual_id,
        }
    };
  }

  async login(dto: LoginDto) {
    const user: User | null = await this.userRepository.findByEmail(dto.email);

    const isValid =
      user &&
      user.password &&
      (await this.hashingService.comparePassword(dto.password, user.password));
    if (!isValid) {
      throw new UnauthorizedException('Password o email incorrecto');
    }

    if (!user!.perfil) {
        throw new UnauthorizedException('Perfil de usuario no encontrado.');
    }

    // ✅ CHANGE THIS PART: Return the full AuthResponse structure
    const tokenResult = await this.tokenService.generateToken(
      user!.id,
      user!.email,
      user!.perfil.rol,
      user!.perfil.nivel_actual_id,
    );

    return { // Return the same structure as register
        access_token: tokenResult.access_token,
        user: { // Minimal user info for the client
            userId: user!.id,
            email: user!.email,
            rol: user!.perfil.rol,
            nivel_actual_id: user!.perfil.nivel_actual_id,
        }
    };
  }
}