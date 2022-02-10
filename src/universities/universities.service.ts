import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service';
import { CreateUniversityWithNewCityInput } from './dto/create-university-with-new-city.input';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Injectable()
export class UniversitiesService {
  constructor(private dataService: DataService) {}

  create(createUniversityInput: CreateUniversityInput) {
    return this.dataService.addUniversity(
      createUniversityInput.name,
      createUniversityInput.cityId,
    );
  }

  createWithNewCity(
    createUniversityWithNewCityInput: CreateUniversityWithNewCityInput,
  ) {
    return this.dataService.addUniversityWithCityName(
      createUniversityWithNewCityInput.name,
      createUniversityWithNewCityInput.cityName,
      createUniversityWithNewCityInput.stateId,
    );
  }

  findAll() {
    return this.dataService.getUniversities();
  }

  findOne(id: number) {
    return this.dataService.getUniversityById(id);
  }

  update(id: number, updateUniversityInput: UpdateUniversityInput) {
    return this.dataService.updateUniversity(
      updateUniversityInput.id,
      updateUniversityInput.name,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} university`;
  }
}
