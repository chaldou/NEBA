import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hote } from "../entities/hote.entity";
import { Prestataire } from "../entities/prestataire.entity";
import { HoteService } from "../providers/hote.service";
import { PrestataireService } from "../providers/prestataire.service";
import { PrestataireResolver } from "../resolvers/prestataire.resolver";
import { UserService } from "../user.service";
import { HoteModule } from "./hote.module";

@Module({
    providers: [PrestataireResolver, PrestataireService, HoteService],
    imports: [TypeOrmModule.forFeature([Prestataire]), TypeOrmModule.forFeature([Hote])]
})

export class PrestataireModule{}
