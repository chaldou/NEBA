import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventToArtiste } from "../../entities/eventToartiste.entity";
import { Repository } from "typeorm";



@Injectable()
export class EventToArtisteservice{

    constructor(
        @InjectRepository(EventToArtiste)
        private eventToartisteRepository: Repository<EventToArtiste>){
    }

    async laodrelation(){
        return await this.eventToartisteRepository.find({ relations: {
            artisteid: true,
            eventid: true,
          }, 
        });
      }   

}