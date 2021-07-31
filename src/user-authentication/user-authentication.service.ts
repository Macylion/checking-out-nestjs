import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/user/entities/user.entity";
import { RegisterUserDTO } from "./dto/register.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserAuthenticationService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async createUser(registerUserDto: RegisterUserDTO) {
    const user = new User();
    user.username = registerUserDto.username;
    user.email = registerUserDto.email;
    user.password = await bcrypt.hash(registerUserDto.password, 10);

    try {
      await this.usersRepository.save(user);
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return { message: "User already exists" };
      } else {
        return { message: "Something went wrong" };
      }
    }

    return user;
  }
}
