import { Controller, Post, Body, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(@Body() postData: any) {
    // console.log(postData);
    const createdPost = await this.postsService.handleCreatePost(
      postData.content,
    );
    return {
      message: 'Post criado com sucesso!',
      createdPost,
    };
  }

  @Get()
  async receiveAll() {
    return await this.postsService.handleGetAll();
  }
}
