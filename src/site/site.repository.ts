import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configs/prismaConfig/prisma.service';

@Injectable()
export class SiteConfigRepository {
  constructor(private prisma: PrismaService) {}

  async getSiteConfig() {
    return this.prisma.client.siteConfig.findFirst({});
  }

  async updateSiteConfig(title: string) {
    const now = new Date();
    now.setHours(now.getHours() - 3);
    return this.prisma.client.siteConfig.update({
      where: {
        id: 1,
      },
      data: {
        title,
        updatedAt: now.toISOString(),
      },
    });
  }
}
