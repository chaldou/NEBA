import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Body, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    ) {}

    @Mutation(() => User)
    async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
      return this.userService.create(createUserInput);
    }
  
    @Query(() => [User], { name: 'user' })
    async findAll() {
      return await this.userService.findAll();
    }
  
    @Query(() => User, { name: 'user' })
    async findOne(@Args('id', { type: () => Int }) id: number) {
      return await this.userService.findOne(id);
    }
  
    @Mutation(() => User)
    async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput, @Args('id') id: number) {
      return await this.userService.update(id, updateUserInput);
    }
  
    @Mutation(() => User)
    async removeUser(@Args('id', { type: () => Int }) id: number) {
      return await this.userService.remove(id);
    }
  /*@Query(() => Hote)
  @UseGuards(new AuthGuard())
  me(@Context('hote') hote: Hote) {
    return hote;
  }

  @Mutation(() => Hote)
  @UsePipes(new ValidationPipe())
  async register(@Body() data: CreateHoteInput, @Res() res: Response): Promise<void> {
      const userResponseData = await this.userService.registerhote(data);
      res.set('Authorization', 'Bearer ' + userResponseData.token);
      res.send(userResponseData);
    }

  @Mutation(() => Hote)
  @UsePipes(new ValidationPipe())
    async login(@Body() data: CreateHoteInput, @Res() res: Response): Promise<void> {
        const userResponseData = await this.userService.loginhote(data);
        res.set('Authorization', 'Bearer ' + userResponseData.token);
        res.send(userResponseData);
  }

  @Mutation(() => Hote)
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  logoutt(@Body() data: LogoutHote):void {
      this.userService.logouthote(data);
  }*/
  
}
