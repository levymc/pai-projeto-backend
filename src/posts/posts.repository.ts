import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configs/prismaConfig/prisma.service';

@Injectable()
export class PostsRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    title: string,
    description: string,
    extractedText: string,
    img: string,
  ) {
    return this.prisma.client.posts.create({
      data: {
        title,
        description,
        extractedText,
        img,
      },
    });
  }

  async getAll() {
    return this.prisma.client.posts.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
      take: 6,
    });
  }
}
