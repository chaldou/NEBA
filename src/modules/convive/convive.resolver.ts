import { Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import { Convive } from '../../entities/convive.entity';
import { ConviveService } from './convive.service';
import { CreateConviveInput } from './dto/create-convive.input';
import { UpdateConviveInput } from './dto/update-convive.input';
import { User} from '../../entities/user.entity';



@Resolver(() => Convive)
export class ConviveResolver {
  constructor(private readonly conviveService: ConviveService) {}

  @Mutation(() => Convive)
  async createConvive( @Args('createConviveInput') createConviveInput: CreateConviveInput) {
    return await this.conviveService.create(createConviveInput);
  }

  @Query(() => [Convive], { name: 'convive' })
  async findAll() {
    return await this.conviveService.findAll();
  } 

  @Query(() => Convive, { name: 'convive' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
        return  await this.conviveService.findOne(id);
  }

  @Mutation(() => Convive)
  async updateConvive(@Args('updateConviveInput') updateConviveInput: UpdateConviveInput, @Args('id') id: number) {
    return  await this.conviveService.update(id, updateConviveInput);
  }
  
  @Mutation(() => Convive)
  async removeConvive(@Args('id', { type: () => Int }) id: number) {
    return  await this.conviveService.remove(id);
  }
}