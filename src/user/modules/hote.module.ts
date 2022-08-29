import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Convive } from "../entities/convive.entity";
import { Hote } from "../entities/hote.entity";
import { Prestataire } from "../entities/prestataire.entity";
import { ConviveService } from "../providers/convive.service";
import { HoteService } from "../providers/hote.service";
import { PrestataireService } from "../providers/prestataire.service";
import { HoteResolver } from "../resolvers/hote.resolver";
import { UserService } from "../user.service";
import { PrestataireModule } from "./prestataire.module";

@Module({
    providers: [HoteResolver, HoteService, PrestataireService, ConviveService],
    imports: [TypeOrmModule.forFeature([Hote]), TypeOrmModule.forFeature([Prestataire]), TypeOrmModule.forFeature([Convive])]
})

export class HoteModule{}