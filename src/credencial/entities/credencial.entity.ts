import { PrismaService } from 'prisma/prisma.service';
import { UpdateCredencialDto } from '../dto/update-credencial.dto';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Credencial {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: number, dto: UpdateCredencialDto) {
    const data = dto;

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }
    return this.prisma.credencial.update({
      where: { id },
      data,
    });
  }

  async create(email: string, password: string) {
    return this.prisma.credencial.create({
      data: {
        email,
        password,
        perfil: {
          create: {
            nivel_actual_id: 0,
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
