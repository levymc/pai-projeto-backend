import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaConfig/prisma.service';
import { loginData } from 'src/protocols/types';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async getUserByLoginAndPassword(loginData: loginData) {
    console.log(loginData);
    return this.prisma.client.user.findFirst({
      where: {
        login: loginData.login,
        password: loginData.password,
      },
    });
  }
}
