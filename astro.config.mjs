import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://bkdevlabs.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  build: {
    format: 'directory',
    assets: 'assets' // Changed from default '_astro' to 'assets'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: 'assets/[ext]/[name].[hash][extname]'
        }
      }
    }
  }
});