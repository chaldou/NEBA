import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PrestataireService } from '../providers/prestataire.service';
import { Prestataire } from '../entities/prestataire.entity';
import { CreatePrestataireInput } from '../dto/create-prestataire.input';
import { UpdatePrestataireInput } from '../dto/update-prestataire.input';

@Resolver(() => Prestataire)
export class PrestataireResolver {
  constructor(private readonly prestataireService: PrestataireService) {}

  @Mutation(() => Prestataire)
  async createPrestataire(@Args('createPrestataireInput') createPrestataireInput: CreatePrestataireInput) {
    return this.prestataireService.create(createPrestataireInput);
  }

  @Query(() => [Prestataire], { name: 'prestataire' })
  async findAll() {
    return await this.prestataireService.findAll();
  }

  @Query(() => Prestataire, { name: 'prestataire' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.prestataireService.findOne(id);
  }

  @Mutation(() => Prestataire)
  async updatePrestataire(@Args('updatePrestataireInput') updatePrestataireInput: UpdatePrestataireInput, @Args('id') id: number) {
    return await this.prestataireService.update(id, updatePrestataireInput);
  }

  @Mutation(() => Prestataire)
  async removePrestataire(@Args('id', { type: () => Int }) id: number) {
    return await this.prestataireService.remove(id);
  }
}
