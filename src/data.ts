const basePortfolio = {
  personal: {
    name: "Amr Walid",
    title: "Data Engineer & Full-Stack Developer",
    headline: "Data Pipelines, Business Systems & Automation — End to End",
    tagline: "I build the full stack of data-driven products: scalable ETL pipelines, production business systems (POS, CRM, asset tracking), and marketing automation — from the database to the dashboard.",
    email: "amr.walid2022@feps.edu.eg",
    location: "Cairo, Egypt",
    linkedin: "https://www.linkedin.com/in/amrwalidmaher",
    github: "https://github.com/Amr-Walid",
    avatar: "https://avatars.githubusercontent.com/u/Amr-Walid"
  },
  summary: `Data Engineer and Full-Stack developer who ships complete, production-grade systems — not just prototypes. I design and build across the entire stack: robust ETL/ELT pipelines and data warehouses on one end, and full business applications (POS, CRM, asset & support tracking, marketing automation) on the other. My toolbox spans Python and SQL for data, ASP.NET Core 8 / C# and Next.js / React for applications, and Docker, CI/CD, and clean layered architecture for delivery. I combine data-engineering rigor with real software-engineering discipline — validation, testing, audit logging, and security — to turn business problems into reliable systems that run in production.`,

  skills: {
    "Data Engineering": [
      { name: "ETL/ELT Pipeline Design", level: 90 },
      { name: "Data Modeling", level: 85 },
      { name: "Data Warehousing", level: 85 },
      { name: "Workflow Orchestration", level: 80 },
      { name: "Data Quality & Testing", level: 80 },
      { name: "Stream Processing", level: 75 }
    ],
    "Backend & Full-Stack": [
      { name: "ASP.NET Core 8 / C#", level: 88 },
      { name: "Clean / Layered Architecture", level: 85 },
      { name: "EF Core & SQL Server", level: 85 },
      { name: "REST API Design", level: 87 },
      { name: "Next.js / React", level: 82 },
      { name: "Auth, Roles & Multi-Tenancy", level: 83 }
    ],
    "Languages & Frameworks": [
      { name: "Python", level: 92 },
      { name: "SQL / T-SQL", level: 90 },
      { name: "C#", level: 86 },
      { name: "TypeScript / JavaScript", level: 82 },
      { name: "Pandas / PySpark", level: 88 }
    ],
    "Automation & Integrations": [
      { name: "Marketing Automation (WhatsApp)", level: 85 },
      { name: "RFM Customer Segmentation", level: 82 },
      { name: "Power Automate / M365", level: 85 },
      { name: "Web Automation (Playwright)", level: 80 },
      { name: "GitHub Actions (CI/CD)", level: 88 }
    ],
    "Cloud & Infrastructure": [
      { name: "Docker & Docker Compose", level: 85 },
      { name: "PostgreSQL / SQL Server", level: 86 },
      { name: "MongoDB", level: 80 },
      { name: "Google BigQuery", level: 78 },
      { name: "Microsoft Fabric", level: 72 }
    ],
    "BI & Visualization": [
      { name: "Power BI", level: 88 },
      { name: "Excel (Advanced) / DAX", level: 90 },
      { name: "Power Query", level: 88 },
      { name: "Tableau", level: 76 },
      { name: "Looker Studio", level: 75 }
    ]
  },

  projects: [
    {
      id: "retail-pos-system",
      title: "Retail POS & Reporting System",
      category: "Full-Stack",
      featured: true,
      image: "cash-register",
      imageUrls: [
        "/assets/pos-05_admin_dashboard.webp",
        "/assets/pos-03_pos_modal.webp",
        "/assets/pos-06_admin_reports.webp",
        "/assets/pos-07_products.webp",
        "/assets/pos-12_receipt.webp"
      ],
      problem: "Small retailers needed a real point-of-sale system — not a spreadsheet — to sell fast at the counter, control stock, apply discount codes, print receipts and barcode labels, and give the owner trustworthy sales reports. Off-the-shelf tools were either too expensive, English-only, or missing the Arabic RTL workflow and role separation (owner vs. sales agent) that Egyptian shops actually need.",
      solution: "Designed and built a complete, production-grade POS and reporting system in ASP.NET Core 8 MVC with SQL Server via EF Core, fully Arabic (RTL) with role-based access (Admin & Agent) on ASP.NET Core Identity. Agents sell through a fast pop-up POS supporting barcode scanners, the device camera (ZXing), or manual entry, with percentage discount codes, optional customer records, and full/partial returns that restock inventory. Admins manage brands, categories, products (with printable CODE-128 barcode labels), discount codes, and users, and get a live dashboard plus daily/weekly/monthly reports with CSV export (UTF-8 BOM for Arabic Excel). Every action is captured in an audit log. The suite ships with 179/179 passing tests and a 0-error build.",
      architecture: "Browser (Razor + RTL UI) → ASP.NET Core 8 MVC Controllers → Identity (Admin/Agent roles) → Service Layer (Sales, Inventory, Discounts, Returns, Audit) → EF Core → SQL Server. Barcode: ZXing camera scan + CODE-128 SVG label printing. Thermal 80mm receipt print.",
      techStack: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server", "ASP.NET Identity", "Razor / RTL UI", "ZXing Barcode", "xUnit"],
      impact: [
        "Complete counter-to-management workflow: sell, return, restock, report",
        "Barcode scanning via hardware scanner OR device camera — no manual focus needed",
        "Percentage discount codes with usage limits and validity windows",
        "Printable CODE-128 barcode labels (vectorial SVG) per product",
        "Thermal 80mm receipt printing / PDF export",
        "Role separation: agents see only their own sales; admins see everything",
        "Full audit log (login, sales, CRUD) with real names and IP addresses",
        "CSV export with UTF-8 BOM — opens correctly in Arabic Excel",
        "179/179 automated tests passing, 0 build errors"
      ],
      github: "https://github.com/Amr-Walid/invoice",
      tags: ["ASP.NET Core", "POS", "SQL Server", "C#", "Business System", "RTL"]
    },
    {
      id: "unigroup-crm",
      title: "UniGroup CRM — Multi-Tenant Customer Platform",
      category: "Full-Stack",
      featured: true,
      image: "users",
      problem: "A group operating several business units needed one CRM to manage customers, leads, and company data across departments — with strict data isolation between units, clear role-based permissions, and a codebase that could grow without turning into spaghetti.",
      solution: "Built a CRM on ASP.NET Core with C# following Clean Architecture (Domain / Application / Infrastructure / Web) to keep business rules independent of frameworks and databases. Implemented role-based access control and a multi-tenant company structure so each business unit's data stays isolated, with localization support and a Docker-based setup for reproducible deployment. The project is backed by detailed design docs (requirements, database design, clean-architecture guide, implementation plan).",
      architecture: "Web (Controllers / Views) → Application (Use Cases, Interfaces) → Domain (Entities, Business Rules) → Infrastructure (EF Core, Identity, Persistence). Multi-tenant isolation + role-based authorization. Containerized with Docker.",
      techStack: ["ASP.NET Core", "C#", "Clean Architecture", "EF Core", "SQL Server", "Docker", "Identity / RBAC"],
      impact: [
        "Clean Architecture keeps business logic independent and testable",
        "Multi-tenant design isolates each business unit's data",
        "Role-based access control across modules",
        "Localization-ready (Arabic / English)",
        "Documented end-to-end: requirements, DB design, implementation plan",
        "Containerized for reproducible deployment"
      ],
      github: "https://github.com/Amr-Walid/crm",
      tags: ["CRM", "ASP.NET Core", "Clean Architecture", "Multi-Tenant", "C#"]
    },
    {
      id: "whatsapp-marketing-system",
      title: "WhatsApp Marketing & Customer Analytics System",
      category: "Automation",
      featured: true,
      image: "bullhorn",
      imageUrls: ["/assets/wa-dashboard.webp", "/assets/wa-matrix.webp"],
      problem: "A business wanted to run WhatsApp marketing campaigns to thousands of customers without getting numbers banned, and without blindly blasting everyone. They needed to understand who their best customers are, segment them, and send the right message to the right segment — safely and measurably.",
      solution: "Built a hybrid WhatsApp marketing system (C# / .NET core services with JavaScript automation and a SQL data layer) that combines customer data analysis, RFM segmentation (Recency, Frequency, Monetary), and automated, throttled campaign sending. The design is documented as a full playbook — data analysis, infrastructure, an 'anti-ban bible', architecture, order funnel, implementation, and legal/risk — so campaigns respect rate limits and platform rules while targeting high-value segments first.",
      architecture: "Customer Data (SQL) → Data Analysis & RFM Segmentation → Campaign Orchestrator (throttling / anti-ban rules) → WhatsApp Sending Layer → Delivery & Response Tracking → Order Funnel Analytics",
      techStack: ["C# / .NET", "JavaScript", "SQL", "RFM Segmentation", "Marketing Automation", "Data Analysis"],
      impact: [
        "RFM segmentation targets high-value customers instead of blind blasting",
        "Anti-ban strategy: throttling and safe sending patterns to protect numbers",
        "Automated, repeatable campaign workflow",
        "Order-funnel tracking to measure campaign impact",
        "Documented playbook covering data, infra, risk and legal considerations",
        "Hybrid design combining .NET services with web automation"
      ],
      github: "https://github.com/Amr-Walid/whatsapp_marketing",
      tags: ["Automation", "WhatsApp", "Marketing", "RFM", "C#", "Data Analysis"]
    },
    {
      id: "asset-tracking-system",
      title: "Asset Tracking & Technical Support System (ATS)",
      category: "Full-Stack",
      featured: true,
      image: "boxes-stacked",
      imageUrls: ["/assets/ats-dashboard.webp", "/assets/ats-assets.webp", "/assets/ats-tickets.webp"],
      problem: "Organizations lose track of fixed assets, personal custody items, preventive maintenance schedules, and IT support tickets when everything lives in scattered spreadsheets. They needed one system to follow each asset's full lifecycle — from purchase to disposal — with maintenance, custody, and a support desk, isolated per company.",
      solution: "Built an integrated Asset Tracking & Technical Support system in ASP.NET Core 8 (MVC + Razor) with a clean 4-layer architecture. It manages the full asset lifecycle, personal custody, preventive maintenance, support tickets, periodic inventory, and reporting — with per-company data isolation enforced at the database level via EF Core Global Query Filters. Background jobs run on Hangfire, real-time notifications use SignalR, QR codes identify assets, and Arabic Excel reports export via ClosedXML. Validation (FluentValidation), structured logging (Serilog), and email (MailKit) round out a production-ready stack.",
      architecture: "Web (Controllers / Razor) → Application (Interfaces, Result<T>) → Infrastructure (EF Core, Identity, Services, Migrations) → Domain (Entities). Company isolation via EF Core Global Query Filters. Hangfire background jobs + SignalR notifications + QR asset tags.",
      techStack: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server / SQLite", "Hangfire", "SignalR", "QRCoder", "Serilog", "ClosedXML"],
      impact: [
        "Tracks the full asset lifecycle from purchase to disposal",
        "Database-level company isolation via EF Core Global Query Filters",
        "Preventive maintenance scheduling + technical support tickets",
        "Real-time notifications with SignalR",
        "Background jobs on Hangfire (admin-only dashboard)",
        "QR-code asset tagging and Arabic (RTL) Excel report export",
        "Clean layered architecture with FluentValidation and Serilog logging"
      ],
      github: "https://github.com/Amr-Walid/assets_tracking",
      tags: ["ASP.NET Core", "Asset Management", "Clean Architecture", "SignalR", "C#"]
    },
    {
      id: "m365-project-management-system",
      title: "M365 Automated Project Management & Attendance System",
      category: "Automation",
      featured: true,
      image: "chart-bar",
      imageUrls: [
        "/assets/m365-architecture.webp",
        "/assets/m365-dashboard.webp",
        "/assets/m365-flow-attendance-sync.webp",
        "/assets/m365-flow-project-update.webp",
        "/assets/m365-flow-email-alert.webp"
      ],
      problem: "A staffing and recruitment company was managing multiple active projects, recruiter workloads, daily attendance, and candidate pipelines through disconnected spreadsheets and manual processes. There was no centralized system to track project status in real-time, validate recruiter submissions, prevent duplicate attendance records, or surface performance analytics to management — leading to inefficiencies, data errors, and delayed reporting.",
      solution: "Designed and built a fully automated, end-to-end project management and attendance tracking system using the Microsoft 365 ecosystem. The system uses Microsoft Forms as the data entry layer (three forms: Project Master Creation, Daily Project Updates, and Daily Attendance). Power Automate flows handle all backend logic — validating project IDs, syncing cumulative totals, detecting duplicate check-ins, and triggering email alerts to managers and employees. All data is persisted to SharePoint Lists as the backend database. An Excel Online dashboard connected via Power Query and a DAX-driven data model surfaces real-time KPIs including active projects, team productivity scores, workload distribution, daily effort trends, and an automated Employee of the Month calculation.",
      architecture: "M365 Forms (3 Forms) → Power Automate (4 Flows: Project Sync, Daily Update Validation, Attendance Sync, Project Master Creation) → SharePoint Lists (Project Master Tracker + Employee Activity Log) → Power Query / Excel Data Model → DAX Measures → Excel Online Management Dashboard",
      techStack: ["Microsoft 365", "Power Automate", "SharePoint", "Microsoft Forms", "Excel Online", "Power Query", "DAX", "Power Pivot", "Business Intelligence"],
      impact: [
        "Fully automated project lifecycle management from creation to closure",
        "Real-time validation of Project IDs and duplicate attendance prevention",
        "Automated email alerts for managers on project status changes (Closed / On-Hold / Rejected)",
        "Automated employee email notifications on new check-ins and data errors",
        "Live KPI dashboard: Active Projects, Profiles Submitted, Shortlisted, Attendance %, Team Productivity",
        "Automated Employee of the Month & Top Performer calculation based on productivity scores",
        "Workload distribution and daily effort trend visualizations per recruiter",
        "Zero manual data consolidation — all reporting driven by live SharePoint data"
      ],
      tags: ["Microsoft 365", "Power Automate", "SharePoint", "Excel Dashboard", "Automation", "BI"]
    },
    {
      id: "ai-powered-nextjs-dashboard",
      title: "AI-Powered Enterprise Analytics Dashboard",
      category: "Data Analysis",
      featured: true,
      image: "chart-bar",
      imageUrls: [
        "/assets/nextjs-dashboard-1.webp",
        "/assets/nextjs-dashboard-2.webp",
        "/assets/nextjs-dashboard-3.webp"
      ],
      problem: "Modern enterprises struggle with large volumes of unstructured sales data. Traditional dashboards require users to manually filter and interpret complex charts, lacking an interactive way to query data instantly in their native language.",
      solution: "Developed a full-stack, enterprise-grade analytics dashboard using Next.js and React 19. Integrated a real-time AI Assistant using Vercel AI SDK and Google's Gemini Flash Lite. The AI can analyze the entire underlying dataset and provide instant, accurate, streaming insights in Arabic. The UI features highly interactive, scalable charts built with Recharts and Tailwind CSS with full RTL support.",
      architecture: "Next.js App Router → Vercel AI SDK (Streaming) → Gemini Model → Recharts (Frontend Visualization)",
      techStack: ["Next.js 16", "React 19", "Tailwind CSS", "Vercel AI SDK", "Google Gemini AI", "Recharts", "TypeScript"],
      impact: [
        "Integrated AI-driven insights directly into the reporting workflow.",
        "Resolved long-context payload timeouts using optimized data summarization and stream rendering.",
        "Built a fully localized Arabic (RTL) enterprise dashboard interface.",
        "Implemented interactive data visualizations for sales, demographics, and regional performance."
      ],
      website: "https://dashboard.amrw.me/",
      github: "https://github.com/Amr-Walid/Nextjs-dashboard",
      tags: ["Next.js", "AI Integration", "Dashboard", "React", "Data Analytics"]
    },
    {
      id: "sql-server-data-warehouse",
      title: "Modern SQL Server Data Warehouse",
      category: "Data Engineering",
      featured: true,
      image: "server",
      imageUrls: [
        "/assets/sql-architecture.webp",
        "/assets/sql-data-flow.webp",
        "/assets/sql-star-schema.webp"
      ],
      problem: "Organizations often store data across multiple operational systems such as ERP and CRM platforms. These systems generate valuable information but are typically fragmented, inconsistent, and not optimized for analytical workloads. Building reliable analytics requires transforming this raw operational data into a structured, consistent, and query-efficient format that supports business intelligence and reporting. The challenge was to design and implement a complete end-to-end data warehouse architecture capable of ingesting raw data, transforming it, ensuring data quality, and delivering business-ready datasets for analytics.",
      solution: "Designed and implemented a modern SQL Server data warehouse using a Medallion architecture to progressively transform raw data into trusted analytical datasets. Developed ETL / ELT pipelines using T-SQL and stored procedures to extract and integrate data from simulated ERP and CRM systems. Implemented multiple transformation stages including data cleaning, standardization, normalization, and enrichment to ensure high-quality datasets ready for analytical consumption. At the final layer, engineered a star schema data mart consisting of fact and dimension tables optimized for business intelligence queries and reporting workloads.",
      architecture: "Source Systems (ERP / CRM) → Bronze Layer (Raw Data Ingestion) → Silver Layer (Data Cleaning & Transformation) → Gold Layer (Business Data Mart) → Analytics & BI",
      techStack: ["SQL Server", "T-SQL", "Data Warehousing", "ETL", "Star Schema", "Medallion Architecture", "Git"],
      impact: [
        "End-to-end modern data warehouse architecture built from scratch",
        "Structured Medallion architecture (Bronze → Silver → Gold)",
        "Star schema data mart optimized for analytical queries",
        "Robust ETL pipelines for data integration and transformation",
        "Clear data lineage from source systems to analytical tables",
        "Production-ready project structure with Git version control"
      ],
      github: "https://github.com/Amr-Walid/Sqlserver-DataWarehouse-Project",
      tags: ["SQL Server", "Data Warehouse", "ETL", "Medallion Architecture"]
    },
    {
      id: "real-time-stock-pipeline",
      title: "Real-Time Stock Data Pipeline with MongoDB",
      category: "Data Engineering",
      featured: true,
      image: "bolt",
      imageUrl: "/assets/mongodb-pipeline.webp",
      problem: "Traditional batch-processing systems introduce delays between data ingestion and analytics, making them unsuitable for real-time financial monitoring. The challenge was to design and build a real-time, event-driven data pipeline capable of ingesting live stock data, processing it instantly, and exposing the analytics through an API.",
      solution: "Built a real-time data pipeline powered by MongoDB Change Streams and a microservices architecture. The system continuously collects live stock data, processes it as soon as it arrives using aggregation pipelines, and exposes the results through a high-performance FastAPI server.",
      architecture: "External Stock API → Python Data Ingestor → MongoDB → Change Streams → Aggregation Pipeline → FastAPI → Analytics API",
      techStack: ["Python", "MongoDB", "FastAPI", "Docker", "Docker Compose", "Change Streams", "Aggregation Framework", "NoSQL Data Modeling"],
      impact: [
        "Real-time event-driven data pipeline",
        "Automatic analytics triggered using MongoDB Change Streams",
        "Containerized microservices architecture with Docker",
        "Scalable NoSQL data model optimized for real-time workloads",
        "High-performance REST API for accessing analytics",
        "Production-ready deployment using Docker Compose"
      ],
      github: "https://github.com/Amr-Walid/real-time-stock-pipeline",
      tags: ["MongoDB", "Real-Time", "FastAPI", "Docker", "Data Engineering"]
    },
    {
      id: "crypto-etl-pipeline",
      title: "Automated Crypto Price ETL Pipeline",
      category: "Data Engineering",
      featured: true,
      image: "chart-line",
      imageUrl: "/assets/project-etl.webp",
      problem: "Cryptocurrency markets generate massive volumes of real-time price data across multiple exchanges. Manually tracking and recording this data for historical analysis is unreliable, inconsistent, and doesn't scale.",
      solution: "Designed and built a fully automated, cloud-hosted ETL pipeline that extracts live cryptocurrency market data from the CoinGecko API, transforms it using Python and Pandas into a structured schema, and loads it into a continuously growing time-series CSV dataset — all orchestrated by GitHub Actions running on an hourly cron schedule.",
      architecture: "CoinGecko API → Python (requests) → Pandas Transform → CSV Append → GitHub Actions (hourly cron) → Auto-commit to Repository",
      techStack: ["Python", "Pandas", "REST API", "GitHub Actions", "CI/CD", "Git"],
      impact: [
        "Fully autonomous — zero manual intervention after deployment",
        "Runs 24/7 with hourly data collection cycles",
        "Builds a growing historical time-series dataset automatically",
        "Production-grade version control with atomic commits"
      ],
      github: "https://github.com/Amr-Walid/crypto-price-analyzer",
      tags: ["ETL", "Automation", "CI/CD", "API Integration", "Time-Series"]
    },
    {
      id: "docker-etl-pipeline",
      title: "Dockerized ETL Pipeline with PostgreSQL",
      category: "Data Engineering",
      featured: true,
      image: "database",
      imageUrl: "/assets/project-workflow.webp",
      problem: "ETL processes often break due to environment inconsistencies between development, testing, and production. Dependencies, database connections, and configurations differ across machines, making pipelines fragile.",
      solution: "Built a containerized ETL pipeline using Docker and Docker Compose that packages the entire data workflow — extraction, transformation, and loading into PostgreSQL — into reproducible, isolated containers. A single command spins up the full environment.",
      architecture: "Source Data → Python ETL Container → Transform Layer → PostgreSQL Container → Docker Compose Orchestration",
      techStack: ["Python", "Docker", "Docker Compose", "PostgreSQL", "SQL", "Environment Variables"],
      impact: [
        "100% reproducible environment with a single docker compose up",
        "Complete isolation between ETL logic and database layer",
        "Secure credential management via .env files",
        "Production-ready containerization pattern"
      ],
      github: "https://github.com/Amr-Walid/docker-etl-pipeline",
      tags: ["Docker", "ETL", "PostgreSQL", "Containerization", "DevOps"]
    },
    {
      id: "adventure-works-dashboard",
      title: "AdventureWorks Sales Analytics Dashboard",
      category: "Data Analysis",
      featured: true,
      image: "chart-bar",
      imageUrls: ["/assets/project-sales.webp", "/assets/project-sales-new.webp"],
      problem: "A global manufacturing company had thousands of rows of unstructured sales data across multiple dimensions — products, customers, geography, and time — with no unified view for executive decision-making.",
      solution: "Designed and built a comprehensive interactive Excel dashboard using the AdventureWorks dataset. Applied Power Query for data cleaning, built a multi-table data model with proper relationships, and created dynamic PivotTable reports with slicers and timelines for self-service analytics.",
      architecture: "Raw Data → Power Query (Clean & Transform) → Data Model (Relationships) → PivotTables → Interactive Dashboard (Slicers, Timelines, Charts)",
      techStack: ["Excel", "Power Query", "PivotTables", "Data Modeling", "Business Intelligence"],
      impact: [
        "Unified view across sales, products, customers, and geography",
        "Interactive slicers enable self-service exploration",
        "Identifies top-performing products, regions, and seasonal trends",
        "Supports strategic pricing and marketing decisions"
      ],
      github: "https://github.com/Amr-Walid/Excel-Dashboard",
      tags: ["BI", "Dashboard", "Excel", "Data Analysis", "Power Query"]
    },
    {
      id: "payment-bg-analytics-dashboard",
      title: "Payment Performance & Bank Guarantee Analytics Dashboard",
      category: "Data Analysis",
      featured: true,
      image: "chart-bar",
      imageUrls: [
        "/assets/payment-dashboard-1.webp",
        "/assets/payment-dashboard-2.webp"
      ],
      problem: "A finance department was handling large volumes of payment and bank guarantee (BG) data across multiple vendors, banks, and contract types. The data lacked a centralized structure, making it difficult to track payment performance and delays, monitor vendor efficiency, analyze financial exposure across banks, and identify critical risks and upcoming obligations.",
      solution: "Developed two fully interactive dashboards in Excel: a Payment Performance Dashboard and a Bank Guarantee (BG) Dashboard. Used Power Query for data cleaning and transformation, and built a robust data model connecting invoices, vendors, banks, and guarantees. Implemented DAX measures to calculate KPIs such as payment cycle, approval duration, exposure, and risk levels. Designed dynamic dashboards with slicers, filters, and drill-down capabilities to enable real-time financial analysis.",
      architecture: "Raw Data → Power Query (ETL) → Data Model (Fact & Dimension Tables) → DAX Measures → Interactive Dashboards",
      techStack: ["Excel", "Power Query", "Power Pivot", "DAX", "Data Modeling", "Business Intelligence"],
      impact: [
        "Centralized financial visibility across payments and guarantees",
        "Payment cycle, approval duration, and hold/delay KPIs tracked in real-time",
        "Vendor performance analysis based on processing time",
        "Risk classification: Critical, Warning, Valid, and Expired guarantees",
        "90-day maturity risk planning for bank guarantees",
        "Exposure analysis by bank and BG type (Advance, Financial, Performance, Initial)",
        "Enabled finance team to shift from manual reporting to self-service analytics"
      ],
      tags: ["Excel", "DAX", "Power Query", "BI Dashboard", "Finance Analytics"]
    },
    {
      id: "cryptopulse-azure-lakehouse",
      title: "CryptoPulse — Real-Time Crypto Lakehouse on Azure",
      category: "Data Engineering",
      featured: true,
      image: "bolt",
      imageUrls: [
        "/assets/cryptopulse-architecture.webp",
        "/assets/cryptopulse-architecture-2.webp"
      ],
      problem: "Crypto markets move every second, while prices, news and social sentiment live in completely different sources and formats. Analysts needed one trustworthy platform that ingests live and historical market data together with news and sentiment, keeps a full history, and serves clean, analytics-ready data through an API and a dashboard — not a pile of scripts.",
      solution: "Built (as part of the DEPI Microsoft Azure Data Engineering track) a production-grade, end-to-end lakehouse. Five streams — Binance WebSocket prices, CoinGecko market data, NewsAPI headlines, RSS social feeds and Binance historical OHLCV — flow through Apache Kafka into Spark Structured Streaming and batch jobs, landing in a Medallion architecture (Bronze → Silver) on Azure Data Lake Storage Gen2 with Delta Lake. A FinBERT sentiment processor scores news and social posts. Silver data syncs into PostgreSQL (Supabase), dbt builds the Gold layer (daily OHLCV, market summary, sentiment, latest prices), Airflow orchestrates everything, and a secured FastAPI backend powers a Next.js dashboard with an AI assistant.",
      architecture: "Binance WebSocket / Klines + CoinGecko + NewsAPI + RSS → Python producers → Apache Kafka topics → Spark Streaming & Batch → ADLS Gen2 Bronze (Delta) → Silver (Delta) + FinBERT sentiment → PostgreSQL (Supabase) → dbt Gold models → FastAPI → Next.js dashboard. Orchestrated by Airflow, packaged in ~15 Docker containers.",
      techStack: ["Apache Kafka", "Apache Spark", "Delta Lake", "Azure ADLS Gen2", "Airflow", "dbt", "PostgreSQL", "FastAPI", "Next.js", "Docker", "FinBERT"],
      impact: [
        "4 real-time + historical data streams unified in one lakehouse",
        "Medallion architecture (Bronze → Silver → Gold) on Azure Delta Lake",
        "NLP sentiment scoring (FinBERT) on news and social feeds",
        "dbt Gold layer for analytics-ready daily OHLCV, market summary & sentiment",
        "Airflow DAGs for historical backfills and frequent price refreshes",
        "Secured FastAPI backend + live Next.js dashboard with AI assistant",
        "Fully containerized: ~15 services with Docker Compose"
      ],
      github: "https://github.com/Amr-Walid/Depi-Project",
      website: "https://cryptopulse-five-red.vercel.app",
      tags: ["Kafka", "Spark", "Azure", "Lakehouse", "dbt", "Airflow", "Real-Time"]
    },
    {
      id: "ftd-techzone-ecommerce",
      title: "FTD TechZone — E-Commerce & Corporate CMS Platform",
      category: "Full-Stack",
      featured: true,
      image: "store",
      problem: "An electronics distributor (multi-brand phones, smart-home and accessories) needed one bilingual website that is both a product catalogue / online store and a corporate site — with brand pages, installment purchasing, careers, news and events — all editable by non-technical staff without touching code. The previous site had placeholder content, fake numbers and false compliance claims flagged by a management audit.",
      solution: "Built a full ASP.NET Core MVC platform on SQL Server with a complete admin back-office. Staff manage brands, categories, products (images, dynamic attributes & values), orders and order statuses, navigation menus, page sections (hero / cards / FAQ / rich text), contact info, site settings, news, events, job postings and applications, and incoming messages. The storefront includes cart & checkout, brand landing pages, and a dedicated installment flow (E-get) with a 'Buy on Installments' button on product pages. A 15-item management audit was fully resolved in code: real hotline, real stats, cleaned policies, removed invalid ISO claims, and fixed a product-saving bug in the admin.",
      architecture: "Browser (Razor, RTL/LTR) → ASP.NET Core MVC Controllers (Storefront + Admin area) → Services → EF Core → SQL Server. ASP.NET Identity for admin auth, dynamic CMS sections (ContentBlock / PageSection / NavigationItem), product attribute EAV model, order pipeline (SalesOrder / Details / Status).",
      techStack: ["ASP.NET Core MVC", "C#", "EF Core", "SQL Server", "ASP.NET Identity", "Razor", "JavaScript", "CSS"],
      impact: [
        "One platform for store, brand pages, installments, careers, news & events",
        "Full admin back-office — non-technical staff edit everything",
        "Dynamic product attributes & multi-image product galleries",
        "Cart, checkout & order-status pipeline",
        "Installment-purchase (E-get) guide page + in-product CTA",
        "15/15 management-audit items resolved and verified in code"
      ],
      github: "https://github.com/Amr-Walid/ftd",
      tags: ["ASP.NET Core", "E-Commerce", "CMS", "SQL Server", "C#"]
    },
    {
      id: "social-media-governance-center",
      title: "Social Media Governance Command Center",
      category: "Automation",
      featured: true,
      image: "shield",
      problem: "A multi-brand group of companies (several companies + a factory) had 40–120 social-media accounts across many platforms, with no central registry, no clear owner per account, personal emails holding business pages, and marketing staff creating accounts freely. Nobody knew what existed, who controlled it, or what was being published where — a governance problem far more than a tooling problem.",
      solution: "Researched and engineered a complete governance system: a 20-document playbook (diagnosis, architecture, RACI & permissions, Business Manager setup per platform, build-vs-buy, API limits, security & secrets, SOPs, 90-day plan, KPIs, risk & recovery) plus a deployable self-hosted stack. A PostgreSQL governance schema (digital-asset registry, owners, access grants, approval gates) with protection triggers, Metabase dashboards, n8n automations, Mixpost for publishing, NocoDB, Vaultwarden for credentials, Uptime Kuma and Restic backups — all behind Caddy in Docker Compose. A Flask viewer runs every dashboard query live against a read-only database user, and a FINDINGS log documents real defects caught by actually executing the code.",
      architecture: "Caddy (edge, TLS) → App tier: Metabase, n8n, Mixpost, NocoDB, Vaultwarden, Uptime Kuma, Flask viewer → Data tier: PostgreSQL (governance schema + triggers), MySQL, Redis → Restic encrypted backups. Read-only gov_reader role for dashboards.",
      techStack: ["PostgreSQL / PL/pgSQL", "Docker Compose", "n8n", "Metabase", "Python / Flask", "Caddy", "Vaultwarden", "Shell"],
      impact: [
        "Single source of truth for every account, owner and access grant",
        "Approval gate for new accounts + database-enforced protection triggers",
        "Live governance dashboards executed as real SQL (not mock-ups)",
        "Credentials moved into a self-hosted password vault",
        "20-document playbook from executive summary to SOPs & 90-day rollout",
        "Execution-verified: real defects found and logged by running the stack"
      ],
      github: "https://github.com/Amr-Walid/marketing_acc",
      tags: ["Governance", "PostgreSQL", "n8n", "Metabase", "Docker", "Automation"]
    },
    {
      id: "fleet-pulse-tracking",
      title: "Fleet Pulse — Driver Tracking & Real-Time Alerts (System Design)",
      category: "Full-Stack",
      featured: false,
      status: "System Design",
      image: "truck",
      problem: "A company was tracking its drivers with Life360 — a family app with no stop alerts, no unified dashboard, no export, only 30 days of history and data stored outside Egypt. Management needed to know immediately when a driver stops for more than 30 minutes, even when the phone loses internet coverage.",
      solution: "Produced a full research and architecture package for a purpose-built fleet tracking system: an Android driver app (check-in / check-out only, background tracking with a motion state machine to save battery), an offline-first outbox in SQLite with sequence numbers and priority upload, an idempotent backend that recomputes stops when late data arrives, a Redis-based real-time stop detector with watchdog and Telegram / push escalation, and an Arabic React dashboard with KPIs, driver scores, heatmaps and automatic daily reports — plus Egypt's data-protection law (151/2020) compliance and a cost / roadmap plan (MVP in ~6–7 weeks).",
      architecture: "Android app (Kotlin/Flutter + background geolocation) → SQLite outbox (offline, sequenced) → Backend API (Node/Go) → PostgreSQL + PostGIS + TimescaleDB → Redis driver state + 30s alert timer → Telegram / Push alerts → React (Arabic) dashboard & reports.",
      techStack: ["System Design", "PostgreSQL / PostGIS", "TimescaleDB", "Redis", "Android", "React", "Offline-First"],
      impact: [
        "Real-time alert when a driver stops longer than a configurable threshold",
        "Offline-first: every GPS point stored and replayed in order when back online",
        "Battery-aware motion state machine instead of always-on GPS",
        "Analytics plan: driver score, heatmaps, automatic daily report",
        "Legal review against Egypt's Personal Data Protection Law 151/2020",
        "Costed roadmap: ~$50–200 / month to run for 100 drivers"
      ],
      github: "https://github.com/Amr-Walid/tracking_car",
      tags: ["System Design", "Real-Time", "Geo", "Redis", "Offline-First"]
    },
    {
      id: "greenio-energy-wordpress",
      title: "Greenio — Renewable Energy WordPress Theme",
      category: "Web & WordPress",
      featured: true,
      image: "leaf",
      imageUrls: [
        "/assets/greenio-energy-cover.webp",
        "/assets/greenio-energy-duo.webp",
        "/assets/greenio-energy-services.webp"
      ],
      problem: "A clean-energy company needed a premium, fast landing site that their marketing team could fully edit — logo, CTAs, hero, stats, services and footer — without page builders, paid plugins or a developer for every change.",
      solution: "Designed and developed a fully custom one-page WordPress theme from scratch: an overlapping-card hero (a deep-blue live CO₂ impact card overlapping both the hero and the next section), a 4-icon service grid and a zig-zag 'keep your environment clean' section. All content is editable through Carbon Fields (bundled via Composer, no plugin required): a Theme Options page for global settings and front-page field groups for every section, with graceful fallbacks. Vanilla JS adds live counters, smooth scroll, parallax and micro-interactions.",
      architecture: "WordPress theme (header.php / front-page.php / footer.php) → functions.php (enqueues, menus, theme supports) → Carbon Fields containers (Theme Options + Front Page) → bundled Composer autoload → Vanilla JS (counters, parallax).",
      techStack: ["WordPress", "PHP", "Carbon Fields", "Composer", "Vanilla JS", "CSS3", "Responsive / A11y"],
      impact: [
        "100% custom theme — no page builder, no paid plugins",
        "Every section editable from the WordPress admin",
        "Signature overlapping-card hero with live CO₂ counter",
        "Fully responsive with accessibility in mind",
        "Packaged as an installable theme zip + case study"
      ],
      github: "https://github.com/Amr-Walid/wordpress-project1",
      tags: ["WordPress", "PHP", "Carbon Fields", "Landing Page"]
    },
    {
      id: "greenio-honey-wordpress",
      title: "Greenio Honey & Teas — Organic Store WordPress Theme",
      category: "Web & WordPress",
      featured: true,
      image: "leaf",
      imageUrls: [
        "/assets/greenio-honey-showcase.webp",
        "/assets/greenio-honey-mockup.webp"
      ],
      problem: "An organic brand selling raw honey varieties and herbal teas wanted a warm, premium storefront where they can manage products, prices, ingredients and promotions themselves — without being locked into a heavy page builder.",
      solution: "Built a premium organic e-commerce showcase theme from scratch with a custom post type (organic_product + product_type taxonomy), product detail pages (price / old price, rating, weight, origin, ingredients, benefits repeater) and a shop archive. A Carbon Fields front-page builder controls the hero slider, features band, featured-products association, values, testimonials, trust badges and CTA strip, while Theme Options handle branding, header, contact and footer. Honey-amber / cream / forest-green brand system.",
      architecture: "WordPress → Custom Post Type organic_product (+ taxonomy) → Carbon Fields (Theme Options, Front Page Builder, Product Details) → front-page / single / archive templates → responsive CSS + JS.",
      techStack: ["WordPress", "PHP", "Carbon Fields", "Custom Post Types", "JavaScript", "CSS3"],
      impact: [
        "Custom product catalogue with sale prices, ratings & ingredients",
        "Drag-free front-page builder for every homepage section",
        "Clean brand system tailored for organic food",
        "Fully responsive storefront and product pages"
      ],
      github: "https://github.com/Amr-Walid/wordpress2",
      tags: ["WordPress", "E-Commerce", "Custom Post Types", "PHP"]
    },
    {
      id: "aerowind-energy-wordpress",
      title: "AeroWind Energy — Wind Turbines WordPress Theme",
      category: "Web & WordPress",
      featured: false,
      image: "wind",
      imageUrls: [
        "/assets/aerowind-showcase.webp",
        "/assets/aerowind-mockup.webp",
        "/assets/aerowind-theme.webp"
      ],
      problem: "A residential wind-energy brand (home turbines and micro-power systems) needed a corporate site that showcases its turbine range with technical specs and captures leads — fully manageable from WordPress.",
      solution: "Developed a fully responsive custom theme with a Sky-Blue / Navy identity: hero, zig-zag intro, 'Why Wind' card grid, turbines grid driven by a custom post type (aerowind_turbine) with dedicated detail pages (price, rated power, rotor diameter, cut-in wind speed, value), an outstanding-features band, Google 5-star testimonial and a working lead-capture form (name, email, phone, average bill, message). All content comes from Carbon Fields with a full Theme Options page; ACF is auto-deactivated to guarantee a clean environment.",
      architecture: "WordPress → CPT aerowind_turbine + single template → Carbon Fields (Theme Options + front-page metaboxes) → lead form handler → responsive design system (Poppins + Inter).",
      techStack: ["WordPress", "PHP", "Carbon Fields", "Custom Post Types", "Lead Forms", "CSS3"],
      impact: [
        "Turbine catalogue with technical specification pages",
        "Working lead-capture form for sales enquiries",
        "Announcement bar, header phone & CTA all editable",
        "Responsive design with mobile hamburger navigation"
      ],
      github: "https://github.com/Amr-Walid/wordpress3",
      tags: ["WordPress", "Corporate Site", "Lead Generation", "PHP"]
    },
    {
      id: "qrcard-pro",
      title: "QRCard Pro — Smart Digital Business Card Generator",
      category: "Web & WordPress",
      featured: false,
      image: "qrcode",
      problem: "Paper business cards get lost and go out of date. Professionals wanted a fast, Arabic-first way to create a premium digital card with all their contact details and links, and share it instantly with a QR code — with no app to install and no backend to maintain.",
      solution: "Built a single-file, Arabic (RTL) web app that lets anyone fill in their details and social links and instantly generates a luxurious digital business card with a scannable QR code. The card data is encoded into the shareable link itself, so the card renders anywhere without a server or database. Deployed for free on GitHub Pages.",
      architecture: "Static HTML / CSS / JS (single file) → form → data encoded into URL → QR code generation → card view rendered client-side from the link → GitHub Pages hosting.",
      techStack: ["HTML5", "CSS3", "JavaScript", "QR Code", "RTL / Arabic UI", "GitHub Pages"],
      impact: [
        "Create and share a digital card in seconds",
        "Zero backend — card data lives inside the link",
        "Arabic-first, mobile-friendly premium design",
        "Free static hosting on GitHub Pages"
      ],
      github: "https://github.com/Amr-Walid/qrhtml",
      website: "https://amr-walid.github.io/qrhtml/",
      tags: ["Web App", "QR", "RTL", "JavaScript"]
    }
  ],

  experience: [
    {
      title: "Software Engineer",
      type: "Uni Group",
      period: "Oct 2025 — Present",
      current: true,
      award: "Best Employee of the Month — August 2026",
      description: "Building the internal software, data and automation behind a multi-company group: business systems, customer platforms, marketing automation and digital-asset governance — from requirements to production.",
      highlights: [
        "Designed and built the multi-tenant UniGroup CRM on ASP.NET Core (Clean Architecture)",
        "Delivered business systems end to end: POS, asset tracking & support desk, e-commerce / CMS",
        "Automated WhatsApp marketing campaigns with RFM customer segmentation",
        "Engineered a governance system for the group's social-media accounts (PostgreSQL, n8n, Metabase)",
        "Recognised as Best Employee of the Month (August 2026)"
      ]
    },
    {
      title: "Microsoft Data Engineer — Trainee",
      type: "Digital Egypt Pioneers Initiative (DEPI) · MCIT",
      period: "Nov 2025 — Jul 2026",
      award: "Certificate of Achievement — Microsoft Data Engineer track",
      description: "Completed the national Microsoft Data Engineer track sponsored by Egypt's Ministry of Communications & IT, delivered with eYouth and Berlitz.",
      highlights: [
        "Built ETL / ELT pipelines with SQL, Python and Spark",
        "Azure data stack: ADLS Gen2, Delta Lake, lakehouse design",
        "Capstone: CryptoPulse — real-time crypto lakehouse (Kafka, Spark, dbt, Airflow)",
        "Data modeling and warehouse design for analytics"
      ]
    },
    {
      title: "Data Engineering Instructor",
      type: "Applied Statistics Lab (ASL) · FEPS, Cairo University",
      period: "2026 — Aug 2026",
      award: "Outstanding Instructor — Certificate of Excellence",
      description: "Taught an intensive technical program in statistical programming, database management and quantitative modeling, helping students move from data analysis to building data systems.",
      highlights: [
        "Taught SQL, Python and data-pipeline concepts",
        "Explained ETL / ELT architecture and data-workflow design",
        "Mentored students through hands-on data projects",
        "Awarded Outstanding Instructor + Certificate of Appreciation (July 2026)"
      ]
    },
    {
      title: "Data Analyst Intern",
      type: "EMAM Organization for Development and Culture",
      period: "2025",
      description: "Conducted statistical research focused on environmental data and policy insights.",
      highlights: [
        "Collected, cleaned and analyzed environmental datasets",
        "Applied regression and hypothesis testing",
        "Built analytical reports and visualizations"
      ]
    },
    {
      title: "Statistical Data Trainee",
      type: "Central Agency for Public Mobilization and Statistics (CAPMAS)",
      period: "2025",
      description: "Completed a training program at Egypt's national statistical agency.",
      highlights: [
        "Worked with survey datasets and statistical indicators",
        "Learned official statistics methodologies",
        "Practiced data reporting and analysis"
      ]
    },
    {
      title: "Bachelor's Degree in Economics — Graduate",
      type: "Faculty of Economics & Political Science, Cairo University",
      period: "2022 — Jun 2026",
      education: true,
      description: "Graduated in June 2026, combining economic theory with strong statistical and analytical skills to understand and interpret real-world data.",
      highlights: [
        "Econometric and statistical techniques on economic datasets",
        "Solid foundations in probability, statistics and data analysis",
        "Projects in data cleaning, analysis and visualization",
        "Analytical thinking for economic trends and relationships"
      ]
    }
  ],

  certifications: [
    {
      title: "Best Employee of the Month",
      issuer: "Uni Group",
      date: "August 2026",
      kind: "Award",
      image: "/assets/cert-unigroup-best-employee.webp",
      description: "Awarded by Uni Group in recognition of outstanding performance during August 2026."
    },
    {
      title: "Outstanding Instructor — Certificate of Excellence",
      issuer: "Applied Statistics Lab · FEPS, Cairo University",
      date: "July 2026",
      kind: "Award",
      image: "/assets/cert-asl-outstanding-instructor.webp",
      description: "For exceptional teaching, mentorship and leadership in statistical programming, database management and quantitative modeling."
    },
    {
      title: "Microsoft Data Engineer — Certificate of Achievement",
      issuer: "Digital Egypt Pioneers (DEPI) · MCIT",
      date: "Nov 2025 – Jul 2026",
      kind: "Certificate",
      image: "/assets/cert-depi-data-engineer.webp",
      description: "Completed the core learning outcomes of the Digital Egypt Pioneers Program — Microsoft Data Engineer track."
    },
    {
      title: "Certificate of Appreciation",
      issuer: "Applied Statistics Lab · FEPS, Cairo University",
      date: "July 2026",
      kind: "Certificate",
      image: "/assets/cert-asl-appreciation.webp",
      description: "In appreciation of dedicated instruction and support in the intensive technical program."
    },
    {
      title: "Get Started with Lakehouses in Microsoft Fabric",
      issuer: "Microsoft Learn",
      date: "January 2026",
      kind: "Training",
      description: "Microsoft Fabric lakehouse architecture: ingestion, transformation and storage patterns."
    },
    {
      title: "DP-700: Fabric Data Engineer Associate",
      issuer: "Microsoft Certified",
      date: "In Progress",
      kind: "Certification",
      description: "Designing and implementing data solutions with Microsoft Fabric: pipelines, lakehouses and warehouses."
    }
  ]
};

