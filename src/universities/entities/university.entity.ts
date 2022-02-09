import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City } from './city.entity';

@ObjectType()
export class University {
  @Field(() => Int, { description: 'Univeristy id' })
  id: number;

  @Field(() => String, { description: 'University name' })
  name: string;

  @Field(() => City, { description: 'City the university is in' })
  city: City;
}
