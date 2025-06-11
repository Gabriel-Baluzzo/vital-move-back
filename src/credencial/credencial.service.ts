import { Injectable } from '@nestjs/common';
import { UpdateCredencialDto } from './dto/update-credencial.dto';
import { Credencial } from './entities/credencial.entity';

@Injectable()
export class CredencialService {
  constructor(private credencial: Credencial) {}

  async update(id: number, dto: UpdateCredencialDto) {
    return this.credencial.update(id, dto);
  }

  async findByEmail(email: string) {
    return this.credencial.findByEmail(email);
  }

  async create(email: string, password: string) {
    return this.credencial.create(email, password);
  }
}
