/* eslint-disable prettier/prettier */
import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventToConvive } from "../../entities/EventToConvive.entity";
import { ConviveModule } from "../convive/convive.module";
import { EventsModule } from "../event/events.module";
import { EventToConviveResolver } from "./eventToconvive.resolver";
import { EventToConviveservice } from "./eventToconvive.service";

@Module({
    providers:[EventToConviveResolver, EventToConviveservice],
    imports: [EventsModule,ConviveModule,TypeOrmModule.forFeature([EventToConvive])],
    exports: [EventToConviveResolver, EventToConviveservice]
})
export class ArtistModule{}
export class EventToConviveModule{}