// ---------------------------------------------------------------------------
// Presentation layer: ordering, one-line card summaries, stats & services.
// Keeps the long-form case-study content above untouched and easy to edit.
// ---------------------------------------------------------------------------

/** Display order on the site (strongest / most recent work first). */
const projectOrder = [
  "cryptopulse-azure-lakehouse",
  "retail-pos-system",
  "ftd-techzone-ecommerce",
  "asset-tracking-system",
  "ai-powered-nextjs-dashboard",
  "social-media-governance-center",
  "whatsapp-marketing-system",
  "sql-server-data-warehouse",
  "unigroup-crm",
  "m365-project-management-system",
  "real-time-stock-pipeline",
  "greenio-energy-wordpress",
  "greenio-honey-wordpress",
  "aerowind-energy-wordpress",
  "fleet-pulse-tracking",
  "payment-bg-analytics-dashboard",
  "crypto-etl-pipeline",
  "docker-etl-pipeline",
  "adventure-works-dashboard",
  "qrcard-pro"
];

/** Short, scannable one-liners shown on project cards. */
const projectSummaries: Record<string, string> = {
  "cryptopulse-azure-lakehouse": "Kafka → Spark → Delta Lake on Azure with dbt, Airflow, FinBERT sentiment and a live Next.js dashboard.",
  "retail-pos-system": "Arabic RTL point-of-sale with barcode scanning, discounts, returns, receipts, audit log and 179 passing tests.",
  "ftd-techzone-ecommerce": "Electronics store + corporate CMS with a full admin back-office, installments, careers, news and events.",
  "asset-tracking-system": "Full asset lifecycle, custody, maintenance and support tickets with SignalR, Hangfire and QR tags.",
  "ai-powered-nextjs-dashboard": "Arabic analytics dashboard with a streaming Gemini AI assistant that answers questions about the data.",
  "social-media-governance-center": "Registry, ownership, approvals and live dashboards for 40–120 social accounts — self-hosted in Docker.",
  "whatsapp-marketing-system": "RFM-segmented WhatsApp campaigns with throttled, anti-ban sending and order-funnel tracking.",
  "sql-server-data-warehouse": "Medallion (Bronze → Silver → Gold) warehouse in T-SQL with a star-schema data mart.",
  "unigroup-crm": "Multi-tenant CRM on Clean Architecture with role-based access and per-unit data isolation.",
  "m365-project-management-system": "Forms + Power Automate + SharePoint + Excel/DAX — fully automated projects, attendance and KPIs.",
  "real-time-stock-pipeline": "Event-driven pipeline: MongoDB Change Streams trigger analytics served by FastAPI, all in Docker.",
  "greenio-energy-wordpress": "Custom WordPress theme with an overlapping-card hero, live CO₂ counter and Carbon Fields CMS.",
  "greenio-honey-wordpress": "Organic honey & teas storefront theme with a product CPT and a front-page builder.",
  "aerowind-energy-wordpress": "Wind-turbine corporate theme with spec pages and a working lead-capture form.",
  "fleet-pulse-tracking": "Offline-first driver tracking with real-time stop alerts — full architecture, legal and cost plan.",
  "payment-bg-analytics-dashboard": "Payment-cycle and bank-guarantee risk dashboards in Excel with Power Query and DAX.",
  "crypto-etl-pipeline": "Hourly CoinGecko ETL running 24/7 on GitHub Actions, building a growing time-series dataset.",
  "docker-etl-pipeline": "Reproducible Python → PostgreSQL ETL, spun up with a single docker compose up.",
  "adventure-works-dashboard": "Interactive Excel sales dashboard with Power Query, data model, slicers and timelines.",
  "qrcard-pro": "Arabic digital business-card generator with QR sharing — zero backend, hosted on GitHub Pages."
};

