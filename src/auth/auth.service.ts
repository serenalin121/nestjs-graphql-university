import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * check if user exists and if the password matches
   * @param username - user inputted username
   * @param password - user inputted password
   * @returns - user if user exists and password matches, null otherwise
   */
  validateUser(username: string, password: string) {
    const user = this.usersService.findOne(username);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * create access token for user (user should be authenicated already through login guard)
   * @param username - username
   * @returns - user with access token
   */
  createUserWithAccessToken(username: string) {
    const user = this.usersService.findOne(username);
    const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: result,
    };
  }
}
