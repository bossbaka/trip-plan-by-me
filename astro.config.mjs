import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import react from '@astrojs/react';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), react({
    include: ['**/react/*']
  })],
  vite: {
    ssr: {
      noExternal: ['antd-mobile']
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});