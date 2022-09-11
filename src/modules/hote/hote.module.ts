import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Convive } from "src/entities/convive.entity";
import { Hote } from "src/entities/hote.entity";
import { Prestataire } from "src/entities/prestataire.entity";
import { ConviveService } from "../convive/convive.service";
import { PrestataireService } from "../prestataire/prestataire.service";
import { HoteResolver } from "./hote.resolver";
import { HoteService } from "./hote.service";


@Module({
    providers: [HoteResolver, HoteService, PrestataireService, ConviveService],
    imports: [TypeOrmModule.forFeature([Hote, Prestataire, Convive])]
})

export class HoteModule{}