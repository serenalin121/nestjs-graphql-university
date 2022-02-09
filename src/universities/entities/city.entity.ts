// TODO: Move to its own entity if neneds to be managed
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { State } from './state.entity';

@ObjectType()
export class City {
  @Field(() => Int, { description: 'City id' })
  id: number;

  @Field(() => String, { description: 'City name' })
  name: string;

  @Field(() => State, { description: 'State the city is in' })
  state: State;
}
