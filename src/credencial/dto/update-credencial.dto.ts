import { PartialType } from '@nestjs/mapped-types';
import { CreateCredencialDto } from './create-credencial.dto';
import { IsEmail, IsString } from 'class-validator';

export class UpdateCredencialDto extends PartialType(CreateCredencialDto) {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
