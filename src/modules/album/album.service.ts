import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Album } from "src/entities/album.entity";
import { Repository } from "typeorm";
import { CreateAlbumInput } from "./dto/create-album.input";
import { UpdateAlbumInput } from "./dto/update-album.input";




@Injectable()
export class AlbumService{

    constructor(
        @InjectRepository(Album)
        private albumrepository: Repository<Album>){
    }

    create(createArtistInput: CreateAlbumInput) {
        return this.albumrepository.save(createArtistInput);
      }

    update(id: number, updateAlbumInput: UpdateAlbumInput) {
        return this.albumrepository.update(id, updateAlbumInput);
      }
    
    remove(id: number) {
        return this.albumrepository.delete(id);
      }

    async laodalbumtoartist(){
        return await this.albumrepository.find({
          relations: {
           artiste: true,
          },
      })
      }
   

    

}