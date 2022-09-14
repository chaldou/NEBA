import { CACHE_MANAGER, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import jwt from 'jsonwebtoken'
import { User } from '../../entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';



@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userrepository: Repository<User>
  ) {}

  create(createuserInput: CreateUserInput) {
    return this.userrepository.create(createuserInput)
  }

  findAll():Promise<User[]> {
    return this.userrepository.find();
  }

  findOne(id: number) {
    return this.userrepository.findOne({where: {id}});
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.userrepository.update(id, updateUserInput);
  }

  findByTelephone(telephone: string) {
    return this.userrepository.findOne({ where: { telephone } });
  }

  remove(id: number) {
    return this.userrepository.delete(id);
  }

}