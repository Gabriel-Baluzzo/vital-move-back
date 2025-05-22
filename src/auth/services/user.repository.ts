import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IUserRepository } from '../interfaces/userRepository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, password: string) {
    return this.prisma.credencial.create({
      data: {
        email,
        password,
        perfil: {
          create: {
            nivel_actual: { connect: { id: 1 } },
          },
        },
      },
      include: { perfil: true },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.credencial.findUnique({
      where: { email },
      include: { perfil: true },
    });
  }
}
