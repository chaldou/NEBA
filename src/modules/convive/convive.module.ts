import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Convive } from "../../entities/convive.entity";
import { Hote } from "../../entities/hote.entity";
import { ConviveService } from "./convive.service";
import { HoteService } from "../hote/hote.service";
import { ConviveResolver } from "./convive.resolver";
import { UserService } from "../user/user.service";

@Module({
    providers: [ConviveResolver, ConviveService, HoteService ],
    imports: [TypeOrmModule.forFeature([Convive]), TypeOrmModule.forFeature([Hote])]
})

export class ConviveModule{}