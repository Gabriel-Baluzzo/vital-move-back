import { IsInt, IsString, Min } from 'class-validator';

export class CreateNivelDto {
  @IsString()
  nombre: string;

  @IsInt()
  @Min(0)
  numero_orden: number;
}
