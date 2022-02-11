import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field(() => String, { description: 'user name' })
  username: string;

  @Field(() => String, { description: 'user password' })
  password: string;
}
