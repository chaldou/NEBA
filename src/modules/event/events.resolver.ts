import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Event } from "../../entities/events.entity";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";
import { EventService } from "./events.service";

@Resolver(() => Event)
export class EventResolver{
    constructor(private readonly eventservice: EventService){}

    @Mutation(() => Event)
  async createEvent(@Args('createHoteInput') createEventInput: CreateEventInput) {
    return await this.eventservice.create(createEventInput);
  }

  @Query(() => [Event], { name: 'event' })
  async findAll() {
    return await this.eventservice.findAll();
  }

  @Query(() => Event, { name: 'event' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.eventservice.findOne(id);
  }

  @Mutation(() => Event)
  async updateEvent(@Args('updateHoteInput') updateHoteInput: UpdateEventInput, @Args('id') id: number) {
    return await this.eventservice.update(id, updateHoteInput);
  }

  @Mutation(() => Event)
  async removeEvent(@Args('id', { type: () => Int }) id: number) {
    return await this.eventservice.remove(id);
  }
}
