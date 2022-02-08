import { ObjectType, Field } from '@nestjs/graphql';
import { City } from './city.entity';

@ObjectType()
export class University {
  @Field(() => String, { description: 'Univeristy id' })
  id: string;

  @Field(() => String, { description: 'University name' })
  name: string;

  @Field(() => City, { description: 'City the university is in' })
  city: City;
}
