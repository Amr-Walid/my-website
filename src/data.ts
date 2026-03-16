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
      id: "simple-orchestrator",
      title: "Simple Task Orchestrator (DAG Engine)",
      category: "Data Engineering",
      featured: false,
      image: "sitemap",
      problem: "Data pipelines consist of interdependent tasks that must execute in a specific order. Without proper orchestration, managing dependencies, execution order, and failure handling becomes chaotic.",
      solution: "Built a lightweight task orchestrator from scratch using Python, implementing core computer science concepts: Directed Acyclic Graphs (DAGs) for dependency mapping, Topological Sort for execution ordering, Queues for task scheduling, and Dictionaries for fast state lookups. A miniature Airflow built from first principles.",
      architecture: "Task Definitions (JSON) → DAG Builder (Graphs) → Topological Sort → Queue-based Executor → State Management (Dictionaries)",
      techStack: ["Python", "Data Structures", "Algorithms", "Graphs", "Topological Sort", "JSON"],
      impact: [
        "Demonstrates deep understanding of orchestration internals",
        "Implements core Airflow concepts from scratch",
        "Handles complex task dependencies correctly",
        "Educational reference for DAG-based pipeline design"
      ],
      github: "https://github.com/Amr-Walid",
      tags: ["Orchestration", "Algorithms", "DAG", "Python", "Architecture"]
    },
    {
      id: "git-mastery",
      title: "Git & Version Control Mastery",
      category: "DevOps",
      featured: false,
      image: "code-branch",
      problem: "Many data professionals lack structured version control practices, leading to lost work, merge conflicts, and untracked changes in data pipeline codebases.",
      solution: "Completed an intensive hands-on project covering the full Git lifecycle: repository initialization, branching strategies, merge conflict resolution, feature branches, atomic commits, and remote synchronization with GitHub.",
      architecture: "Local Git → Feature Branches → Merge Strategies → Remote GitHub → Collaboration Workflows",
      techStack: ["Git", "GitHub", "Version Control", "Branching Strategies"],
      impact: [
        "Mastered feature-branch workflow used in production teams",
        "Practiced atomic commits for clean project history",
        "Resolved merge conflicts in complex branching scenarios",
        "Foundation for all CI/CD pipeline development"
      ],
      github: "https://github.com/Amr-Walid/git-mastery-project",
      tags: ["Git", "Version Control", "DevOps", "Best Practices"]
    }
  ],

  experience: [
    {
      title: "Junior Data Engineer",
      type: "Self-Directed Professional Development",
      period: "2024 — Present",
      description: "Building production-grade data engineering projects focused on ETL pipeline design, containerization, workflow automation, and cloud-native data architectures. Actively developing expertise across the modern data stack.",
      highlights: [
        "Designed and deployed automated ETL pipelines with CI/CD using GitHub Actions",
        "Built containerized data workflows with Docker and PostgreSQL",
        "Implemented data modeling and BI solutions using Power BI and Excel",
        "Studying for Microsoft DP-700 (Fabric Data Engineer) certification"
      ]
    },
    {
      title: "Economics Student — Data Engineering Focus",
      type: "Faculty of Economics & Political Science, Cairo University",
      period: "2022 — Present",
      description: "Pursuing an economics degree with a self-directed specialization in data engineering. Combining quantitative economic analysis with modern data infrastructure skills.",
      highlights: [
        "Applied statistical analysis and data modeling to economic datasets",
        "Self-taught Python, SQL, and the modern data stack alongside academic studies",
        "Built data-driven projects that bridge economics and engineering",
        "Active in data engineering communities and continuous learning"
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
  ],

  blogPosts: [
    {
      id: "building-automated-etl-pipeline",
      title: "How I Built a Self-Updating ETL Pipeline with GitHub Actions",
      excerpt: "A deep dive into designing a fully automated cryptocurrency data pipeline that runs 24/7 without manual intervention, using Python, Pandas, and GitHub Actions as a free orchestration layer.",
      date: "2026-01-15",
      readTime: "8 min read",
      tags: ["ETL", "GitHub Actions", "Python", "Automation"],
      category: "Data Engineering"
    },
    {
      id: "docker-for-data-engineers",
      title: "Why Every Data Engineer Should Containerize Their Pipelines",
      excerpt: "How Docker transforms fragile data pipelines into reproducible, portable systems. A practical guide with real examples from building a Dockerized ETL pipeline with PostgreSQL.",
      date: "2026-02-01",
      readTime: "6 min read",
      tags: ["Docker", "DevOps", "ETL", "PostgreSQL"],
      category: "Data Engineering"
    },
    {
      id: "data-structures-for-orchestration",
      title: "The Data Structures Behind Airflow: Building an Orchestrator from Scratch",
      excerpt: "Understanding how Graphs, Topological Sort, and Queues power modern workflow orchestrators like Apache Airflow — by building a simplified version from first principles.",
      date: "2026-01-28",
      readTime: "10 min read",
      tags: ["Algorithms", "Airflow", "Python", "Architecture"],
      category: "Engineering Deep Dives"
    }
  ]
};
