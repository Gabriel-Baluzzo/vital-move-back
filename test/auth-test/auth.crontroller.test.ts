/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../../src/auth/auth.controller';
import { AuthService } from '../../src/auth/auth.service';
import { AuthDto } from '../../src/auth/dto/auth.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let authServiceMock: jest.Mocked<AuthService>;

  beforeEach(async () => {
    authServiceMock = {
      register: jest.fn(),
      login: jest.fn(),
      generateToken: jest.fn(),
    } as unknown as jest.Mocked<AuthService>;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  describe('register', () => {
    it('debería registrar y devolver el access_token', async () => {
      const dto: AuthDto = { email: 'test@test.com', password: '123456' };
      const expected = { access_token: 'token' };

      authServiceMock.register.mockResolvedValueOnce(expected);

      const result = await controller.register(dto);

      expect(authServiceMock.register).toHaveBeenCalledWith(dto);
      expect(result).toEqual(expected);
    });
  });

  describe('login', () => {
    it('debería loguear y devolver el access_token', async () => {
      const dto: AuthDto = { email: 'test@test.com', password: '123456' };
      const expected = { access_token: 'token' };

      authServiceMock.login.mockResolvedValueOnce(expected);

      const result = await controller.login(dto);

      expect(authServiceMock.login).toHaveBeenCalledWith(dto);
      expect(result).toEqual(expected);
    });
  });
});
