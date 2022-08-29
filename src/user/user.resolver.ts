import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';
import { AuthGuard } from './auth/auth.guards';
import { Body, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserRoles } from './user.roles';
import { Hote } from './entities/hote.entity';
import { Convive } from './entities/convive.entity';
import { Prestataire } from './entities/prestataire.entity';
import { HoteService } from './providers/hote.service';
import { ConviveService } from './providers/convive.service';
import { PrestataireService } from './providers/prestataire.service';
import { CreateHoteInput } from './dto/create-hote.input';
import { Response } from 'express'
import { LogoutHote} from './dto/update-hote.input';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    ) {}

  @Query(() => Hote)
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
  }
  
}
