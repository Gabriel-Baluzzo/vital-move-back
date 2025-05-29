import { IsString } from 'class-validator';

export class CreateZonaMuscularDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;
}
