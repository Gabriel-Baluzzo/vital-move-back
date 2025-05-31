import { IsOptional, IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoDto } from './create-video.dto';

export class FilterVideoDto extends PartialType(CreateVideoDto) {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  nivel_id?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  zona_muscular_id?: number;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
