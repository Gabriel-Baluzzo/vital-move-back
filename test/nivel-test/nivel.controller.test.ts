import { Test, TestingModule } from '@nestjs/testing';
import { CanActivate } from '@nestjs/common';
import { PoliciesGuard } from '../../src/casl/policies.guard';
import MockDate from 'mockdate';
import { NivelController } from '../../src/nivel/nivel.controller';
import { NivelService } from '../../src/nivel/nivel.service';
import { CreateNivelDto } from '../../src/nivel/dto/create-nivel.dto';
import { UpdateNivelDto } from '../../src/nivel/dto/update-nivel.dto';
import { Nivel } from '@prisma/client';

class MockPoliciesGuard implements CanActivate {
  canActivate() {
    return true;
  }
}
MockDate.set('2025-6-13');
describe('NivelController', () => {
  let controller: NivelController;
  let service: {
    create: jest.Mock;
    findAll: jest.Mock;
    findOne: jest.Mock;
    update: jest.Mock;
    remove: jest.Mock;
  };

  const nivelMock: Nivel = {
    id: 1,
    nombre: 'Principiante',
    numero_orden: 1,
  };

  beforeEach(async () => {
    service = {
      create: jest.fn().mockResolvedValue(nivelMock),
      findAll: jest.fn().mockResolvedValue([nivelMock]),
      findOne: jest.fn().mockResolvedValue(nivelMock),
      update: jest.fn().mockResolvedValue(nivelMock),
      remove: jest.fn().mockResolvedValue(nivelMock),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NivelController],
      providers: [
        {
          provide: NivelService,
          useValue: service,
        },
      ],
    })
      .overrideGuard(PoliciesGuard)
      .useClass(MockPoliciesGuard)
      .compile();

    controller = module.get<NivelController>(NivelController);
    service = module.get(NivelService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create and return result', async () => {
      const dto: CreateNivelDto = {
        nombre: 'Principiante',
        numero_orden: 1,
      };
      const result = await controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(nivelMock);
    });
  });

  describe('findAll', () => {
    it('should return an array of niveles', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([nivelMock]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single nivel', async () => {
      const result = await controller.findOne(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(nivelMock);
    });
  });

  describe('update', () => {
    it('should call service.update with correct params', async () => {
      const dto: UpdateNivelDto = {
        nombre: 'Intermedio',
        numero_orden: 2,
      };
      const result = await controller.update(1, dto);
      expect(service.update).toHaveBeenCalledWith(1, dto);
      expect(result).toEqual(nivelMock);
    });
  });

  describe('remove', () => {
    it('should call service.remove and return result', async () => {
      const result = await controller.remove(1);
      expect(service.remove).toHaveBeenCalledWith(1);
      expect(result).toEqual(nivelMock);
    });
  });
});
