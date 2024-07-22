import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    appEntrypoint: '/src/pages/_app'
  }), tailwind(), react(), lit()]
});