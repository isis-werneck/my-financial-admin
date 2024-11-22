import path from 'path';
import checker from 'vite-plugin-checker';
import { Plugin, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import * as fs from "node:fs";


function emptySourcemapFix(): Plugin {
  let currentInterval = null
  return {
    name: 'empty-sourcemap-fix',
    enforce: 'post',
    transform(source) {
      if (currentInterval) return
      currentInterval = setInterval(() => {
        const nodeModulesPath = path.join(__dirname, 'node_modules', '.vite', 'deps')
        if (!fs.existsSync(nodeModulesPath)) return
        clearInterval(currentInterval)
        currentInterval = null
        const files = fs.readdirSync(nodeModulesPath)
        files.forEach(file => {
          const mapFile = file + '.map'
          const mapPath = path.join(nodeModulesPath, mapFile)
          if (!fs.existsSync(mapPath)) return
          let mapData = JSON.parse(fs.readFileSync(mapPath, 'utf8'))
          if (!mapData.sources || mapData.sources.length == 0) {
            mapData.sources = [path.relative(mapPath, path.join(nodeModulesPath, file))]
            fs.writeFileSync(mapPath, JSON.stringify(mapData), 'utf8')
          }
        })
      }, 100)
      return source
    }
  }
}

// ----------------------------------------------------------------------

const PORT = 3039;

export default defineConfig({
  plugins: [
    emptySourcemapFix(),
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        dev: { logLevel: ['error'] },
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
});
