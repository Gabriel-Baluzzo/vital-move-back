import { Test, TestingModule } from '@nestjs/testing';
import { ZonaMuscularController } from '../../src/zona-muscular/zona-muscular.controller';
import { ZonaMuscularService } from '../../src/zona-muscular/zona-muscular.service';
import { CreateZonaMuscularDto } from '../../src/zona-muscular/dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from '../../src/zona-muscular/dto/update-zona-muscular.dto';
import { ZonaMuscular } from '@prisma/client';
import { CanActivate } from '@nestjs/common';
import { PoliciesGuard } from '../../src/casl/policies.guard';
import MockDate from 'mockdate';

class MockPoliciesGuard implements CanActivate {
  canActivate() {
    return true;
  }
}
MockDate.set('2025-6-13');
describe('ZonaMuscularController', () => {
  let controller: ZonaMuscularController;
  let service: {
    create: jest.Mock;
    findAll: jest.Mock;
    findOne: jest.Mock;
    update: jest.Mock;
    remove: jest.Mock;
  };

  const zonaMock: ZonaMuscular = {
    id: 1,
    nombre: 'Pecho',
    descripcion: 'Trabaja los pectorales',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    service = {
      create: jest.fn().mockResolvedValue(zonaMock),
      findAll: jest.fn().mockResolvedValue([zonaMock]),
      findOne: jest.fn().mockResolvedValue(zonaMock),
      update: jest.fn().mockResolvedValue(zonaMock),
      remove: jest.fn().mockResolvedValue(zonaMock),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZonaMuscularController],
      providers: [
        {
          provide: ZonaMuscularService,
          useValue: service,
        },
      ],
    })
      .overrideGuard(PoliciesGuard)
      .useClass(MockPoliciesGuard)
      .compile();

    controller = module.get<ZonaMuscularController>(ZonaMuscularController);
    service = module.get(ZonaMuscularService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create and return result', async () => {
      const dto: CreateZonaMuscularDto = {
        nombre: 'Espalda',
        descripcion: 'trabaja espalda',
      };
      const result = await controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(zonaMock);
    });
  });

  describe('findAll', () => {
    it('should return an array of zonas musculares', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([zonaMock]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single zona muscular', async () => {
      const result = await controller.findOne(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(zonaMock);
    });
  });

  describe('update', () => {
    it('should call service.update with correct params', async () => {
      const dto: UpdateZonaMuscularDto = {
        nombre: 'Hombros',
        descripcion: 'Trabaja hombros',
      };
      const result = await controller.update(1, dto);
      expect(service.update).toHaveBeenCalledWith(1, dto);
      expect(result).toEqual(zonaMock);
    });
  });

  describe('remove', () => {
    it('should call service.remove and return result', async () => {
      const result = await controller.remove(1);
      expect(service.remove).toHaveBeenCalledWith(1);
      expect(result).toEqual(zonaMock);
    });
  });
});
