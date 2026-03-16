import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { portfolioData } from './src/data'
import { renderPage } from './src/template'

const app = new Hono()

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
app.get('/api/blog', (c) => c.json(portfolioData.blogPosts))
app.get('/api/blog/:id', (c) => {
  const post = portfolioData.blogPosts.find(p => p.id === c.req.param('id'))
  return post ? c.json(post) : c.json({ error: 'Post not found' }, 404)
})

app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, subject, message } = body
    if (!name || !email || !message) {
      return c.json({ error: 'Name, email, and message are required' }, 400)
    }
    return c.json({ success: true, message: 'Message received! I will get back to you soon.' })
  } catch {
    return c.json({ error: 'Invalid request body' }, 400)
  }
})

// ==================== ROUTES ====================
app.get('/', (c) => {
  return c.html(renderPage())
})

export default app
