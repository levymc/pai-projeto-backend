import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configs/prismaConfig/prisma.service';
import { loginData } from 'src/protocols/types';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async getUserByLoginAndPassword(loginData: loginData) {
    return this.prisma.client.user.findFirst({
      where: {
        login: loginData.login,
        password: loginData.password,
      },
    });
  }

  async createSessions(userId: number, token: string) {
    const [result] = await this.prisma.client.$transaction([
      this.prisma.client.sessions.updateMany({
        where: { userId },
        data: { isTokenValid: false },
      }),
      this.prisma.client.sessions.create({
        data: { userId, token, isTokenValid: true },
      }),
    ]);
    return result;
  }
}
