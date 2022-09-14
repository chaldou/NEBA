import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestataire } from '../../entities/prestataire.entity';
import { Repository } from 'typeorm';
import { CreatePrestataireInput } from './dto/create-prestataire.input';
import { UpdatePrestataireInput } from './dto/update-prestataire.input';


@Injectable()
export class PrestataireService {
   
  constructor(  @InjectRepository(Prestataire)
  private prestataireRepository: Repository<Prestataire>){}

  create(createPrestataireInput: CreatePrestataireInput) {
    return this.prestataireRepository.create(createPrestataireInput);
  }

  findAll():Promise<Prestataire[]> {
    return this.prestataireRepository.find();
  }

  findOne(id: number) {
    return this.prestataireRepository.findOne({where: {id}});
  }

  update(id: number, updatePrestataireInput: UpdatePrestataireInput) {
    return this.prestataireRepository.update(id, updatePrestataireInput);
  }

  remove(id: number) {
    return this.prestataireRepository.delete(id);
  }

}
