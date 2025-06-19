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
import { VideoService } from '../../src/video/video.service';
import { JwtAuthGuard } from '../../src/auth/jwt/jwt.guard';
import { PoliciesGuard } from '../../src/casl/policies.guard';
import { Permission } from '../../src/casl/decorators/permissions.decorator';
import { Action } from '../casl/enum/action.enum';
import { CreateVideoDto } from '../../src/video/dto/create-video.dto';
import { UpdateVideoDto } from '../../src/video/dto/update-video.dto';
import { Video } from '@prisma/client';

/**
 * Controlador de videos para uso de admins.
 *
 * Permite realizar operaciones CRUD sobre los videos del sistema
 * con control de acceso basado en roles y permisos.
 *
 * Ruta base: `/admin/video`
 */
@Controller('admin/video')
@UseGuards(JwtAuthGuard, PoliciesGuard)
export class AdminVideoController {
  /**
   * Crea una nueva instancia del controlador.
   *
   * @param videoService Servicio encargado de manejar la lógica de negocio relacionada con videos.
   */
  constructor(private readonly videoService: VideoService) {}

  /**
   * Crea un nuevo video.
   *
   * @param createVideoDto Datos del video a crear.
   * @returns Video creado.
   */
  @Post()
  @Permission(Action.Create, 'Video')
  async create(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videoService.create(createVideoDto);
  }

  /**
   * Obtiene la lista completa de videos.
   *
   * @returns Lista de videos registrados.
   */
  @Get()
  @Permission(Action.Read, 'Video')
  async findAll(): Promise<Video[]> {
    return this.videoService.findAll();
  }

  /**
   * Obtiene un video por su ID.
   *
   * @param id Identificador único del video.
   * @returns Video correspondiente al ID proporcionado.
   */
  @Get(':id')
  @Permission(Action.Read, 'Video')
  async findOne(@Param('id') id: number): Promise<Video> {
    return this.videoService.findOne(id);
  }

  /**
   * Actualiza un video existente por su ID.
   *
   * @param id Identificador único del video.
   * @param updateVideoDto Datos actualizados del video.
   * @returns Video actualizado.
   */
  @Patch(':id')
  @Permission(Action.Update, 'Video')
  async update(
    @Param('id') id: number,
    @Body() updateVideoDto: UpdateVideoDto,
  ): Promise<Video> {
    return this.videoService.update(id, updateVideoDto);
  }

  /**
   * Elimina un video por su ID.
   *
   * @param id Identificador único del video.
   * @returns Video eliminado.
   */
  @Delete(':id')
  @Permission(Action.Delete, 'Video')
  async remove(@Param('id') id: number): Promise<Video> {
    return this.videoService.remove(id);
  }
}
