import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { Permission } from 'src/casl/decorators/permissions.decorator';
import { Action } from 'src/casl/interfaces/action.enum';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { UpdatePerfilDto } from 'src/perfil/dto/update-perfil.dto';
import { PerfilService } from 'src/perfil/perfil.service';

@Controller('admin/perfil')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class AdminPerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  @Permission(Action.Read, 'Perfil')
  findAll() {
    return this.perfilService.findAll();
  }

  @Get(':id')
  @Permission(Action.Read, 'Perfil')
  findOne(@Param('id') id: number) {
    return this.perfilService.findOne(id);
  }

  @Patch(':id')
  @Permission(Action.Update, 'Perfil')
  update(@Param('id') id: number, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(id, updatePerfilDto);
  }

  @Delete(':id')
  @Permission(Action.Delete, 'Perfil')
  remove(@Param('id') id: number) {
    return this.perfilService.remove(id);
  }
}
