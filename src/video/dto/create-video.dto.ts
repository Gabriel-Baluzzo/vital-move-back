import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsUrl()
  @IsNotEmpty()
  url_video: string;

  @IsUrl()
  @IsNotEmpty()
  url_miniatura: string;

  @IsInt()
  @IsNotEmpty()
  zona_muscular_id: number;

  @IsInt()
  @IsNotEmpty()
  nivel_id: number;
}
