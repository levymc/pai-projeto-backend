import { Module } from '@nestjs/common';
import { PostsRepository } from './posts.repository';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/prismaConfig/prisma.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
  imports: [PrismaModule],
  exports: [PostsService, PostsRepository],
})
export class PostsModule {}
