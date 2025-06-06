import { Test, TestingModule } from '@nestjs/testing';
import { ZonaMuscularService } from './zona-muscular.service';

describe('ZonaMuscularService', () => {
  let service: ZonaMuscularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZonaMuscularService],
    }).compile();

    service = module.get<ZonaMuscularService>(ZonaMuscularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
