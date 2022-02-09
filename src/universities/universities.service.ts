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
    const state: State = new State();
    state.id = '1';
    state.name = 'Washington';
    const city: City = new City();
    city.id = '1';
    city.name = 'Seattle';
    city.state = state;

    const university: University = new University();
    university.id = '1';
    university.name = 'UW';

    university.city = city;

    return [university];
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
