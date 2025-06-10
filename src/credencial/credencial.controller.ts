import { Controller, Body, Patch, Param } from '@nestjs/common';
import { CredencialService } from './credencial.service';
import { UpdateCredencialDto } from './dto/update-credencial.dto';

@Controller('credencial')
export class CredencialController {
  constructor(private readonly credencialService: CredencialService) {}

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCredencialDto: UpdateCredencialDto,
  ) {
    return this.credencialService.update(+id, updateCredencialDto);
  }
}
