/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCredencialDto } from './create-credencial.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateCredencialDto extends PartialType(CreateCredencialDto) {
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;
}
