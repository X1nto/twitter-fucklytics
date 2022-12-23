import { resolve } from 'path';
import { defineConfig } from 'vite';
import manifest from './vite/manifest';

export default defineConfig(({ mode }) => {
  return {
    plugins: [manifest(mode === 'firefox' ? 'v2' : undefined)],
    publicDir: 'public',
    build: {
      target: 'es6',
      outDir: getBuildDir(mode),
      sourcemap: mode === 'dev',
      rollupOptions: {
        input: {
          content: resolve('src/content/content.ts'),
          fucklytics: resolve('src/webres/fucklytics.ts'),
        },
        output: {
          entryFileNames: '[name].js',
          assetFileNames: `[name].[ext]`,
          chunkFileNames: '[name].js',
        },
      },
    },
  };
});

function getBuildDir(mode: string): string {
  switch (mode) {
    case 'chrome':
      return 'build-chrome';
    case 'firefox':
      return 'build-firefox';
    default:
      return 'build';
  }
}
