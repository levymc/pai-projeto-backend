import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async handleCreatePost(post: string) {
    return this.postsRepository.create('teste1', post);
  }

  async handleGetAll() {
    return this.postsRepository.getAll();
  }
}
