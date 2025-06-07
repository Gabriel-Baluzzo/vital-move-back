/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateCredencialDto } from './dto/update-credencial.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { HashingService } from 'src/auth/services/hash.service';

@Injectable()
export class CredencialService {
  constructor(
    private prisma: PrismaService,
    private hashingService: HashingService,
  ) {}

  findAll() {
    return `This action returns all credencial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} credencial`;
  }

  async update(id: number, dto: UpdateCredencialDto) {
    const data: Prisma.CredencialUpdateInput = { ...dto };

    if (dto.password) {
      data.password = await this.hashingService.hashPassword(dto.password);
    }
    return this.prisma.credencial.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} credencial`;
  }
}
