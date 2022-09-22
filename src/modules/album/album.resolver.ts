import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Album } from "src/entities/album.entity";
import { AlbumService } from "./album.service";
import { CreateAlbumInput } from "./dto/create-album.input";
import { UpdateAlbumInput } from "./dto/update-album.input";


@Resolver(() => Album)
export class AlbumRevolver{
constructor (private readonly albumservices: AlbumService){}

    @Mutation(() => Album)
    async createArtist(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
      return await this.albumservices.create(createAlbumInput);
    }
  
    @Mutation(() => Album)
    async updateArtist(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput, @Args('id') id: number) {
      return await this.albumservices.update(id, updateAlbumInput);
    }
  
    @Mutation(() => Album)
    async removeArtist(@Args('id', { type: () => Int }) id: number) {
      return await this.albumservices.remove(id);
    }

    @Query(() => [Album], { name: 'album' })
    async laod(){
     return await this.albumservices.laodalbumtoartist();
    }


}