import { Body, Controller, Get, Put } from '@nestjs/common';
import { SiteService } from './site.service';
import { ISiteConfig } from 'src/protocols/types';

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get()
  async getSiteConfig() {
    return await this.siteService.handleGetSiteConfig();
  }

  @Put()
  async updateSiteConfig(@Body() newSiteConfig: ISiteConfig) {
    return await this.siteService.handleUpdateSiteConfig(newSiteConfig);
  }
}
