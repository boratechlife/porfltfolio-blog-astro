import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_URL } from 'astro:env/client';

import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
  /** all urls without '/' */
  SITE_URL: 'https://deniskiprono.dev',
  SITE_TITLE: 'Denis kiprono',
  SITE_DESCRIPTION: 'I am Denis, Frontend developer',
  PLAUSIBLE_SCRIPT_URL,
  PLAUSIBLE_DOMAIN,
  PAGE_SIZE_POST_CARD: 3,
  PAGE_SIZE_POST_CARD_SMALL: 6,
  MORE_POSTS_COUNT: 3,
  DEFAULT_MODE: 'light',
  DEFAULT_THEME: 'default-light',
  AUTHOR_NAME: 'Denis Kiprono',
  AUTHOR_EMAIL: 'boratechlife@gmail.com',
  AUTHOR_GITHUB: 'https://github.com/boratechlife/',
  AUTHOR_LINKEDIN: 'https://www.linkedin.com/in/kiprono-denis-138562185/',
  AUTHOR_TWITTER: 'https://www.fiverr.com/boratechlife',
  AUTHOR_YOUTUBE: 'https://www.youtube.com/@Denis_codes',
  REPO_URL: 'https://github.com/boratechlife/',
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);
