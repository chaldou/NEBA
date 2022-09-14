import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Convive } from "../../entities/convive.entity";
import { ConviveService } from "./convive.service";
import { ConviveResolver } from "./convive.resolver";
import { HoteModule } from "../hote/hote.module";



@Module({
    providers: [ConviveResolver, ConviveService],
    imports: [forwardRef(() => HoteModule),TypeOrmModule.forFeature([Convive])],
    exports: [ConviveResolver, ConviveService]
})

export class ConviveModule{}