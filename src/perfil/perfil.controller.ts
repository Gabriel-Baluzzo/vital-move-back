import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { Permission } from 'src/casl/decorators/permissions.decorator';
import { Action } from 'src/casl/interfaces/action.enum';

@Controller('perfil')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  @Permission(Action.Read, 'Perfil')
  findAll() {
    return this.perfilService.findAll();
  }

  @Get(':id')
  @Permission(Action.Read, 'Perfil')
  findOne(@Param('id') id: string) {
    return this.perfilService.findOne(+id);
  }

  @Patch(':id')
  @Permission(Action.Update, 'Perfil')
  update(@Param('id') id: string, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(+id, updatePerfilDto);
  }

  @Delete(':id')
  @Permission(Action.Delete, 'Perfil')
  remove(@Param('id') id: string) {
    return this.perfilService.remove(+id);
  }
}
