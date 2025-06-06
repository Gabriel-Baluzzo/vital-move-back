import { Injectable } from '@nestjs/common';
import { CreateZonaMuscularDto } from './dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from './dto/update-zona-muscular.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ValidatorZonaService } from './services/validator-zona.service';
import { ZonaMuscular } from './entities/zona-muscular.entity';

@Injectable()
export class ZonaMuscularService {
  constructor(
    private zona: ZonaMuscular,
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
    const zona = await this.zona.findById(id);
    this.validatorZona.validar(zona);
    return zona;
  }

  async update(id: number, updateZonaMuscularDto: UpdateZonaMuscularDto) {
    const zona = await this.zona.findById(id);
    this.validatorZona.validar(zona);
    return this.prisma.zonaMuscular.update({
      where: { id },
      data: updateZonaMuscularDto,
    });
  }

  async remove(id: number) {
    const zona = await this.zona.findById(id);
    this.validatorZona.validar(zona);
    return this.prisma.zonaMuscular.delete({
      where: { id },
    });
  }
}
