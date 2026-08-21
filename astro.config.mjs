import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://test.shahflare.win',
  output: 'server',
  adapter: cloudflare(),
});
