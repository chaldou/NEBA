import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hote } from "../../entities/hote.entity";
import { UserModule } from "../user/user.module";
import { HoteResolver } from "./hote.resolver";
import { HoteService } from "./hote.service";


@Module({
    providers: [HoteResolver, HoteService],
    imports: [TypeOrmModule.forFeature([Hote])],
    exports: [HoteResolver, HoteService]
})

export class HoteModule{}