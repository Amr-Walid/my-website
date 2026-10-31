# 🚀 Amr Walid — Data Engineer & Full-Stack Developer Portfolio

> **"From the database to the dashboard — end to end."**
> Building scalable data pipelines, production business systems (POS, CRM, asset tracking), and marketing automation.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-amrwalidmaher-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/amrwalidmaher)
[![GitHub](https://img.shields.io/badge/GitHub-Amr--Walid-black?style=flat&logo=github)](https://github.com/Amr-Walid)
[![Email](https://img.shields.io/badge/Email-amr.walid2022@feps.edu.eg-red?style=flat&logo=gmail)](mailto:amr.walid2022@feps.edu.eg)

---

## 📋 About This Project

A production-ready personal portfolio website for **Amr Walid**, a Data Engineer & Full-Stack developer based in Cairo, Egypt. The site showcases case-study-style projects (data pipelines, full-stack business systems, and automation), a Services section aimed at businesses, professional experience, skills, and certifications — all served through a lightweight Hono server with a REST API and dynamic HTML rendering.

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
│   ├── data.ts                # All portfolio content (projects, experience, skills, certs, order, summaries)
│   ├── icons.ts               # Inline SVG icon set
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

### 🏢 Full-Stack Business Systems

| # | Project | Tech Stack | GitHub |
|---|---------|-----------|--------|
| 1 | **Retail POS & Reporting System** | ASP.NET Core 8, C#, EF Core, SQL Server, ZXing Barcode | [↗](https://github.com/Amr-Walid/invoice) |
| 2 | **UniGroup CRM (Multi-Tenant)** | ASP.NET Core, C#, Clean Architecture, EF Core, Docker | [↗](https://github.com/Amr-Walid/crm) |
| 3 | **Asset Tracking & Support System (ATS)** | ASP.NET Core 8, EF Core, Hangfire, SignalR, QRCoder | [↗](https://github.com/Amr-Walid/assets_tracking) |
| 4 | **FTD TechZone — E-Commerce & Corporate CMS** | ASP.NET Core MVC, EF Core, SQL Server, Identity | [↗](https://github.com/Amr-Walid/ftd) |
| 5 | **Fleet Pulse — Driver Tracking (System Design)** | PostGIS, TimescaleDB, Redis, Android, React | [↗](https://github.com/Amr-Walid/tracking_car) |

### 🤖 Automation

| # | Project | Tech Stack | GitHub |
|---|---------|-----------|--------|
| 4 | **WhatsApp Marketing & Customer Analytics** | C#/.NET, JavaScript, SQL, RFM Segmentation | [↗](https://github.com/Amr-Walid/whatsapp_marketing) |
| 5 | **M365 Project Management & Attendance System** | Power Automate, SharePoint, Forms, Excel, DAX | — |
| 6 | **Social Media Governance Command Center** | PostgreSQL, n8n, Metabase, Docker Compose, Flask | [↗](https://github.com/Amr-Walid/marketing_acc) |

### 🔧 Data Engineering

| # | Project | Tech Stack | GitHub |
|---|---------|-----------|--------|
| 0 | **CryptoPulse — Real-Time Crypto Lakehouse on Azure** | Kafka, Spark, Delta Lake, ADLS Gen2, Airflow, dbt, FastAPI | [↗](https://github.com/Amr-Walid/Depi-Project) |
| 6 | **Modern SQL Server Data Warehouse** | SQL Server, T-SQL, Medallion Architecture, Star Schema | [↗](https://github.com/Amr-Walid/Sqlserver-DataWarehouse-Project) |
| 7 | **Real-Time Stock Data Pipeline with MongoDB** | Python, MongoDB, FastAPI, Docker, Change Streams | [↗](https://github.com/Amr-Walid/real-time-stock-pipeline) |
| 8 | **Automated Crypto Price ETL Pipeline** | Python, Pandas, GitHub Actions, CI/CD | [↗](https://github.com/Amr-Walid/crypto-price-analyzer) |
| 9 | **Dockerized ETL Pipeline with PostgreSQL** | Python, Docker, Docker Compose, PostgreSQL | [↗](https://github.com/Amr-Walid/docker-etl-pipeline) |

### 📊 Data Analysis

| # | Project | Tech Stack |
|---|---------|-----------|
| 10 | **AI-Powered Enterprise Analytics Dashboard** | Next.js 16, React 19, Vercel AI SDK, Gemini, Recharts |
| 11 | **AdventureWorks Sales Analytics Dashboard** | Excel, Power Query, PivotTables, Data Modeling |
| 12 | **Payment Performance & Bank Guarantee Dashboard** | Excel, Power Query, Power Pivot, DAX, BI |

### 🌐 Web & WordPress

| # | Project | Tech Stack | GitHub |
|---|---------|-----------|--------|
| 13 | **Greenio — Renewable Energy WordPress Theme** | WordPress, PHP, Carbon Fields | [↗](https://github.com/Amr-Walid/wordpress-project1) |
| 14 | **Greenio Honey & Teas — Organic Store Theme** | WordPress, CPT, Carbon Fields | [↗](https://github.com/Amr-Walid/wordpress2) |
| 15 | **AeroWind Energy — Wind Turbines Theme** | WordPress, CPT, Lead Forms | [↗](https://github.com/Amr-Walid/wordpress3) |
| 16 | **QRCard Pro — Digital Business Card** | HTML, JS, QR, GitHub Pages | [↗](https://github.com/Amr-Walid/qrhtml) |

## 🧩 Services (for Businesses)

The site includes a **Services** section aimed at companies:

1. **Websites & Web Apps** — bilingual (Arabic RTL / English) sites, portals, dashboards
2. **Business Systems** — POS, CRM, inventory & asset tracking, invoicing, support desks
3. **Automation & Integrations** — marketing/WhatsApp campaigns, RFM segmentation, scheduled reports, M365/Power Automate
4. **Data Engineering & ETL** — pipelines, warehouses, data integration
5. **Dashboards & BI** — Power BI, Excel (DAX/Power Query), custom web dashboards

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
| Oct 2025 — Present | Software Engineer (Best Employee of the Month — Aug 2026) | Uni Group |
| Nov 2025 — Jul 2026 | Microsoft Data Engineer Trainee | Digital Egypt Pioneers Initiative (DEPI) |
| 2026 — Aug 2026 | Data Engineering Instructor (Outstanding Instructor award) | Applied Statistics Lab (ASL), FEPS |
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

- 🌗 **Dark / Light theme** (no flash on load, saved in `localStorage`)
- 🧱 **Server-side rendered** project cards (SEO-friendly) + JSON-LD Person schema & Open Graph tags
- 🎞️ **Animations**: staggered scroll reveals, animated hero network canvas, aurora gradients, typed roles, count-up stats, tech marquee, 3D card tilt, spotlight hover, magnetic buttons, scroll-progress bar, timeline progress line
- 🔍 **Project filters** with counts + "Show all" (5 categories, 20 projects)
- 🗂️ **Case-study modal** — gallery with thumbnails, full-screen lightbox, architecture flow, prev/next (keyboard ← → + swipe), deep links (`#project=<id>`), focus trap
- 📬 **Contact form** (Formspree) with validation, topic chips, honeypot, copy-email button, live Cairo time
- ♿ **Accessible**: skip link, keyboard-operable cards, WAI-ARIA tabs (arrow keys) for skills, `aria-pressed` filters, labelled skill bars, text contrast ≥ 4.5:1 in **both** themes (theme-aware `brand-400` / `accent-400` tokens), `prefers-reduced-motion` support
- 🎨 **One palette**: blue → sky → teal gradient (no purple), sentence-case section labels
- 🔒 **Hardened**: `secureHeaders` middleware (HSTS, nosniff, frame-options, referrer-policy) and server-side validation on `POST /api/contact` (types, email format, length limits)
- 📱 **Fully responsive**, lighter effects on mobile, no horizontal overflow at 390px

> **Note:** `skills/` holds local AI-agent skills and is git-ignored (also excluded from `tsconfig.json`). It is not part of the site.

---

## 📞 Contact

- **Email**: amr.walid2022@feps.edu.eg
- **LinkedIn**: [linkedin.com/in/amrwalidmaher](https://www.linkedin.com/in/amrwalidmaher)
- **GitHub**: [github.com/Amr-Walid](https://github.com/Amr-Walid)
- **Location**: Cairo, Egypt

---

*Last updated: October 2026 | Built with Hono + Vite + Tailwind CSS | Deployed on Vercel*
