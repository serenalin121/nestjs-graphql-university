// TODO: Move to its own entity if neneds to be managed
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class State {
  @Field(() => String, { description: 'State id' })
  id: string;

  @Field(() => String, { description: 'State name' })
  name: string;
}
