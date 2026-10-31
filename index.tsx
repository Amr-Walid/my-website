import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'
import { portfolioData } from './src/data'
import { renderPage } from './src/template'

const app = new Hono()

// Baseline security headers (CSP is set per-page via <meta>).
app.use('*', secureHeaders({ referrerPolicy: 'strict-origin-when-cross-origin' }))
app.use('/api/*', cors())

// ==================== API ROUTES ====================
app.get('/api/portfolio', (c) => c.json(portfolioData))
app.get('/api/projects', (c) => c.json(portfolioData.projects))
app.get('/api/projects/:id', (c) => {
  const project = portfolioData.projects.find(p => p.id === c.req.param('id'))
  return project ? c.json(project) : c.json({ error: 'Project not found' }, 404)
})
app.get('/api/skills', (c) => c.json(portfolioData.skills))
app.get('/api/experience', (c) => c.json(portfolioData.experience))
app.get('/api/certifications', (c) => c.json(portfolioData.certifications))

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const LIMITS = { name: 100, email: 254, subject: 100, message: 5000 } as const

app.post('/api/contact', async (c) => {
  let body: Record<string, unknown>
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid request body' }, 400)
  }
  const field = (k: keyof typeof LIMITS) => (typeof body?.[k] === 'string' ? (body[k] as string).trim() : '')
  const name = field('name')
  const email = field('email')
  const message = field('message')
  const subject = field('subject')
  if (!name || !email || !message) {
    return c.json({ error: 'Name, email, and message are required' }, 400)
  }
  if (!EMAIL_RE.test(email)) {
    return c.json({ error: 'Please provide a valid email address' }, 400)
  }
  const tooLong = (Object.keys(LIMITS) as (keyof typeof LIMITS)[]).find(
    (k) => ({ name, email, subject, message })[k].length > LIMITS[k]
  )
  if (tooLong) {
    return c.json({ error: `The ${tooLong} field is too long` }, 400)
  }
  return c.json({ success: true, message: 'Message received! I will get back to you soon.' })
})

// ==================== ROUTES ====================
app.get('/', (c) => {
  return c.html(renderPage())
})

export default app
