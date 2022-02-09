import { Injectable } from '@nestjs/common';
import { City } from 'src/universities/entities/city.entity';
import { State } from 'src/universities/entities/state.entity';
import { University } from 'src/universities/entities/university.entity';
import * as data from './universities.json';

@Injectable()
export class DataService {
  private universities: { [id: number]: University } = {};
  private states: { [id: number]: State } = {};
  private city: { [id: number]: City } = {};

  constructor() {
    data.universities.forEach((university) => {
      const newState = new State();
      newState.id = university.city.state.id;
      newState.name = university.city.state.name;
      this.states[newState.id] = newState;

      const newCity = new City();
      newCity.id = university.city.id;
      newCity.name = university.city.name;
      newCity.state = newState;
      this.city[newCity.id] = newCity;

      const newUniversity = new University();
      newUniversity.id = university.id;
      newUniversity.name = university.name;
      newUniversity.city = newCity;
      this.universities[newUniversity.id] = newUniversity;
    });
  }

  getUniversities() {
    return Object.values(this.universities);
  }

  getUniversityById(id) {
    return this.universities[id];
  }
}
