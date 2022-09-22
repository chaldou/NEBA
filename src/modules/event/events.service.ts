import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "../../entities/events.entity";
import { Repository } from "typeorm";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";

@Injectable()
export class EventService{
    constructor(
        
            @InjectRepository(Event)
            private eventrepository: Repository<Event>
    )

    {}

    create(createEventInput: CreateEventInput) {
        return this.eventrepository.save(createEventInput);
      }
    
      findAll(): Promise<Event[]> {
        return this.eventrepository.find();
      }
    
      findOne(id: number) {
        return  this.eventrepository.findOne({where: {id}});
      }
     
      update(eventid: number, updateEventInput: UpdateEventInput) {
        return this.eventrepository.update(eventid,updateEventInput);
      }
    
      remove(eventid: number) {
        return this.eventrepository.delete(eventid);
      }
    
      findbyeventname(name: string){
        return this.eventrepository.findOne({where: {name}})
      }
    
}