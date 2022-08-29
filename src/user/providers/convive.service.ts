import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConviveInput } from '../dto/create-convive.input';
import { UpdateConviveInput } from '../dto/update-convive.input';
import { Convive } from '../entities/convive.entity';
import { Prestataire } from '../entities/prestataire.entity';

@Injectable()
export class ConviveService {
 
  constructor(@InjectRepository(Convive) private conviveRepository: Repository<Convive>){}

  create(createConviveInput: CreateConviveInput) {
    return this.conviveRepository.save(createConviveInput);
  }

  findAll():Promise<Convive[]> {
    return this.conviveRepository.find();
  }

  findOne(id: number) {
    return this.conviveRepository.findOne({where: {id}});
  }

  update(id: number, updateConviveInput: UpdateConviveInput) {
    return this.conviveRepository.update(id, updateConviveInput);
  }

  remove(id: number) {
    return this.conviveRepository.delete(id);
  }
}
