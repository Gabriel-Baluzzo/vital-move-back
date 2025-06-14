/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { Video } from '../../src/video/entities/video.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { ZonaMuscularService } from '../../src/zona-muscular/zona-muscular.service';
import { NivelService } from '../../src/nivel/nivel.service';
import { FilterVideoDto } from '../../src/video/dto/filter-video.dto';
import { UpdateVideoDto } from '../../src/video/dto/update-video.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import { Video as VideoP } from '@prisma/client';

describe('Video', () => {
  let video: Video;
  let prismaMock: DeepMockProxy<PrismaService>;
  let zonaServiceMock: DeepMockProxy<ZonaMuscularService>;
  let nivelServiceMock: DeepMockProxy<NivelService>;
  const mockVideo: VideoP = {
    id: 1,
    nombre: 'Video Test',
    descripcion: 'Descripción',
    url_video: 'http://test.com',
    url_miniatura: 'http://test.com',
    zona_muscular_id: 1,
    nivel_id: 1,
    createdAt: new Date('2025-06-12'),
    updatedAt: new Date('2025-06-12'),
  };

  beforeEach(async () => {
    prismaMock = mockDeep<PrismaService>();
    zonaServiceMock = mockDeep<ZonaMuscularService>();
    nivelServiceMock = mockDeep<NivelService>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Video,
        { provide: PrismaService, useValue: prismaMock },
        { provide: ZonaMuscularService, useValue: zonaServiceMock },
        { provide: NivelService, useValue: nivelServiceMock },
      ],
    }).compile();

    video = module.get<Video>(Video);
  });

  afterEach(() => {
    mockReset(prismaMock);
  });

  describe('create', () => {
    it('debería crear un video exitosamente', async () => {
      zonaServiceMock.findOne.mockResolvedValue(undefined as never);
      nivelServiceMock.findOne.mockResolvedValueOnce(undefined as never);
      prismaMock.video.create.mockResolvedValueOnce(mockVideo);
      const id = 1;

      const result = await video.create(mockVideo);
      expect(result).toEqual(mockVideo);
      expect(zonaServiceMock.findOne).toHaveBeenCalledWith(id);
      expect(nivelServiceMock.findOne).toHaveBeenCalledWith(id);
    });

    it('debería fallar si zona_muscular no existe', async () => {
      zonaServiceMock.findOne.mockRejectedValueOnce(new NotFoundException());

      await expect(video.create(mockVideo)).rejects.toThrow(NotFoundException);
      expect(prismaMock.video.create).not.toHaveBeenCalled();
    });
  });

  describe('findQuery', () => {
    it('debería filtrar videos con nivel_id permitido', async () => {
      const nivelUsuario = 3;
      const query: FilterVideoDto = { nivel_id: 2 };
      const expectedVideos = [mockVideo];

      prismaMock.video.findMany.mockResolvedValueOnce(expectedVideos);

      const result = await video.findQuery(nivelUsuario, query);
      expect(result).toEqual(expectedVideos);
      expect(prismaMock.video.findMany).toHaveBeenCalledWith({
        where: { nivel_id: { equals: 2 } },
      });
    });

    it('debería fallar si nivel_id es mayor que nivelUsuario', async () => {
      const nivelUsuario = 2;
      const query: FilterVideoDto = { nivel_id: 3 };

      await expect(video.findQuery(nivelUsuario, query)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('debería aplicar múltiples filtros correctamente', async () => {
      const nivelUsuario = 3;
      const query: FilterVideoDto = {
        nivel_id: 2,
        zona_muscular_id: 5,
        nombre: 'test',
        descripcion: 'desc',
      };

      const expectedWhere = {
        nivel_id: { equals: 2 },
        zona_muscular_id: 5,
        nombre: { contains: 'test', mode: 'insensitive' },
        descripcion: { contains: 'desc', mode: 'insensitive' },
      };

      prismaMock.video.findMany.mockResolvedValueOnce([]);

      await video.findQuery(nivelUsuario, query);
      expect(prismaMock.video.findMany).toHaveBeenCalledWith({
        where: expectedWhere,
      });
    });
  });

  describe('findMany', () => {
    it('debería retornar todos los videos', async () => {
      const expectedVideos = [mockVideo];
      prismaMock.video.findMany.mockResolvedValueOnce(expectedVideos);

      const result = await video.findMany();
      expect(result).toEqual(expectedVideos);
    });
  });

  describe('findOrThrow', () => {
    it('debería retornar video si existe', async () => {
      prismaMock.video.findUnique.mockResolvedValueOnce(mockVideo);

      const result = await video.findOrThrow(1);
      expect(result).toEqual(mockVideo);
    });

    it('debería lanzar excepción si video no existe', async () => {
      prismaMock.video.findUnique.mockResolvedValueOnce(null);

      await expect(video.findOrThrow(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    beforeEach(() => {
      prismaMock.video.findUnique.mockResolvedValueOnce(mockVideo);
    });

    it('debería actualizar video exitosamente', async () => {
      const updateDto = { nombre: 'Nuevo Nombre' };
      const updatedVideo = { ...mockVideo, ...updateDto };

      prismaMock.video.update.mockResolvedValueOnce(updatedVideo);

      const result = await video.update(1, updateDto);
      expect(result).toEqual(updatedVideo);
      expect(prismaMock.video.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });

    it('debería validar nuevo nivel_id si se provee', async () => {
      const updateDto: UpdateVideoDto = { nivel_id: 2 };
      nivelServiceMock.findOne.mockResolvedValueOnce(undefined as never);
      prismaMock.video.update.mockResolvedValueOnce(undefined as never);

      await video.update(1, updateDto);
      expect(nivelServiceMock.findOne).toHaveBeenCalledWith(2);
    });

    it('debería validar nueva zona_muscular si se provee', async () => {
      const updateDto: UpdateVideoDto = { zona_muscular_id: 3 };
      zonaServiceMock.findOne.mockResolvedValueOnce(undefined as never);
      prismaMock.video.update.mockResolvedValueOnce(undefined as never);

      await video.update(1, updateDto);
      expect(zonaServiceMock.findOne).toHaveBeenCalledWith(3);
    });
  });

  describe('delete', () => {
    it('debería eliminar video exitosamente', async () => {
      prismaMock.video.findUnique.mockResolvedValueOnce(mockVideo);
      prismaMock.video.delete.mockResolvedValueOnce(mockVideo);

      const result = await video.delete(1);
      expect(result).toEqual(mockVideo);
    });

    it('debería lanzar excepción si video no existe', async () => {
      prismaMock.video.findUnique.mockResolvedValueOnce(null);

      await expect(video.delete(999)).rejects.toThrow(NotFoundException);
    });
  });
});
