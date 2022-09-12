import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Prestataire } from "../../entities/prestataire.entity";
import { HoteModule } from "../hote/hote.module";
import { PrestataireResolver } from "./prestataire.resolver";
import { PrestataireService } from "./prestataire.service";


@Module({
    providers: [PrestataireResolver, PrestataireService],
    imports: [forwardRef(() => HoteModule),TypeOrmModule.forFeature([Prestataire])],
    exports: [PrestataireResolver, PrestataireService]
})

export class PrestataireModule{}
