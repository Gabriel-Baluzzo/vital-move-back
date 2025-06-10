import { Injectable } from '@nestjs/common';
import { UpdateCredencialDto } from './dto/update-credencial.dto';
import { Credencial } from './entities/credencial.entity';

@Injectable()
export class CredencialService {
  constructor(private credencial: Credencial) {}

  async update(id: number, dto: UpdateCredencialDto) {
    return this.credencial.update(id, dto);
  }
}
