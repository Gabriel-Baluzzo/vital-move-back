import { Controller } from '@nestjs/common';
import { CredencialService } from './credencial.service';

@Controller('credencial')
export class CredencialController {
  constructor(private readonly credencialService: CredencialService) {}
}
