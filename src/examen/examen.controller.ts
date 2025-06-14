import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { CurrentUser } from 'src/auth/jwt/decorator/current-user.decorator';
import { JwtPayload } from 'src/auth/jwt/jwt.payload';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { Perfil } from '@prisma/client';

@Controller('examen')
@UseGuards(JwtAuthGuard)
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  @Get()
  async validacion(@CurrentUser() user: JwtPayload): Promise<void> {
    await this.examenService.validarTotal(user.userId);
  }

  @Post()
  async examen(
    @Body() resultado: ResultadoExamenDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<Perfil> {
    return this.examenService.update(user.userId, resultado);
  }
}
