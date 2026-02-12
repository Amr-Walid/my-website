# Amr Walid | Data Engineer Portfolio

## Project Overview
- **Name**: Amr Walid - Data Engineer Portfolio
- **Goal**: Production-ready, globally competitive portfolio website positioning Amr Walid as a Data Engineer specializing in scalable data pipelines, automation systems, and analytics infrastructure.
- **Tech Stack**: Hono + TypeScript + Tailwind CSS + Cloudflare Pages

## Live URLs
- **Preview**: [Sandbox URL](https://3000-ias9ho8gwqm1izm0x3idj-dfc00ec5.sandbox.novita.ai)
- **GitHub**: https://github.com/Amr-Walid
- **LinkedIn**: https://www.linkedin.com/in/amrwalidmaher

## Features

### Completed
- Hero section with animated ETL pipeline visualization (Extract > Transform > Load > Deliver)
- Professional About section with stats
- Skills section with 5 categories and animated progress bars
- Project Case Studies (Problem > Solution > Architecture > Tech Stack > Impact)
- Project filtering by category (All / Data Engineering / Data Analysis / DevOps)
- Experience Timeline with highlights
- Certifications section (Microsoft Fabric, DP-700)
- Blog section with 3 articles (structured from LinkedIn posts)
- GitHub integration section with stats
- Contact form with backend API validation
- Dark/Light mode toggle with localStorage persistence
- Fully responsive design (mobile, tablet, desktop)
- Glassmorphism UI design with smooth animations
- SEO optimized (meta tags, Open Graph, semantic HTML)
- Scroll animations with Intersection Observer
- Active navigation link highlighting
- Mobile hamburger menu

### API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Main portfolio page |
| GET | `/api/portfolio` | Full portfolio data |
| GET | `/api/projects` | All projects |
| GET | `/api/projects/:id` | Single project by ID |
| GET | `/api/skills` | Skills data |
| GET | `/api/experience` | Experience timeline |
| GET | `/api/certifications` | Certifications list |
| GET | `/api/blog` | Blog posts |
| GET | `/api/blog/:id` | Single blog post |
| POST | `/api/contact` | Contact form submission |

### Projects Included
1. **Automated Crypto Price ETL Pipeline** - Python, Pandas, GitHub Actions, CI/CD
2. **Dockerized ETL Pipeline with PostgreSQL** - Docker, Docker Compose, PostgreSQL
3. **AdventureWorks Sales Analytics Dashboard** - Excel, Power Query, PivotTables
4. **Simple Task Orchestrator (DAG Engine)** - Python, Graphs, Topological Sort
5. **Git & Version Control Mastery** - Git, GitHub, Branching Strategies

## Architecture
```
src/
  index.tsx          # Main Hono app with all routes, data, and HTML rendering
public/
  static/            # Static assets
ecosystem.config.cjs # PM2 configuration
vite.config.ts       # Vite build config for Cloudflare Pages
wrangler.jsonc       # Cloudflare Workers configuration
package.json         # Dependencies and scripts
```

## Data Sources Analyzed
- LinkedIn Profile (headline, summary, skills)
- LinkedIn Posts (4 posts converted to project case studies & blog articles)
- Microsoft Fabric Certificate (January 2026)
- GitHub Repositories (5 repos analyzed for tech stack & architecture)
- GitHub Profile README

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: Ready to deploy
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Deploy to Cloudflare
```bash
npm run build
npx wrangler pages deploy dist --project-name amr-walid-portfolio
```

## Development
```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
# Visit http://localhost:3000
```

## Brand Positioning
**"Data Engineer focused on building scalable data pipelines, automation systems, and analytics infrastructure."**

Core skills demonstrated:
- ETL/ELT Pipeline Design (Python, Pandas, SQL)
- Containerization & DevOps (Docker, GitHub Actions, CI/CD)
- Workflow Orchestration (Airflow concepts, DAG design)
- Cloud Data Platforms (BigQuery, Redshift, Microsoft Fabric)
- Business Intelligence (Power BI, Tableau, Excel)

---
Built with Hono + Cloudflare Pages | Last Updated: 2026-02-12
