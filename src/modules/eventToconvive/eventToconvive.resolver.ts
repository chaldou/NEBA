/* eslint-disable prettier/prettier */
import { Query, Resolver } from "@nestjs/graphql";
import { EventToConvive } from "../../entities/EventToConvive.entity";
import { EventToConviveservice } from "./eventToconvive.service";

@Resolver(() => EventToConvive )
export class EventToConviveResolver{
constructor(private readonly eventToconviveservice: EventToConviveservice){}

@Query(() => [EventToConvive], { name: 'eventToconvive' })
async laod(){
 return await this.eventToconviveservice.laodrelation();
}

}