const orderedProjects = projectOrder
  .map((id) => basePortfolio.projects.find((p: any) => p.id === id))
  .filter(Boolean)
  .concat(basePortfolio.projects.filter((p: any) => !projectOrder.includes(p.id)))
  .map((p: any) => ({ ...p, summary: projectSummaries[p.id] || "" }));

export const portfolioData = {
  ...basePortfolio,
  projects: orderedProjects,
  stats: [
    { value: orderedProjects.length, suffix: "+", label: "Projects shipped" },
    { value: 4, suffix: "", label: "Engineering domains" },
    { value: 179, suffix: "", label: "Automated tests in one system" },
    { value: 15, suffix: "", label: "Docker services in one stack" }
  ],
  categories: ["Full-Stack", "Data Engineering", "Automation", "Data Analysis", "Web & WordPress"],
  techMarquee: [
    "Python", "SQL", "C#", "ASP.NET Core", "EF Core", "SQL Server", "PostgreSQL", "MongoDB",
    "Apache Kafka", "Apache Spark", "Delta Lake", "Airflow", "dbt", "Azure", "Docker",
    "FastAPI", "Next.js", "React", "TypeScript", "Power BI", "DAX", "Power Automate",
    "WordPress", "PHP", "GitHub Actions", "Redis", "n8n", "Metabase"
  ],
  process: [
    { step: "01", title: "Discover", text: "I map the real problem: the manual process, the messy data, the decisions that need to be faster." },
    { step: "02", title: "Design", text: "Architecture, data model and screens agreed up-front — the simplest system that solves it." },
    { step: "03", title: "Build", text: "Clean, tested code with roles, validation, audit logs and documentation baked in." },
    { step: "04", title: "Ship & Support", text: "Deployed, monitored and handed over with training — then improved with real feedback." }
  ]
};
