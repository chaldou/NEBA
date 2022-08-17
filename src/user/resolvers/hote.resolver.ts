import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HoteService } from '../providers/hote.service';
import { Hote } from '../entities/hote.entity';
import { CreateHoteInput } from '../dto/create-hote.input';
import { UpdateHoteInput } from '../dto/update-hote.input';

@Resolver(() => Hote)
export class HoteResolver {
  constructor(private readonly hoteService: HoteService) {}

  @Mutation(() => Hote)
  createHote(@Args('createHoteInput') createHoteInput: CreateHoteInput) {
    return this.hoteService.create(createHoteInput);
  }

  @Query(() => [Hote], { name: 'hote' })
  findAll() {
    return this.hoteService.findAll();
  }

  @Query(() => Hote, { name: 'hote' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hoteService.findOne(id);
  }

  @Mutation(() => Hote)
  updateHote(@Args('updateHoteInput') updateHoteInput: UpdateHoteInput) {
    return this.hoteService.update(updateHoteInput.id, updateHoteInput);
  }

  @Mutation(() => Hote)
  removeHote(@Args('id', { type: () => Int }) id: number) {
    return this.hoteService.remove(id);
  }
}
