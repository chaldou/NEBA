import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Convive } from "../../entities/convive.entity";
import { ConviveService } from "./convive.service";
import { ConviveResolver } from "./convive.resolver";
import { UserModule } from "../user/user.module";
import { EventsModule } from "../event/events.module";



@Module({
    providers: [ConviveResolver, ConviveService],
    imports: [ UserModule,EventsModule,TypeOrmModule.forFeature([Convive])],
    exports: [ConviveResolver, ConviveService]
})

export class ConviveModule{}