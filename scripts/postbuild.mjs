// Adds long-lived browser caching for static assets to the Vercel Build Output.
// (vercel.json "headers" are ignored when deploying a prebuilt .vercel/output.)
import { readFileSync, writeFileSync } from 'node:fs'

const file = '.vercel/output/config.json'
const config = JSON.parse(readFileSync(file, 'utf8'))
const cacheRoute = {
  src: '/assets/(.*)',
  headers: { 'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800' },
  continue: true
}
config.routes = [cacheRoute, ...(config.routes || []).filter((r) => r.src !== cacheRoute.src)]
writeFileSync(file, JSON.stringify(config))
console.log('postbuild: asset cache headers added')
