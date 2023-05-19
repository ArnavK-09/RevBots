// imports
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from "path"
// vite config for app
export default defineConfig(() => {
  return {
    resolve: { alias: { '.prisma/client/index-browser': path.resolve(__dirname, '/node_modules/.prisma/client/') } },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    }
  }
});
