import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Artiste } from "../../entities/artiste.entity";
import { ArtistService } from "./artist.service";
import { CreateArtistInput } from "./dto/create-artiste.input";
import { UpdateArtistInput } from "./dto/update-artiste.input";

@Resolver(() => Artiste)
export class ArtisteRevolver{
    constructor(private readonly artistService: ArtistService) {}

    @Mutation(() => Artiste)
    async createArtist(@Args('createHoteInput') createArtistInput: CreateArtistInput) {
      return await this.artistService.create(createArtistInput);
    }
  
    @Query(() => [Artiste], { name: 'artist' })
    async findAll() {
      return await this.artistService.findAll();
    }
  
    @Query(() => Artiste, { name: 'artist' })
    async findOne(@Args('id', { type: () => Int }) id: string) {
      return await this.artistService.findOne(id);
    }
  
    @Mutation(() => Artiste)
    async updateArtist(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput, @Args('id') id: number) {
      return await this.artistService.update(id, updateArtistInput);
    }
  
    @Mutation(() => Artiste)
    async removeArtist(@Args('id', { type: () => Int }) id: number) {
      return await this.artistService.remove(id);
    }
  
    @Query(() => [Artiste], { name: 'artist' })
    async laod(){
     return await this.artistService.laodalbumtoartist();
    }

}