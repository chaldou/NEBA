import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hote } from "src/entities/hote.entity";
import { Prestataire } from "../../entities/prestataire.entity";
import { HoteService } from "../hote/hote.service";
import { PrestataireResolver } from "./prestataire.resolver";
import { PrestataireService } from "./prestataire.service";


@Module({
    providers: [PrestataireResolver, PrestataireService, HoteService],
    imports: [TypeOrmModule.forFeature([Prestataire, Hote])]
})

export class PrestataireModule{}
