import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Artiste } from "../../entities/artiste.entity";
import { EventToArtistModule } from "../eventToartiste/eventToartist.module";
import { ArtisteRevolver } from "./artist.resolver";
import { ArtistService } from "./artist.service";

@Module({
    providers:[ArtisteRevolver, ArtistService],
    imports: [forwardRef(() => EventToArtistModule),TypeOrmModule.forFeature([Artiste])],
    exports: [ArtistService, ArtisteRevolver]
})
export class ArtistModule{}