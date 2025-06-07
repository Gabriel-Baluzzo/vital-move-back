/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IUserRepository } from '../interfaces/userRepository.interface';
import { User, UserProfile } from '../interfaces/user.interface';
import { Credencial, Perfil } from '@prisma/client';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  private mapCredencialToUser(
    credencial: (Credencial & { perfil: Perfil | null }) | null
  ): User | null {
    if (!credencial) {
      return null;
    }

    const user: User = {
      id: credencial.id,
      email: credencial.email,
      password: credencial.password,
    };

    if (credencial.perfil) {
      user.perfil = {
        rol: credencial.perfil.rol,
        nivel_actual_id: credencial.perfil.nivel_actual_id,
      } as UserProfile;
    }

    return user;
  }

  async createUser(email: string, password: string): Promise<User> {
    const createdCredencial = await this.prisma.credencial.create({
      data: {
        email,
        password,
        perfil: {
          create: {
            // ✅ Removed: nivel_actual: { connect: { id: 1 } },
            // Prisma will now use the @default(1) from schema.prisma
          },
        },
      },
      include: { perfil: true }, // Keep this to ensure perfil is loaded for mapping
    });

    return this.mapCredencialToUser(createdCredencial) as User;
  }

  async findByEmail(email: string): Promise<User | null> {
    const credencial = await this.prisma.credencial.findUnique({
      where: { email },
      include: { perfil: true },
    });

    return this.mapCredencialToUser(credencial);
  }
}