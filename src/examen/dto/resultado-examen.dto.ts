import { IsInt, Max, Min } from 'class-validator';

export class ResultadoExamenDto {
  @IsInt()
  @Min(0)
  @Max(12)
  puntos: number;
}
