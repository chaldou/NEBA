/* eslint-disable prettier/prettier */
import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventToArtiste } from "../../entities/eventToartiste.entity";
import { ArtistModule } from "../artiste/artist.module";
import { EventsModule } from "../event/events.module";
import { EventToArtisteResolver } from "./eventToartiste.resolver";
import { EventToArtisteservice } from "./eventToartiste.service";

@Module({
    providers:[EventToArtisteservice, EventToArtisteResolver],
    imports: [EventsModule,ArtistModule,TypeOrmModule.forFeature([EventToArtiste])],
    exports: [EventToArtisteResolver, EventToArtisteservice]
})

export class EventToArtistModule{}
