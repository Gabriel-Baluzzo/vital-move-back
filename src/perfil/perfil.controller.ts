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
import { JwtPayload } from 'src/auth/jwt/jwt.payload';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';

@Controller('perfil')
@UseGuards(JwtAuthGuard)
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  getProfile(@CurrentUser() user: JwtPayload) {
    return this.perfilService.findOne(user.userId);
  }

  @Patch()
  update(@CurrentUser() user: JwtPayload, @Body() data: UpdatePerfilDto) {
    return this.perfilService.update(user.userId, data);
  }

  @Delete()
  remove(@CurrentUser() user: JwtPayload) {
    return this.perfilService.remove(user.userId);
  }
}
