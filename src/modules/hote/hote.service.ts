import { Injectable } from '@nestjs/common';
import { InjectRepository,  } from '@nestjs/typeorm';
import { Hote } from '../../entities/hote.entity';
import { Repository } from 'typeorm';
import { CreateHoteInput } from './dto/create-hote.input';
import { UpdateHoteInput } from './dto/update-hote.input';

@Injectable()
export class HoteService {
  constructor(
    @InjectRepository(Hote)
    private hoteRepository: Repository<Hote>){

}
  
  create(createHoteInput: CreateHoteInput) {
    return this.hoteRepository.save(createHoteInput);
  }

  findAll(): Promise<Hote[]> {
    return this.hoteRepository.find();
  }

  findOne(id: number) {
    return  this.hoteRepository.findOne({where: {id}});
  }
 
  update(hoteid: number, updateHoteInput: UpdateHoteInput) {
    return this.hoteRepository.update(hoteid, updateHoteInput);
  }

  remove(hoteid: number) {
    return this.hoteRepository.delete(hoteid);
  }

  findbyhotename(name: string){
    return this.hoteRepository.findOne({where: {name}})
  }
}
