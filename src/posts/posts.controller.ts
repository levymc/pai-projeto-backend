import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { postData, postId, postUpdateImg } from 'src/protocols/types';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(@Body() postData: postData) {
    const createdPost = await this.postsService.handleCreatePost(postData);
    return {
      message: 'Post criado com sucesso!',
      createdPost,
    };
  }

  @Put()
  async updateImg(@Body() postUpdateImg: postUpdateImg) {
    console.log(postUpdateImg);
    return await this.postsService.handleUpdateImg(postUpdateImg);
  }

  @Put('/newFixedPost')
  async updateFixedPost(@Body() postId: postId) {
    return await this.postsService.handleUpdateFixedPost(postId);
  }

  @Get()
  async receiveLastSix() {
    return await this.postsService.handleGetLastSix();
  }

  @Get('/all')
  async receiveAll() {
    return await this.postsService.handleReceiveAll();
  }

  @Get(':id')
  async receiveOne(@Param('id') id: string) {
    return await this.postsService.handleGetOne(Number(id));
  }
}
