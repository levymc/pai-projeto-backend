import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async handleCreatePost({ title, description }) {
    const extractedText = this.stripPostHtml(description);
    const img = this.takeImgTag(description);
    return this.postsRepository.create(title, description, extractedText, img);
  }

  async handleGetAll() {
    return this.postsRepository.getAll();
  }

  async handleGetOne(postId: number) {
    return this.postsRepository.getById(postId);
  }

  private stripPostHtml(post: string) {
    return post
      .replace(/<[^>]*>/g, '')
      .replace(/\n/g, '')
      .replace('&nbsp;', ' ');
  }
  private takeImgTag(post: string) {
    const imgTagMatch = post.match(/<img[^>]*src="([^"]*)"[^>]*>/);
    let imgSrc = null;
    if (imgTagMatch && imgTagMatch.length > 1) {
      imgSrc = imgTagMatch[1];
    }
    return imgSrc?.trim();
  }
}
