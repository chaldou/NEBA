import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConviveService } from '../providers/convive.service';
import { Convive } from '../entities/convive.entity';
import { CreateConviveInput } from '../dto/create-convive.input';
import { UpdateConviveInput } from '../dto/update-convive.input';

@Resolver(() => Convive)
export class ConviveResolver {
  constructor(private readonly conviveService: ConviveService) {}

  @Mutation(() => Convive)
  createConvive(@Args('createConviveInput') createConviveInput: CreateConviveInput) {
    return this.conviveService.create(createConviveInput);
  }

  @Query(() => [Convive], { name: 'convive' })
  findAll() {
    return this.conviveService.findAll();
  }

  @Query(() => Convive, { name: 'convive' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.conviveService.findOne(id);
  }

  @Mutation(() => Convive)
  updateConvive(@Args('updateConviveInput') updateConviveInput: UpdateConviveInput) {
    return this.conviveService.update(updateConviveInput.id, updateConviveInput);
  }

  @Mutation(() => Convive)
  removeConvive(@Args('id', { type: () => Int }) id: number) {
    return this.conviveService.remove(id);
  }
}
