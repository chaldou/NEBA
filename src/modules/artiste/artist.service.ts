import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventToArtiste } from "src/entities/eventToartiste.entity";
import { Repository } from "typeorm";
import { Artiste } from "../../entities/artiste.entity";
import { CreateArtistInput } from "./dto/create-artiste.input";
import { UpdateArtistInput } from "./dto/update-artiste.input";



@Injectable()
export class ArtistService{

    constructor(
        @InjectRepository(Artiste)
        private artisterepository: Repository<Artiste>,
      ){
    }

    create(createArtistInput: CreateArtistInput) {
        return this.artisterepository.save(createArtistInput);
      }
    
    findAll(): Promise<Artiste[]> {
        return this.artisterepository.find();
      }
    
    findOne(name: string) {
        return  this.artisterepository.findOne({where: {name}});
      }
     
    update(id: number, updateArtistInput: UpdateArtistInput) {
        return this.artisterepository.update(id, updateArtistInput);
      }
    
    remove(id: number) {
        return this.artisterepository.delete(id);
      }

    async laodalbumtoartist(){
      return await this.artisterepository.find({
        relations: {
          album: true,
        },
    })
    }
    
}
