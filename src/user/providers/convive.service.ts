import { Injectable } from '@nestjs/common';
import { CreateConviveInput } from '../dto/create-convive.input';
import { UpdateConviveInput } from '../dto/update-convive.input';

@Injectable()
export class ConviveService {
  create(createConviveInput: CreateConviveInput) {
    return 'This action adds a new convive';
  }

  findAll() {
    return `This action returns all convive`;
  }

  findOne(id: number) {
    return `This action returns a #${id} convive`;
  }

  update(id: number, updateConviveInput: UpdateConviveInput) {
    return `This action updates a #${id} convive`;
  }

  remove(id: number) {
    return `This action removes a #${id} convive`;
  }
}
