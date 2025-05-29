import { Injectable } from '@nestjs/common';
import { CreateZonaMuscularDto } from './dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from './dto/update-zona-muscular.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorZonaService } from './services/validator-zona.service';

@Injectable()
export class ZonaMuscularService {
  constructor(
    private readonly prisma: PrismaService,
    private validatorZona: ValidatorZonaService,
  ) {}

  create(createZonaMuscularDto: CreateZonaMuscularDto) {
    return this.prisma.zonaMuscular.create({ data: createZonaMuscularDto });
  }

  findAll() {
    return this.prisma.zonaMuscular.findMany();
  }

  async findOne(id: number) {
    const zona = await this.validatorZona.validar(id);
    return zona;
  }

  async update(id: number, updateZonaMuscularDto: UpdateZonaMuscularDto) {
    await this.validatorZona.validar(id);
    return this.prisma.zonaMuscular.update({
      where: { id },
      data: updateZonaMuscularDto,
    });
  }

  async remove(id: number) {
    await this.validatorZona.validar(id);
    return this.prisma.zonaMuscular.delete({
      where: { id },
    });
  }
}
