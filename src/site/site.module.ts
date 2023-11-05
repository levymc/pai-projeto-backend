import { Module } from '@nestjs/common';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { SiteConfigRepository } from './site.repository';
import { PrismaModule } from 'src/configs/prismaConfig/prisma.module';

@Module({
  controllers: [SiteController],
  providers: [SiteService, SiteConfigRepository],
  imports: [PrismaModule],
  exports: [SiteService, SiteConfigRepository],
})
export class SiteModule {}
