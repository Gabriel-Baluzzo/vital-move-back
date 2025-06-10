/* eslint-disable prettier/prettier */
// src/auth/repositories/prisma-user.repository.ts (Updated for Option 1)
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IUserRepository } from '../interfaces/userRepository.interface';
import { Credencial, Perfil } from '@prisma/client';
import { User } from '../interfaces/user.interface';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const credencial = await this.prisma.credencial.findUnique({
      where: { email },
      include: { perfil: true },
    });

    if (!credencial) {
      return null;
    }

    // Map Credencial to User
    return {
      id: credencial.id,
      email: credencial.email,
      password: credencial.password, // <--- Ensure 'password' is included here
      perfil: credencial.perfil ? {
        rol: credencial.perfil.rol,
        nivel_actual_id: credencial.perfil.nivel_actual_id,
      } : null,
    };
  }

  async createUser(email: string, password: string): Promise<User> {
    const createdCredencial = await this.prisma.credencial.create({
      data: {
        email,
        password,
        perfil: {
          create: {
            rol: 'usuario',
            nivel_actual_id: 1,
          },
        },
      },
      include: { perfil: true },
    });

    // Map the created Credencial (with its new Perfil) to the User interface
    return {
      id: createdCredencial.id,
      email: createdCredencial.email,
      password: createdCredencial.password, // <--- Add 'password' here to satisfy the User interface
      perfil: createdCredencial.perfil ? {
        rol: createdCredencial.perfil.rol,
        nivel_actual_id: createdCredencial.perfil.nivel_actual_id,
      } : null,
    };
  }
}