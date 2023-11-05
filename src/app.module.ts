import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { SiteController } from './site/site.controller';
import { SiteService } from './site/site.service';
import { SiteModule } from './site/site.module';

@Module({
  imports: [PostsModule, UsersModule, SiteModule],
  controllers: [PostsController, UsersController, SiteController],
  providers: [AppService, UsersService, SiteService],
})
export class AppModule {}
