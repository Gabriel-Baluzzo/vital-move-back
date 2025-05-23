import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePerfilDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsInt()
  edad?: number;

  @IsInt()
  nivel_actual_id: number;

  @IsInt()
  credencialesId: number;
}
