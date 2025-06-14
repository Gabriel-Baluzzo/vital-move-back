/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { VideoService } from '../../src/video/video.service';
import { Video } from '../../src/video/entities/video.entity';
import { CreateVideoDto } from '../../src/video/dto/create-video.dto';
import { UpdateVideoDto } from '../../src/video/dto/update-video.dto';
import { FilterVideoDto } from '../../src/video/dto/filter-video.dto';
import { Video as VideoP } from '@prisma/client';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

const createMockVideo = (overrides: Partial<VideoP> = {}): VideoP => ({
  id: 1,
  nombre: 'Video de prueba',
  descripcion: 'Descripción de prueba',
  url_video: 'https://example.com/video.mp4',
  url_miniatura: 'https://example.com/video.mp4',
  nivel_id: 1,
  zona_muscular_id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overrides,
});

describe('VideoService', () => {
  let service: VideoService;
  let videoMock: DeepMockProxy<Video>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VideoService,
        {
          provide: Video,
          useValue: mockDeep<Video>(),
        },
      ],
    }).compile();

    service = module.get<VideoService>(VideoService);
    videoMock = module.get(Video);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('debería crear un video exitosamente', async () => {
      const dto: CreateVideoDto = {
        nombre: 'Nuevo Video',
        descripcion: 'Descripción del video',
        url_video: 'https://nuevo-video.com',
        url_miniatura: 'https://nuevo-video.com',
        nivel_id: 2,
        zona_muscular_id: 3,
      };

      const expectedVideo = createMockVideo(dto);

      videoMock.create.mockResolvedValue(expectedVideo);

      const result = await service.create(dto);

      expect(result).toEqual(expectedVideo);
      expect(videoMock.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findQuery', () => {
    it('debería retornar videos filtrados', async () => {
      const nivelUsuario = 3;
      const query: FilterVideoDto = { nivel_id: 2, zona_muscular_id: 5 };
      const expectedVideos = [
        createMockVideo({ id: 1, nivel_id: 2, zona_muscular_id: 5 }),
        createMockVideo({ id: 2, nivel_id: 2, zona_muscular_id: 5 }),
      ];

      videoMock.findQuery.mockResolvedValue(expectedVideos);

      const result = await service.findQuery(nivelUsuario, query);

      expect(result).toEqual(expectedVideos);
      expect(videoMock.findQuery).toHaveBeenCalledWith(nivelUsuario, query);
    });

    it('debería propagar errores de validación', async () => {
      const nivelUsuario = 2;
      const query: FilterVideoDto = { nivel_id: 3 };

      videoMock.findQuery.mockRejectedValue(
        new BadRequestException('No alcanzaste esta dificultad.'),
      );

      await expect(service.findQuery(nivelUsuario, query)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('findAll', () => {
    it('debería retornar todos los videos', async () => {
      const expectedVideos = [
        createMockVideo({ id: 1 }),
        createMockVideo({ id: 2 }),
      ];

      videoMock.findMany.mockResolvedValue(expectedVideos);

      const result = await service.findAll();

      expect(result).toEqual(expectedVideos);
      expect(videoMock.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('debería retornar un video existente', async () => {
      const videoId = 1;
      const expectedVideo = createMockVideo({ id: videoId });

      videoMock.findOrThrow.mockResolvedValue(expectedVideo);

      const result = await service.findOne(videoId);

      expect(result).toEqual(expectedVideo);
      expect(videoMock.findOrThrow).toHaveBeenCalledWith(videoId);
    });

    it('debería lanzar NotFoundException para video inexistente', async () => {
      const videoId = 999;

      videoMock.findOrThrow.mockRejectedValue(
        new NotFoundException(`Video con id ${videoId} no encontrado`),
      );

      await expect(service.findOne(videoId)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('debería actualizar un video existente', async () => {
      const videoId = 1;
      const updateDto: UpdateVideoDto = { nombre: 'Video Actualizado' };
      const updatedVideo = createMockVideo({
        id: videoId,
        nombre: 'Video Actualizado',
      });

      videoMock.update.mockResolvedValue(updatedVideo);

      const result = await service.update(videoId, updateDto);

      expect(result).toEqual(updatedVideo);
      expect(videoMock.update).toHaveBeenCalledWith(videoId, updateDto);
    });

    it('debería manejar actualización con nuevos IDs', async () => {
      const videoId = 1;
      const updateDto: UpdateVideoDto = {
        nivel_id: 3,
        zona_muscular_id: 4,
      };
      const updatedVideo = createMockVideo(updateDto);

      videoMock.update.mockResolvedValue(updatedVideo);

      const result = await service.update(videoId, updateDto);

      expect(result).toEqual(updatedVideo);
      expect(videoMock.update).toHaveBeenCalledWith(videoId, updateDto);
    });
  });

  describe('remove', () => {
    it('debería eliminar un video existente', async () => {
      const videoId = 1;
      const deletedVideo = createMockVideo({ id: videoId });

      videoMock.delete.mockResolvedValue(deletedVideo);

      const result = await service.remove(videoId);

      expect(result).toEqual(deletedVideo);
      expect(videoMock.delete).toHaveBeenCalledWith(videoId);
    });

    it('debería lanzar NotFoundException al intentar eliminar video inexistente', async () => {
      const videoId = 999;

      videoMock.delete.mockRejectedValue(
        new NotFoundException(`Video con id ${videoId} no encontrado`),
      );

      await expect(service.remove(videoId)).rejects.toThrow(NotFoundException);
    });
  });
});
