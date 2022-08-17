import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PrestataireService } from '../providers/prestataire.service';
import { Prestataire } from '../entities/prestataire.entity';
import { CreatePrestataireInput } from '../dto/create-prestataire.input';
import { UpdatePrestataireInput } from '../dto/update-prestataire.input';

@Resolver(() => Prestataire)
export class PrestataireResolver {
  constructor(private readonly prestataireService: PrestataireService) {}

  @Mutation(() => Prestataire)
  createPrestataire(@Args('createPrestataireInput') createPrestataireInput: CreatePrestataireInput) {
    return this.prestataireService.create(createPrestataireInput);
  }

  @Query(() => [Prestataire], { name: 'prestataire' })
  findAll() {
    return this.prestataireService.findAll();
  }

  @Query(() => Prestataire, { name: 'prestataire' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.prestataireService.findOne(id);
  }

  @Mutation(() => Prestataire)
  updatePrestataire(@Args('updatePrestataireInput') updatePrestataireInput: UpdatePrestataireInput) {
    return this.prestataireService.update(updatePrestataireInput.id, updatePrestataireInput);
  }

  @Mutation(() => Prestataire)
  removePrestataire(@Args('id', { type: () => Int }) id: number) {
    return this.prestataireService.remove(id);
  }
}
