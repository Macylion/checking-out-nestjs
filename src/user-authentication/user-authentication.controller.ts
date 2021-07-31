import { Body, Controller, Post } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";
import { RegisterUserDTO } from "./dto/register.dto";
import { UserAuthenticationService } from "./user-authentication.service";

@Controller("auth")
export class UserAuthenticationController {
  constructor(
    private readonly userAuthenticationService: UserAuthenticationService
  ) {}

  @Post("register")
  async register(
    @Body() registerUserDTO: RegisterUserDTO
  ): Promise<User | { message: string }> {
    const user = await this.userAuthenticationService.createUser(
      registerUserDTO
    );
    return user;
  }
}
