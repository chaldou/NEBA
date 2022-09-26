/* eslint-disable prettier/prettier */
import { Query, Resolver } from "@nestjs/graphql";
import { EventToArtiste } from "../../entities/eventToartiste.entity";
import { EventToArtisteservice } from "./eventToartiste.service";


@Resolver(() => EventToArtiste )
export class EventToArtisteResolver{

constructor(private readonly eventToartistservice: EventToArtisteservice){}

@Query(() => [EventToArtiste], { name: 'eventToartist' })
async laod(){
 return await this.eventToartistservice.laodrelation();
}
}