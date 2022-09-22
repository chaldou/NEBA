import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Album } from "../../entities/album.entity";
import { ArtistModule } from "../artiste/artist.module";
import { AlbumRevolver } from "./album.resolver";
import { AlbumService } from "./album.service";

@Module({
    providers: [AlbumRevolver, AlbumService],
    imports: [ArtistModule,TypeOrmModule.forFeature([Album])],
    exports: [AlbumRevolver, AlbumService]
})
export class AlbumModule{}