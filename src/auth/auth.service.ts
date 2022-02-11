import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  validateUser(username: string, password: string) {
    const user = this.usersService.findOne(username);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  login(loginInput: LoginInput) {
    const user = this.usersService.findOne(loginInput.username);
    const { password, ...result } = user;

    return {
      access_token: 'tneTNZkKPJUsMF60uSib',
      user: result,
    };
  }
}
