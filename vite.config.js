import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

/** Multi-page app: send HTML navigations to index.html (except monthly + real files). */
function spaFallback() {
  return {
    name: 'spa-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.method !== 'GET') return next()
        const url = req.url?.split('?')[0] ?? ''
        if (shouldServeAsStatic(url)) return next()
        req.url = '/index.html'
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.method !== 'GET') return next()
        const url = req.url?.split('?')[0] ?? ''
        if (shouldServeAsStatic(url)) return next()
        req.url = '/index.html'
        next()
      })
    },
  }
}

function shouldServeAsStatic(urlPath) {
  const pathOnly = (urlPath.split('?')[0] ?? '').replace(/^\//, '')

  if (pathOnly === 'monthly' || pathOnly === 'monthly.html') return true
  if (pathOnly.startsWith('src/')) return true
  if (pathOnly.startsWith('@')) return true
  if (pathOnly.startsWith('node_modules/')) return true
  if (pathOnly.startsWith('assets/')) return true

  const lastSegment = pathOnly.split('/').pop() ?? ''
  if (lastSegment && /\.[a-zA-Z0-9]+$/.test(lastSegment)) return true

  return false
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        monthly: resolve(import.meta.dirname, 'monthly.html'),
      },
    },
  },
})
