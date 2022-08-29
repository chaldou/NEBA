import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Convive } from "../entities/convive.entity";
import { Hote } from "../entities/hote.entity";
import { ConviveService } from "../providers/convive.service";
import { HoteService } from "../providers/hote.service";
import { ConviveResolver } from "../resolvers/convive.resolver";
import { UserService } from "../user.service";

@Module({
    providers: [ConviveResolver, ConviveService, HoteService ],
    imports: [TypeOrmModule.forFeature([Convive]), TypeOrmModule.forFeature([Hote])]
})

export class ConviveModule{}