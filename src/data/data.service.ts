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
  private currentUniversityId = 0;

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

      // Store the maximum university id from json
      this.currentUniversityId = Math.max(
        this.currentUniversityId,
        university.id,
      );
    });
  }

  getUniversities() {
    return Object.values(this.universities);
  }

  getUniversityById(id: number) {
    return this.universities[id];
  }

  /**
   * creates a new univerisity using cityId
   * This assumes user is selecting from a list of cityId/cityName
   * TODO: consider adding an option for user to add university using cityName + stateId
   * @param name - name of university
   * @param cityId - cityId
   * @returns - new university
   */
  addUniversity(name: string, cityId: number) {
    const newUniversity = new University();
    newUniversity.name = name;
    this.currentUniversityId++;
    newUniversity.id = this.currentUniversityId;
    newUniversity.city = this.city[cityId];

    this.universities[newUniversity.id] = newUniversity;
    return newUniversity;
  }

  /**
   * update university's name
   * TODO: allow users to update univeristy's city and state?
   * @param id - id of the university to be updated
   * @param name - the new name of the university
   * @returns - updated university
   */
  updateUniversity(id: number, name: string) {
    this.universities[id].name = name;
    return this.universities[id];
  }
}
