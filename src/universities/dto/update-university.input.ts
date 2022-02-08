import { CreateUniversityInput } from './create-university.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUniversityInput extends PartialType(CreateUniversityInput) {
  @Field(() => Int)
  id: number;
}
