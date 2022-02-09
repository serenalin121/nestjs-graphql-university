import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';
import { City } from './entities/city.entity';
import { State } from './entities/state.entity';
import { University } from './entities/university.entity';

@Injectable()
export class UniversitiesService {
  constructor(private dataService: DataService) {}

  create(createUniversityInput: CreateUniversityInput) {
    return 'This action adds a new university';
  }

  findAll() {
    return this.dataService.getUniversities();
  }

  findOne(id: number) {
    return this.dataService.getUniversityById(id);
  }

  update(id: number, updateUniversityInput: UpdateUniversityInput) {
    return `This action updates a #${id} university`;
  }

  remove(id: number) {
    return `This action removes a #${id} university`;
  }
}
