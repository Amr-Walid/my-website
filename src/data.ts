export const portfolioData = {
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
      category: "Data Engineering",
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
    }
  ],

  experience: [
    {
      title: "Data Engineering Instructor",
      type: "Applied Statistics Lab (ASL)",
      period: "2026 — Present",
      description: "Teaching the fundamentals of modern data engineering and helping students transition from data analysis to building scalable data systems.",
      highlights: [
        "Teaching SQL, Python, and data pipeline concepts",
        "Explaining ETL / ELT architecture and data workflow design",
        "Guiding students through hands-on data engineering projects",
        "Introducing real-world data engineering practices and tools"
      ]
    },
    {
      title: "Data Engineer Trainee",
      type: "Digital Egypt Pioneers Initiative",
      period: "2025 — Present",
      description: "Selected for the national Data Engineering program focused on modern data infrastructure and analytics systems.",
      highlights: [
        "Building ETL / ELT pipelines using SQL and Python",
        "Learning data modeling and warehouse design",
        "Working with real-world data engineering scenarios",
        "Developing structured data solutions for analytics"
      ]
    },
    {
      title: "Data Analyst Intern",
      type: "EMAM Organization for Development and Culture",
      period: "2025 — 2025",
      description: "Conducted statistical research focused on environmental data and policy insights.",
      highlights: [
        "Collected, cleaned, and analyzed environmental datasets",
        "Applied regression and hypothesis testing",
        "Built analytical reports and visualizations"
      ]
    },
    {
      title: "Statistical Data Trainee",
      type: "Central Agency for Public Mobilization and Statistics (CAPMAS)",
      period: "2025 — 2025",
      description: "Completed a training program at Egypt’s national statistical agency.",
      highlights: [
        "Worked with survey datasets and statistical indicators",
        "Learned official statistics methodologies",
        "Practiced data reporting and analysis"
      ]
    },
    {
      title: "Economics & Statistics Student",
      type: "Faculty of Economics & Political Science, Cairo University",
      period: "2022 — Present",
      description: "Combining economic theory with strong statistical and analytical skills to understand and interpret real-world data.",
      highlights: [
        "Applied econometric and statistical techniques on economic datasets",
        "Developed solid foundations in probability, statistics, and data analysis",
        "Worked on projects involving data cleaning, analysis, and visualization",
        "Built analytical thinking for interpreting economic trends and relationships"
      ]
    }
  ],

  certifications: [
    {
      title: "Get Started with Lakehouses in Microsoft Fabric",
      issuer: "Microsoft",
      date: "January 2026",
      icon: "microsoft",
      description: "Completed training on Microsoft Fabric lakehouse architecture, covering data ingestion, transformation, and storage patterns in the Microsoft data ecosystem.",
      credential: "Microsoft Learn"
    },
    {
      title: "DP-700: Fabric Data Engineer Associate",
      issuer: "Microsoft",
      date: "In Progress",
      icon: "microsoft",
      description: "Preparing for the DP-700 certification exam, focused on designing and implementing data solutions with Microsoft Fabric, including data pipelines, lakehouses, and data warehouses.",
      credential: "Microsoft Certified"
    }
  ]
};
