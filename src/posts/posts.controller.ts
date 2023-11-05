import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { postData } from 'src/protocols/types';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(@Body() postData: postData) {
    // console.log(postData);
    const createdPost = await this.postsService.handleCreatePost(postData);
    return {
      message: 'Post criado com sucesso!',
      createdPost,
    };
  }

  @Get()
  async receiveAll() {
    return await this.postsService.handleGetAll();
  }

  @Get(':id')
  async receiveOne(@Param('id') id: string) {
    return await this.postsService.handleGetOne(Number(id));
  }
}
