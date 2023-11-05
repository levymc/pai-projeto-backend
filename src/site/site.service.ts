import { Injectable } from '@nestjs/common';
import { SiteConfigRepository } from './site.repository';

@Injectable()
export class SiteService {
  constructor(private readonly siteConfigRepository: SiteConfigRepository) {}

  async handleGetSiteConfig() {
    return this.siteConfigRepository.getSiteConfig();
  }

  async handleUpdateSiteConfig({ title }) {
    return this.siteConfigRepository.updateSiteConfig(title);
  }
}
