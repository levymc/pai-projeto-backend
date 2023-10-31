import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { loginData } from 'src/protocols/types';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async handleSignIn(loginData: loginData) {
    const user =
      await this.usersRepository.getUserByLoginAndPassword(loginData);
    if (!user) {
      throw new HttpException(
        'Incorrect login or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return user;
  }
}
