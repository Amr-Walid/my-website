import build from '@hono/vite-build/vercel'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  server: { host: '0.0.0.0', allowedHosts: true },
  plugins: [
    build({
      entry: 'index.tsx'
    }),
    devServer({
      entry: 'index.tsx'
    })
  ]
})
