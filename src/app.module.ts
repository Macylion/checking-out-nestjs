import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { UserAuthenticationModule } from "./user-authentication/user-authentication.module";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entities/user.entity";

@Module({
  imports: [
    UserModule,
    UserAuthenticationModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "image-project",
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
