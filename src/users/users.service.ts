import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { loginData } from 'src/protocols/types';
import { TokenGenerator, TokenBase } from 'ts-token-generator';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async handleSignIn(loginData: loginData) {
    const user = await this.checkUser(loginData);
    const token = this.generateToken();
    await this.usersRepository.createSessions(user.id, token);
    return {
      ...user,
      token: token,
    };
  }

  private async checkUser(loginData: loginData): Promise<User> {
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

  private generateToken(): string {
    const tokgen2 = new TokenGenerator({
      bitSize: 512,
      baseEncoding: TokenBase.BASE62,
    });
    return tokgen2.generate();
  }
}
