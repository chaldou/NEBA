import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventToConvive } from "../../entities/EventToConvive.entity";


@Injectable()
export class EventToConviveservice{

    constructor(
        @InjectRepository(EventToConvive)
        private eventToconviveRepository: Repository<EventToConvive>){
    }
   
    async laodrelation(){
        return await this.eventToconviveRepository.find({ relations: {
            convive: true,
            event: true,
          }, 
        });
      }    

}