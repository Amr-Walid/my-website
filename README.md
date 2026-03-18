# 🚀 Amr Walid — Data Engineer Portfolio

> **"From raw extraction to strategic insights."**
> Building scalable ETL pipelines and dynamic dashboards that drive data-informed decisions.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-amrwalidmaher-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/amrwalidmaher)
[![GitHub](https://img.shields.io/badge/GitHub-Amr--Walid-black?style=flat&logo=github)](https://github.com/Amr-Walid)
[![Email](https://img.shields.io/badge/Email-amr.walid2022@feps.edu.eg-red?style=flat&logo=gmail)](mailto:amr.walid2022@feps.edu.eg)

---

## 📋 About This Project

A production-ready personal portfolio website for **Amr Walid**, a Data Engineer & Analyst based in Cairo, Egypt. The site showcases case-study-style projects, professional experience, skills, and certifications — all served through a lightweight Hono server with a REST API and dynamic HTML rendering.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Server Framework** | [Hono](https://hono.dev/) (TypeScript) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS (compiled via PostCSS) |
| **Rendering** | Server-side HTML templating (`template.ts`) |
| **Deployment** | Vercel |
| **Runtime** | Node.js ≥ 18 |

---

## 📁 Project Structure

```
my-web/
├── index.tsx                  # Hono app — all routes & API endpoints
├── src/
│   ├── data.ts                # All portfolio content (projects, experience, skills, certs)
│   └── template.ts            # HTML rendering logic (server-side templating)
├── public/
│   └── assets/
│       ├── styles.css         # Source Tailwind CSS
│       ├── styles.compiled.css# Compiled output CSS (auto-generated)
│       ├── script.js          # Client-side interactivity
│       ├── logo.webp
│       ├── profile.webp
│       └── *.webp             # Project screenshots & diagrams
├── vite.config.ts             # Vite + Hono build config
├── vercel.json                # Vercel deployment config
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
└── ecosystem.config.cjs       # PM2 config (local server management)
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Renders the main portfolio page |
| `GET` | `/api/portfolio` | Full portfolio data (JSON) |
| `GET` | `/api/projects` | All projects list |
| `GET` | `/api/projects/:id` | Single project by ID |
| `GET` | `/api/skills` | Skills & proficiency levels |
| `GET` | `/api/experience` | Career timeline |
| `GET` | `/api/certifications` | Certifications list |
| `POST` | `/api/contact` | Contact form submission (validates name, email, message) |

---

## 💼 Projects Showcased

### 🔧 Data Engineering

| # | Project | Tech Stack | GitHub |
|---|---------|-----------|--------|
| 1 | **Modern SQL Server Data Warehouse** | SQL Server, T-SQL, Medallion Architecture, Star Schema | [↗](https://github.com/Amr-Walid/Sqlserver-DataWarehouse-Project) |
| 2 | **Real-Time Stock Data Pipeline with MongoDB** | Python, MongoDB, FastAPI, Docker, Change Streams | [↗](https://github.com/Amr-Walid/real-time-stock-pipeline) |
| 3 | **Automated Crypto Price ETL Pipeline** | Python, Pandas, GitHub Actions, CI/CD | [↗](https://github.com/Amr-Walid/crypto-price-analyzer) |
| 4 | **Dockerized ETL Pipeline with PostgreSQL** | Python, Docker, Docker Compose, PostgreSQL | [↗](https://github.com/Amr-Walid/docker-etl-pipeline) |

### 📊 Data Analysis

| # | Project | Tech Stack |
|---|---------|-----------|
| 5 | **AdventureWorks Sales Analytics Dashboard** | Excel, Power Query, PivotTables, Data Modeling |
| 6 | **Payment Performance & Bank Guarantee Analytics Dashboard** | Excel, Power Query, Power Pivot, DAX, Business Intelligence |

---

## 🧠 Skills Covered

| Category | Skills |
|----------|--------|
| **Data Engineering** | ETL/ELT Pipeline Design, Data Modeling, Data Warehousing, Workflow Orchestration, Stream Processing |
| **Languages** | Python (92%), SQL (90%), Pandas (90%), PySpark (80%), Bash/Shell |
| **Cloud & Infrastructure** | Docker (85%), GitHub Actions/CI-CD (88%), Google BigQuery, AWS Redshift, Microsoft Fabric |
| **Data Platforms** | Apache Airflow, Apache Spark, dbt, PostgreSQL, Git |
| **BI & Visualization** | Power BI (88%), Excel Advanced (90%), Power Query (88%), Tableau, Looker Studio |

---

## 👔 Experience Timeline

| Period | Role | Organization |
|--------|------|-------------|
| 2026 — Present | Data Engineering Instructor | Applied Statistics Lab (ASL) |
| 2025 — Present | Data Engineer Trainee | Digital Egypt Pioneers Initiative |
| 2025 | Data Analyst Intern | EMAM Organization for Development and Culture |
| 2025 | Statistical Data Trainee | Central Agency for Public Mobilization & Statistics (CAPMAS) |
| 2022 — Present | Economics Student (Data Engineering Focus) | Faculty of Economics & Political Science, Cairo University |

---

## 🏅 Certifications

- ✅ **Get Started with Lakehouses in Microsoft Fabric** — Microsoft Learn (January 2026)
- 🔄 **DP-700: Fabric Data Engineer Associate** — Microsoft Certified *(In Progress)*

---

## ⚙️ Development

### Install & Run Locally

```bash
# Install dependencies
npm install

# Run development server (compiles CSS + starts Vite dev server)
npm run dev

# Visit: http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output: dist/
```

### CSS Compilation (Manual)

```bash
# One-time compile
npm run build:css

# Watch mode
npm run watch:css
```

---

## 🚀 Deployment (Vercel)

The project is configured for Vercel deployment via `vercel.json`.

```bash
# Deploy via Vercel CLI
vercel --prod
```

Or push to GitHub — Vercel auto-deploys on every commit.

**Build settings in Vercel:**
- Build Command: `npm run vercel-build`
- Output Directory: `dist`
- Node.js Version: 18.x

---

## ✨ UI Features

- 🌙 **Dark / Light mode** toggle with `localStorage` persistence
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🎨 **Glassmorphism UI** with smooth scroll animations
- 🔍 **Project filtering** by category (All / Data Engineering / Data Analysis)
- 📸 **Image carousel** for project screenshots
- 📬 **Contact form** with backend API validation
- ⚡ **Intersection Observer** for scroll-triggered animations
- 🧭 **Active nav link** highlighting on scroll

---

## 📞 Contact

- **Email**: amr.walid2022@feps.edu.eg
- **LinkedIn**: [linkedin.com/in/amrwalidmaher](https://www.linkedin.com/in/amrwalidmaher)
- **GitHub**: [github.com/Amr-Walid](https://github.com/Amr-Walid)
- **Location**: Cairo, Egypt

---

*Last updated: March 2026 | Built with Hono + Vite + Tailwind CSS | Deployed on Vercel*
