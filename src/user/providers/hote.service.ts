import { Injectable } from '@nestjs/common';
import { CreateHoteInput } from '../dto/create-hote.input';
import { UpdateHoteInput } from '../dto/update-hote.input';

@Injectable()
export class HoteService {
  create(createHoteInput: CreateHoteInput) {
    return 'This action adds a new hote';
  }

  findAll() {
    return `This action returns all hote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hote`;
  }

  update(id: number, updateHoteInput: UpdateHoteInput) {
    return `This action updates a #${id} hote`;
  }

  remove(id: number) {
    return `This action removes a #${id} hote`;
  }
}
