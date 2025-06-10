import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ResultadoExamenDto } from './dto/resultado-examen.dto';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { JwtPayload } from 'src/auth/jwt/jwt.payload';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('examen')
@UseGuards(JwtAuthGuard)
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  @Post()
  examen(
    @Body() resultado: ResultadoExamenDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.examenService.update(user.userId, resultado);
  }
}
