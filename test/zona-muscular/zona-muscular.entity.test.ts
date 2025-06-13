import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ZonaMuscular } from '../../src/zona-muscular/entities/zona-muscular.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { ZonaMuscular as ZonaM } from '@prisma/client';
import MockDate from 'mockdate';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

MockDate.set('2025-6-12');

describe('ZonaMuscular', () => {
  let entity: ZonaMuscular;
  let prisma: DeepMockProxy<PrismaService>;
  const zona1: ZonaM = {
    id: 1,
    nombre: 'Pecho',
    descripcion: 'Ejercicios para pecho',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    entity = new ZonaMuscular(prisma);
    prisma = mockDeep<PrismaService>();
    prisma.zonaMuscular.create.mockResolvedValue(zona1);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ZonaMuscular,
        {
          provide: PrismaService,
          useValue: prisma,
        },
      ],
    }).compile();

    entity = module.get<ZonaMuscular>(ZonaMuscular);
  });

  describe('create', () => {
    it('debería crear una zona muscular', async () => {
      const createSpy = jest.spyOn(prisma.zonaMuscular, 'create');
      const dto = { nombre: 'hombro', descripcion: 'Ejercicios para pecho' };
      const result = await entity.create(dto);
      expect(result).toEqual({
        id: 1,
        nombre: 'Pecho',
        descripcion: 'Ejercicios para pecho',
        createdAt: Date(),
        updatedAt: Date(),
      });
      expect(createSpy).toHaveBeenCalledWith({ data: dto });
    });
  });

  describe('findOrThrow', () => {
    it('debería devolver la zona muscular si existe', async () => {
      const createSpy = jest.spyOn(prisma.zonaMuscular, 'findUnique');

      prisma.zonaMuscular.findUnique.mockResolvedValue(zona1);

      const result = await entity.findOrThrow(1);
      expect(result).toEqual(zona1);
      expect(createSpy).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('debería lanzar NotFoundException si no existe', async () => {
      prisma.zonaMuscular.findUnique.mockResolvedValue(null);

      await expect(entity.findOrThrow(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findMany', () => {
    it('debería devolver un array de zonas musculares', async () => {
      const createSpy = jest.spyOn(prisma.zonaMuscular, 'findMany');
      const zonas: ZonaM[] = [zona1];

      prisma.zonaMuscular.findMany.mockResolvedValue(zonas);

      const result = await entity.findMany();
      expect(result).toEqual(zonas);
      expect(createSpy).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('debería actualizar una zona muscular existente', async () => {
      const createSpy = jest.spyOn(prisma.zonaMuscular, 'update');
      const id = 1;
      const dto = { nombre: 'Espalda', descripcion: 'Ejercicios para espalda' };
      const zonaActualizada: ZonaM = {
        id: 1,
        nombre: 'Espalda',
        descripcion: 'Parte frontal superior del torso',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prisma.zonaMuscular.findUnique.mockResolvedValue(zona1);
      prisma.zonaMuscular.update.mockResolvedValue(zonaActualizada);

      const result = await entity.update(id, dto);
      expect(result).toEqual(zonaActualizada);
      expect(createSpy).toHaveBeenCalledWith({
        where: { id },
        data: dto,
      });
    });
  });

  describe('delete', () => {
    it('debería eliminar una zona muscular existente', async () => {
      const createSpy = jest.spyOn(prisma.zonaMuscular, 'delete');
      const id = 1;

      prisma.zonaMuscular.findUnique.mockResolvedValue(zona1);
      prisma.zonaMuscular.delete.mockResolvedValue(zona1);

      const result = await entity.delete(id);
      expect(result).toEqual(zona1);
      expect(createSpy).toHaveBeenCalledWith({
        where: { id },
      });
    });
  });
});
