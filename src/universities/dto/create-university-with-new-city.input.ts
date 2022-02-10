import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUniversityWithNewCityInput {
  @Field(() => String, { description: 'university name' })
  name: string;

  @Field(() => String, { description: 'city name' })
  cityName: string;

  @Field(() => Int, { description: 'state id' })
  stateId: number;
}
