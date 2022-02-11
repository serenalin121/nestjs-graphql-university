import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: { [username: string]: User } = {
    user1: {
      id: 1,
      username: 'user1',
      // TIDI: use bcrypt later
      password: 'password',
    },
    user2: {
      id: 2,
      username: 'user2',
      password: 'test',
    },
  };

  findOne(username: string) {
    return this.users[username];
  }
}
