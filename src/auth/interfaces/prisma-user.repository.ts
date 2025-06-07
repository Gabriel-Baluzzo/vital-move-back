/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// src/auth/repositories/prisma-user.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IUserRepository } from '../interfaces/userRepository.interface';
import { Credencial, Perfil } from '@prisma/client'; // Keep these imports for Prisma operations
import { User } from '../interfaces/user.interface'; // ✅ Import the new User interface

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> { // ✅ Change return type to User | null
    const credencial = await this.prisma.credencial.findUnique({
      where: { email },
      include: { perfil: true },
    });

    if (!credencial) {
      return null;
    }

    // ✅ Map Credencial to User
    return {
      id: credencial.id,
      email: credencial.email,
      password: credencial.password, // Include password if AuthService needs it for comparison
      perfil: credencial.perfil ? {
        rol: credencial.perfil.rol,
        nivel_actual_id: credencial.perfil.nivel_actual_id,
        // Add other Perfil properties if needed in UserProfile
      } : undefined, // Ensure perfil is mapped correctly or is undefined
    };
  }

  async createUser(email: string, password: string): Promise<User> { // ✅ Change return type to User
    // When a Credencial is created, a default Perfil MUST be created along with it.
    const createdCredencial = await this.prisma.credencial.create({
      data: {
        email,
        password,
        perfil: {
          create: {
            rol: 'usuario',
            nivel_actual_id: 1, // Make sure '1' exists in your Nivel table
          },
        },
      },
      include: { perfil: true }, // ✅ IMPORTANT: Include perfil so it's returned for mapping
    });

    // ✅ Map the created Credencial (with its new Perfil) to the User interface
    return {
      id: createdCredencial.id,
      email: createdCredencial.email,
      // Do not return password for security, unless explicitly needed by AuthService
      // If AuthService's `register` return value is just for client info, don't include password.
      // If it's used internally by AuthService for something else (e.g., direct access), it's okay.
      // Given your AuthService.register returns a token service result, the `User` from here
      // is primarily for internal AuthService use.

      // Map perfil if it exists (which it should, as we just created it)
      perfil: createdCredencial.perfil ? {
        rol: createdCredencial.perfil.rol,
        nivel_actual_id: createdCredencial.perfil.nivel_actual_id,
      } : undefined, // Should not be undefined here due to `include: { perfil: true }`
    };
  }
}