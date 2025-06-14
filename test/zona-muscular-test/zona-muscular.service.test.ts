import { ZonaMuscularService } from '../../src/zona-muscular/zona-muscular.service';
import { ZonaMuscular } from '../../src/zona-muscular/entities/zona-muscular.entity';
import { CreateZonaMuscularDto } from '../../src/zona-muscular/dto/create-zona-muscular.dto';
import { UpdateZonaMuscularDto } from '../../src/zona-muscular/dto/update-zona-muscular.dto';
import { ZonaMuscular as ZonaM } from '@prisma/client';
import { Test, TestingModule } from '@nestjs/testing';

describe('ZonaMuscularService', () => {
  let service: ZonaMuscularService;
  let zonaMock: {
    create: jest.Mock;
    findOrThrow: jest.Mock;
    findMany: jest.Mock;
    update: jest.Mock;
    delete: jest.Mock;
  };

  beforeEach(async () => {
    zonaMock = {
      create: jest.fn(),
      findOrThrow: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ZonaMuscularService,
        {
          provide: ZonaMuscular,
          useValue: zonaMock,
        },
      ],
    }).compile();

    service = module.get<ZonaMuscularService>(ZonaMuscularService);
  });

  it('should call create with the correct DTO', async () => {
    const dto: CreateZonaMuscularDto = {
      nombre: 'Pecho',
      descripcion: 'Ejercicios para pecho',
    };
    const expected = {
      id: 1,
      nombre: 'Pecho',
      descripcion: 'Ejercicios para pecho',
    } as ZonaM;

    zonaMock.create.mockResolvedValue(expected);

    const result = await service.create(dto);
    expect(zonaMock.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual(expected);
  });

  it('should return all zonas musculares', async () => {
    const zonas = [
      { id: 1, nombre: 'Espalda', descripcion: 'Ejercicios para espalda' },
    ] as ZonaM[];

    zonaMock.findMany.mockResolvedValue(zonas);

    const result = await service.findAll();
    expect(zonaMock.findMany).toHaveBeenCalled();
    expect(result).toEqual(zonas);
  });

  it('should return one zona muscular by id', async () => {
    const zona = { id: 1, nombre: 'Piernas' } as ZonaM;

    zonaMock.findOrThrow.mockResolvedValue(zona);

    const result = await service.findOne(1);
    expect(zonaMock.findOrThrow).toHaveBeenCalledWith(1);
    expect(result).toEqual(zona);
  });

  it('should update a zona muscular', async () => {
    const updateDto: UpdateZonaMuscularDto = {
      nombre: 'Hombros',
      descripcion: 'Ejercicios para hombros',
    };
    const updated = {
      id: 1,
      nombre: 'Pecho',
      descripcion: 'Ejercicios para hombros',
    } as ZonaM;

    zonaMock.update.mockResolvedValue(updated);

    const result = await service.update(1, updateDto);
    expect(zonaMock.update).toHaveBeenCalledWith(1, updateDto);
    expect(result).toEqual(updated);
  });

  it('should remove a zona muscular', async () => {
    const deleted = { id: 1, nombre: 'Cuádriceps' } as ZonaM;

    zonaMock.delete.mockResolvedValue(deleted);

    const result = await service.remove(1);
    expect(zonaMock.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual(deleted);
  });
});
