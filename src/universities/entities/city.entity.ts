// TODO: Move to its own entity if neneds to be managed
import { ObjectType, Field } from '@nestjs/graphql';
import { State } from './state.entity';

@ObjectType()
export class City {
  @Field(() => String, { description: 'City id' })
  id: string;

  @Field(() => String, { description: 'City name' })
  name: string;

  @Field(() => State, { description: 'State the city is in' })
  state: State;
}
