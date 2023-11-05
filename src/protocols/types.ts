import { SiteConfig } from '@prisma/client';

export type loginData = {
  login: string;
  password: string;
};

export type postData = {
  title: string;
  description: string;
};

export type postId = {
  id: number;
};

export type postUpdateImg = {
  id: number;
  img: string;
};

export type ISiteConfig = Omit<SiteConfig, 'id' | 'updatedAt'>;
