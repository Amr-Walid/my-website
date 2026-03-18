export const portfolioData = {
  personal: {
    name: "Amr Walid",
    title: "Data Engineer & Analyst",
    headline: "Building Scalable Data Pipelines & Analytics Infrastructure",
    tagline: "From raw extraction to strategic insights. I build scalable ETL pipelines and design dynamic dashboards that drive data-informed decisions.",
    email: "amr.walid2022@feps.edu.eg",
    location: "Cairo, Egypt",
    linkedin: "https://www.linkedin.com/in/amrwalidmaher",
    github: "https://github.com/Amr-Walid",
    avatar: "https://avatars.githubusercontent.com/u/Amr-Walid"
  },
  summary: `Data Engineer with a deep focus on building and maintaining robust, scalable data pipelines. I specialize in the complete data lifecycle — from extraction and transformation to orchestration and delivery — ensuring data is not only accessible but actionable. My expertise spans ETL/ELT design, data modeling, workflow automation, and cloud-native data architectures. I combine strong engineering fundamentals with analytical thinking to build systems that turn raw data into strategic business assets.`,

  skills: {
    "Data Engineering": [
      { name: "ETL/ELT Pipeline Design", level: 90 },
      { name: "Data Modeling", level: 85 },
      { name: "Data Warehousing", level: 85 },
      { name: "Workflow Orchestration", level: 80 },
      { name: "Data Quality & Testing", level: 80 },
      { name: "Stream Processing", level: 75 }
    ],
    "Languages & Frameworks": [
      { name: "Python", level: 92 },
      { name: "SQL", level: 90 },
      { name: "PySpark", level: 80 },
      { name: "Pandas", level: 90 },
      { name: "Bash / Shell", level: 75 }
    ],
    "Cloud & Infrastructure": [
      { name: "Docker", level: 85 },
      { name: "GitHub Actions (CI/CD)", level: 88 },
      { name: "Google BigQuery", level: 80 },
      { name: "AWS Redshift", level: 75 },
      { name: "Microsoft Fabric", level: 70 }
    ],
    "Data Platforms & Tools": [
      { name: "Apache Airflow", level: 80 },
      { name: "Apache Spark", level: 78 },
      { name: "dbt", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "Git & Version Control", level: 92 }
    ],
    "BI & Visualization": [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 78 },
      { name: "Looker Studio", level: 75 },
      { name: "Excel (Advanced)", level: 90 },
      { name: "Power Query", level: 88 }
    ]
  },

  projects: [
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
      title: "Junior Data Engineer",
      type: "Self-Directed Professional Development",
      period: "2024 — Present",
      description: "Building production-grade data engineering projects focused on automation and modern data architectures.",
      highlights: [
        "Automated ETL pipelines with CI/CD",
        "Built containerized workflows with Docker",
        "Developed data models and analytics dashboards"
      ]
    },
    {
      title: "Economics Student — Data Engineering Focus",
      type: "Faculty of Economics & Political Science, Cairo University",
      period: "2022 — Present",
      description: "Combining economic analysis with modern data infrastructure skills.",
      highlights: [
        "Applied statistical analysis to economic datasets",
        "Self-taught Python, SQL, and the modern data stack",
        "Built data-driven projects bridging economics and engineering"
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
