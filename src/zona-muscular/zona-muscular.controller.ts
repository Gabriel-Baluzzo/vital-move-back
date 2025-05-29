import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ZonaMuscularService } from './zona-muscular.service';
import { CreateZonaMuscularDto } from './dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from './dto/update-zona-muscular.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { Permission } from 'src/casl/decorators/permissions.decorator';
import { Action } from 'src/casl/interfaces/action.enum';

@Controller('zona-muscular')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class ZonaMuscularController {
  constructor(private readonly zonaMuscularService: ZonaMuscularService) {}

  @Post()
  @Permission(Action.Create, 'Zona_Muscular')
  create(@Body() createZonaMuscularDto: CreateZonaMuscularDto) {
    return this.zonaMuscularService.create(createZonaMuscularDto);
  }

  @Get()
  @Permission(Action.Read, 'Zona_Muscular')
  findAll() {
    return this.zonaMuscularService.findAll();
  }

  @Get(':id')
  @Permission(Action.Read, 'Zona_Muscular')
  findOne(@Param('id') id: number) {
    return this.zonaMuscularService.findOne(id);
  }

  @Patch(':id')
  @Permission(Action.Update, 'Zona_Muscular')
  update(
    @Param('id') id: number,
    @Body() updateZonaMuscularDto: UpdateZonaMuscularDto,
  ) {
    return this.zonaMuscularService.update(id, updateZonaMuscularDto);
  }

  @Delete(':id')
  @Permission(Action.Delete, 'Zona_Muscular')
  remove(@Param('id') id: number) {
    return this.zonaMuscularService.remove(id);
  }
}
