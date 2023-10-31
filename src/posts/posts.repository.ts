import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaConfig/prisma.service';

@Injectable()
export class PostsRepository {
  constructor(private prisma: PrismaService) {}

  async create(title: string, description: string) {
    return this.prisma.client.posts.create({
      data: {
        title,
        description,
      },
    });
  }

  async getAll() {
    return this.prisma.client.posts.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }
}
