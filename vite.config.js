import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig(async () => {
  const { glob } = await import('glob');

  return {
    root: 'src',
    build: {
      outDir: '../dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/index.html'),
          ...Object.fromEntries(
            glob.sync('src/projects/*/index.html').map(file => [
              path.parse(file).dir.split(path.sep).pop(),
              path.resolve(__dirname, file)
            ])
          )
        }
      }
    },
    server: {
      open: true,
    },
    css: {
      postcss: './postcss.config.cjs',
    },
  };
});