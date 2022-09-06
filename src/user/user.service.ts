import { CACHE_MANAGER, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';
import { User } from './user.entity';
import jwt from 'jsonwebtoken'
import { UserRoles } from './user.roles';
import { Hote } from './entities/hote.entity';
import { Convive } from './entities/convive.entity';
import { Prestataire } from './entities/prestataire.entity';
import { CreateHoteInput, ResponseHote } from './dto/create-hote.input';
import { HttpQueryError } from 'apollo-server-core';
import { LogoutHote } from './dto/update-hote.input';

@Injectable()
export class UserService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager,
    @InjectRepository(Hote)
    private readonly hoterepository: Repository<Hote>,
    @InjectRepository(Convive)
    private conviverepository: Repository<Convive>,
    @InjectRepository(Prestataire)
    private prestatairerepository: Repository<Prestataire>,
    @InjectRepository(User)
    private userrepository: Repository<User>
  ) {}

  async loginhote(data: CreateHoteInput): Promise<ResponseHote>{
     const {name, telephone, password} = data
     const hote = await this.hoterepository.findOne({where: {name, telephone}})
     if(!hote || !await hote.comparepassword(password)){
      throw new HttpException('Invalid name/telephone/password', HttpStatus.BAD_REQUEST);
     }
     const hoteresponseobject= hote.toresponseobject();
     const {token} = hoteresponseobject
     await this.cacheManager.set(name, token, {ttl: process.env.JWT_EXPIRATION || 604800});
     return hoteresponseobject
  }

  async registerhote(data: CreateHoteInput): Promise<ResponseHote>{

    const {name, telephone} = data
    let hote= await this.hoterepository.findOne({where: {name, telephone}})
    if(hote){
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }
    hote = this.hoterepository.create(data)
    await this.hoterepository.save(hote)
    const hoteresponseobject = hote.toresponseobject();
    const {token} = hoteresponseobject;
    this.cacheManager.set(name, telephone, token, {ttl: process.env.JWT_EXPIRATION || 604800})

    const hoteindexdocument= {...hoteresponseobject}
    if(hoteindexdocument){
      delete hoteindexdocument.token
    }
    return hoteresponseobject;
  }

  logouthote(data: LogoutHote): void {
    const { from } = data;
    this.cacheManager.del(from);
}









  createToken({name, telephone}: User) {
    return jwt.sign({name, telephone }, 'secret');
  }

}