import { IsEmail, IsString } from 'class-validator';

export class CreateCredencialDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
