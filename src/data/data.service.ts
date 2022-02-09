import { Injectable } from '@nestjs/common';
import * as data from './universities.json';

@Injectable()
export class DataService {
  constructor() {
    console.log(data);
  }
}
