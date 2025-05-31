import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { Permission } from 'src/casl/decorators/permissions.decorator';
import { Action } from 'src/casl/interfaces/action.enum';
import { FilterVideoDto } from './dto/filter-video.dto';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { JwtPayload } from 'src/auth/jwt/jwt.payload';

@Controller('video')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @Permission(Action.Create, 'Video')
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }

  @Get('all')
  @Permission(Action.Read, 'Video')
  findAll() {
    return this.videoService.findAll();
  }

  @Get()
  findQuery(@CurrentUser() user: JwtPayload, @Query() query: FilterVideoDto) {
    return this.videoService.findQuery(user.nivel_actual_id, query);
  }

  @Get(':id')
  @Permission(Action.Read, 'Video')
  findOne(@Param('id') id: number) {
    return this.videoService.findOne(id);
  }

  @Patch(':id')
  @Permission(Action.Update, 'Video')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  @Permission(Action.Delete, 'Video')
  remove(@Param('id') id: string) {
    return this.videoService.remove(+id);
  }
}
