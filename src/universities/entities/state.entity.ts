// TODO: Move to its own entity if neneds to be managed
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class State {
  @Field(() => Int, { description: 'State id' })
  id: number;

  @Field(() => String, { description: 'State name' })
  name: string;
}
