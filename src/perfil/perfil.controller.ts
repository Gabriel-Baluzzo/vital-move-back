import {
  Controller,
  Get,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { Permission } from 'src/casl/decorators/permissions.decorator';
import { Action } from 'src/casl/interfaces/action.enum';
import { JwtPayload } from 'src/auth/jwt/jwt.payload';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';

@Controller('perfil')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  @Permission(Action.Read, 'Perfil')
  findAll() {
    return this.perfilService.findAll();
  }

  @Get('me')
  getProfile(@CurrentUser() user: JwtPayload) {
    return this.perfilService.findOne(user.sub);
  }

  @Patch('me')
  update(@CurrentUser() user: JwtPayload, @Body() data: UpdatePerfilDto) {
    return this.perfilService.update(user.sub, data);
  }

  @Delete('me')
  remove(@CurrentUser() user: JwtPayload) {
    return this.perfilService.remove(user.sub);
  }
}
