import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hote } from "src/entities/hote.entity";
import { ConviveModule } from "../convive/convive.module";
import { PrestataireModule } from "../prestataire/prestataire.module";
import { HoteResolver } from "./hote.resolver";
import { HoteService } from "./hote.service";


@Module({
    providers: [HoteResolver, HoteService],
    imports: [forwardRef(() => PrestataireModule),forwardRef(() => ConviveModule),TypeOrmModule.forFeature([Hote])],
    exports: [HoteResolver, HoteService]
})

export class HoteModule{}