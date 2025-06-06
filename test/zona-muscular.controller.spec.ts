import { Test, TestingModule } from '@nestjs/testing';
import { ZonaMuscularController } from './zona-muscular.controller';
import { ZonaMuscularService } from './zona-muscular.service';

describe('ZonaMuscularController', () => {
  let controller: ZonaMuscularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZonaMuscularController],
      providers: [ZonaMuscularService],
    }).compile();

    controller = module.get<ZonaMuscularController>(ZonaMuscularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
