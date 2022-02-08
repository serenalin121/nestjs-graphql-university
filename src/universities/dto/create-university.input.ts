import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUniversityInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
