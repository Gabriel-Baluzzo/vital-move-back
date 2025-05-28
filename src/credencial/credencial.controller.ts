import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredencialService } from './credencial.service';
import { UpdateCredencialDto } from './dto/update-credencial.dto';

@Controller('credencial')
export class CredencialController {
  constructor(private readonly credencialService: CredencialService) {}

  @Get()
  findAll() {
    return this.credencialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credencialService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCredencialDto: UpdateCredencialDto,
  ) {
    return this.credencialService.update(+id, updateCredencialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credencialService.remove(+id);
  }
}
