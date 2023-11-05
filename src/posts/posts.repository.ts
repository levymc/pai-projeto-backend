import { Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client';
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

  async updateImg(id: number, img: string) {
    return this.prisma.client.posts.update({
      where: { id },
      data: { img },
    });
  }

  async updateFixedPost(id: number) {
    const [_, updated] = await this.prisma.client.$transaction([
      this.prisma.client.posts.updateMany({
        where: {
          isFixedPost: true,
        },
        data: {
          isFixedPost: false,
        },
      }),
      this.prisma.client.posts.update({
        where: {
          id,
        },
        data: {
          isFixedPost: true,
        },
      }),
    ]);
    return updated;
  }

  async receiveAll() {
    return this.prisma.client.posts.findMany({});
  }

  async getLastSix() {
    const [notFixedPosts, fixedPost] = await this.prisma.client.$transaction([
      this.prisma.client.posts.findMany({
        where: {
          isFixedPost: false,
        },
        orderBy: {
          updatedAt: 'desc',
        },
        take: 9,
      }),
      this.prisma.client.posts.findFirst({
        where: {
          isFixedPost: true,
        },
      }),
    ]);
    return { notFixedPosts, fixedPost };
  }

  async getById(id: number) {
    return this.prisma.client.posts.findFirst({
      where: { id },
    });
  }
}
