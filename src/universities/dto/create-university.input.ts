import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUniversityInput {
  @Field(() => String, { description: 'university name' })
  name: string;

  @Field(() => Int, { description: 'city id' })
  cityId: number;
}
