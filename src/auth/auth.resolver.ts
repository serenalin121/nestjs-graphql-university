import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Login } from './dto/login';
import { LoginInput } from './dto/login.input';
import { LoginGuard } from './login.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Login)
  @UseGuards(LoginGuard)
  login(@Args('loginInput') loginInput: LoginInput) {
    // user is validated in LoginGuard, return user with a generated access token
    return this.authService.createUserWithAccessToken(loginInput.username);
  }
}
