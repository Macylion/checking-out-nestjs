import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class RegisterUserDTO {
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
