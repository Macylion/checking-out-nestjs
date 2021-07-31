import { Module } from "@nestjs/common";
import { UserAuthenticationService } from "./user-authentication.service";
import { UserAuthenticationController } from "./user-authentication.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserAuthenticationController],
  providers: [UserAuthenticationService],
})
export class UserAuthenticationModule {}
