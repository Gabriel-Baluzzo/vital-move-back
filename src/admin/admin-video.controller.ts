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
import { VideoService } from 'src/video/video.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { Permission } from 'src/casl/decorators/permissions.decorator';
import { Action } from 'src/casl/interfaces/action.enum';
import { CreateVideoDto } from 'src/video/dto/create-video.dto';
import { UpdateVideoDto } from 'src/video/dto/update-video.dto';

@Controller('admin/video')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class AdminVideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @Permission(Action.Create, 'Video')
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }

  @Get()
  @Permission(Action.Read, 'Video')
  findAll() {
    return this.videoService.findAll();
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
