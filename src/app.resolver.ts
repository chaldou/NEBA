import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AppService } from './app.service';
import { App } from './user/entities/app.entity';
import { CreateAppInput } from './create-app.input';
import { UpdateAppInput } from './update-app.input';

@Resolver(() => App)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Mutation(() => App)
  createApp(@Args('createAppInput') createAppInput: CreateAppInput) {
    return this.appService.create(createAppInput);
  }

  @Query(() => [App], { name: 'app' })
  findAll() {
    return this.appService.findAll();
  }

  @Query(() => App, { name: 'app' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.appService.findOne(id);
  }

  @Mutation(() => App)
  updateApp(@Args('updateAppInput') updateAppInput: UpdateAppInput) {
    return this.appService.update(updateAppInput.id, updateAppInput);
  }

  @Mutation(() => App)
  removeApp(@Args('id', { type: () => Int }) id: number) {
    return this.appService.remove(id);
  }
}
