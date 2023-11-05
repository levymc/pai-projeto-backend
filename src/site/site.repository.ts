import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { PrismaService } from 'src/configs/prismaConfig/prisma.service';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

@Injectable()
export class SiteConfigRepository {
  constructor(private prisma: PrismaService) {}

  async getSiteConfig() {
    return this.prisma.client.siteConfig.findFirst({});
  }

  async updateSiteConfig(title: string) {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const tz = 'America/Sao_Paulo';
    const currentDateTimeInBrazil = dayjs().tz(tz).toISOString();
    return this.prisma.client.siteConfig.update({
      where: {
        id: 1,
      },
      data: {
        title,
        updatedAt: currentDateTimeInBrazil,
      },
    });
  }
}
