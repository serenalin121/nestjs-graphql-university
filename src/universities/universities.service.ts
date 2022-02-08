import { Injectable } from '@nestjs/common';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Injectable()
export class UniversitiesService {
  create(createUniversityInput: CreateUniversityInput) {
    return 'This action adds a new university';
  }

  findAll() {
    return `This action returns all universities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} university`;
  }

  update(id: number, updateUniversityInput: UpdateUniversityInput) {
    return `This action updates a #${id} university`;
  }

  remove(id: number) {
    return `This action removes a #${id} university`;
  }
}
