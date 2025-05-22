import { IsInt, IsString, Min } from 'class-validator';

export class CreateNivelDto {
  @IsString()
  nombre: string;

  @IsInt()
  @Min(1)
  numero_orden: number;
}
