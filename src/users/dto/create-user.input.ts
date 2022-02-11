import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'user id' })
  id: number;

  @Field(() => String, { description: 'user name' })
  username: string;

  @Field(() => String, { description: 'user password' })
  password: string;
}
