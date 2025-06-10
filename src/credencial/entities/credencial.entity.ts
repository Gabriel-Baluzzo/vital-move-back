import { PrismaService } from 'prisma/prisma.service';
import { UpdateCredencialDto } from '../dto/update-credencial.dto';
import { HashingService } from 'src/auth/services/hash.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Credencial {
  constructor(
    private readonly prisma: PrismaService,
    private hashing: HashingService,
  ) {}

  async update(id: number, dto: UpdateCredencialDto) {
    const data = dto;

    if (dto.password) {
      data.password = await this.hashing.hashPassword(dto.password);
    }
    return this.prisma.credencial.update({
      where: { id },
      data,
    });
  }
}
