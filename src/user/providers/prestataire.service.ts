import { Injectable } from '@nestjs/common';
import { CreatePrestataireInput } from '../dto/create-prestataire.input';
import { UpdatePrestataireInput } from '../dto/update-prestataire.input';

@Injectable()
export class PrestataireService {
  create(createPrestataireInput: CreatePrestataireInput) {
    return 'This action adds a new prestataire';
  }

  findAll() {
    return `This action returns all prestataire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestataire`;
  }

  update(id: number, updatePrestataireInput: UpdatePrestataireInput) {
    return `This action updates a #${id} prestataire`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestataire`;
  }
}
