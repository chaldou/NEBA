import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HoteService } from '../providers/hote.service';
import { Hote } from '../entities/hote.entity';
import { CreateHoteInput } from '../dto/create-hote.input';
import { UpdateHoteInput } from '../dto/update-hote.input';

@Resolver(() => Hote)
export class HoteResolver {
  constructor(private readonly hoteService: HoteService) {}

  @Mutation(() => Hote)
  async createHote(@Args('createHoteInput') createHoteInput: CreateHoteInput) {
    return await this.hoteService.create(createHoteInput);
  }

  @Query(() => [Hote], { name: 'hote' })
  async findAll() {
    return await this.hoteService.findAll();
  }

  @Query(() => Hote, { name: 'hote' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.hoteService.findOne(id);
  }

  @Mutation(() => Hote)
  async updateHote(@Args('updateHoteInput') updateHoteInput: UpdateHoteInput, @Args('id') id: number) {
    return await this.hoteService.update(id, updateHoteInput);
  }

  @Mutation(() => Hote)
  async removeHote(@Args('id', { type: () => Int }) id: number) {
    return await this.hoteService.remove(id);
  }
}
