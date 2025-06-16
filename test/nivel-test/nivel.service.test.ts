import { ZonaMuscular as ZonaM } from '@prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import { Nivel as NivelP } from '@prisma/client';
import { Nivel } from '../../src/nivel/entities/nivel.entity';
import { NivelService } from '../../src/nivel/nivel.service';
import { CreateNivelDto } from '../../src/nivel/dto/create-nivel.dto';
import { UpdateNivelDto } from '../../src/nivel/dto/update-nivel.dto';

describe('ZonaMuscularService', () => {
  let service: NivelService;
  let nivelMock: {
    create: jest.Mock;
    findOrThrow: jest.Mock;
    findMany: jest.Mock;
    update: jest.Mock;
    delete: jest.Mock;
  };

  beforeEach(async () => {
    nivelMock = {
      create: jest.fn(),
      findOrThrow: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NivelService,
        {
          provide: Nivel,
          useValue: nivelMock,
        },
      ],
    }).compile();

    service = module.get<NivelService>(NivelService);
  });

  it('should call create with the correct DTO', async () => {
    const dto: CreateNivelDto = {
      nombre: 'Principiante',
      numero_orden: 1,
    };
    const expected = {
      id: 1,
      nombre: 'Principiante',
      numero_orden: 1,
    } as NivelP;

    nivelMock.create.mockResolvedValue(expected);

    const result = await service.create(dto);
    expect(nivelMock.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual(expected);
  });

  it('should return all niveles', async () => {
    const zonas = [
      { id: 1, nombre: 'Principiante', numero_orden: 1 },
    ] as NivelP[];

    nivelMock.findMany.mockResolvedValue(zonas);

    const result = await service.findAll();
    expect(nivelMock.findMany).toHaveBeenCalled();
    expect(result).toEqual(zonas);
  });

  it('should return one nivel by id', async () => {
    const zona = { id: 1, nombre: 'Piernas' } as ZonaM;

    nivelMock.findOrThrow.mockResolvedValue(zona);

    const result = await service.findOne(1);
    expect(nivelMock.findOrThrow).toHaveBeenCalledWith(1);
    expect(result).toEqual(zona);
  });

  it('should update a nivel', async () => {
    const updateDto: UpdateNivelDto = {
      nombre: 'Principinte',
      numero_orden: 1,
    };
    const updated = {
      id: 1,
      nombre: 'Intermedio',
      numero_orden: 2,
    } as NivelP;

    nivelMock.update.mockResolvedValue(updated);

    const result = await service.update(1, updateDto);
    expect(nivelMock.update).toHaveBeenCalledWith(1, updateDto);
    expect(result).toEqual(updated);
  });

  it('should remove a nivel', async () => {
    const deleted = { id: 1, nombre: 'Principiante' } as NivelP;

    nivelMock.delete.mockResolvedValue(deleted);

    const result = await service.remove(1);
    expect(nivelMock.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual(deleted);
  });
});
