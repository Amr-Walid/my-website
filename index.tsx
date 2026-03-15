import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// ==================== DATA LAYER ====================
const portfolioData = {
  personal: {
    name: "Amr Walid",
    title: "Data Engineer",
    headline: "Building Scalable Data Pipelines & Analytics Infrastructure",
    tagline: "I transform raw, chaotic data into structured, reliable assets that power business decisions.",
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
      imageUrl: "assets/project-etl.png",
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
      imageUrl: "assets/project-workflow.png",
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
      imageUrls: ["assets/project-sales.png", "assets/project-sales-new.png"],
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
}

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

// ==================== HTML RENDERER ====================
const renderPage = () => {
  return `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amr Walid | Data Engineer — Pipelines, Automation & Analytics</title>
  <meta name="description" content="Data Engineer specializing in building scalable data pipelines, ETL automation, and analytics infrastructure. Python, SQL, Spark, Docker, Airflow.">
  <meta name="keywords" content="Data Engineer, ETL, Data Pipeline, Python, SQL, Spark, Airflow, Docker, Power BI, Portfolio">
  <meta name="author" content="Amr Walid">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Amr Walid | Data Engineer">
  <meta property="og:description" content="Building scalable data pipelines, automation systems, and analytics infrastructure.">
  <meta property="og:type" content="website">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#9881;</text></svg>">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Icons -->
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" rel="stylesheet">
  
  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          },
          colors: {
            brand: {
              50: '#eef7ff',
              100: '#d9ecff',
              200: '#bcdfff',
              300: '#8eccff',
              400: '#59b0ff',
              500: '#3b8fff',
              600: '#1b6ff5',
              700: '#1459e1',
              800: '#1748b6',
              900: '#193f8f',
              950: '#142857'
            },
            accent: {
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7'
            }
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'slide-up': 'slideUp 0.6s ease-out',
            'slide-down': 'slideDown 0.3s ease-out',
            'fade-in': 'fadeIn 0.8s ease-out',
            'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite'
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
            },
            slideUp: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideDown: {
              '0%': { opacity: '0', transform: 'translateY(-10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
            }
          }
        }
      }
    }
  </script>
  <style>
    * { scrollbar-width: thin; scrollbar-color: #3b8fff #1e293b; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #3b8fff; border-radius: 3px; }
    
    .gradient-text {
      background: linear-gradient(135deg, #3b8fff 0%, #38bdf8 50%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .glass {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 143, 255, 0.1);
    }
    
    .glass-light {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    
    .card-hover {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 60px -12px rgba(59, 143, 255, 0.25);
    }
    
    .hero-gradient {
      background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 143, 255, 0.15), transparent),
                  radial-gradient(ellipse 60% 40% at 80% 50%, rgba(56, 189, 248, 0.08), transparent);
    }
    
    .hero-gradient-light {
      background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 143, 255, 0.08), transparent),
                  radial-gradient(ellipse 60% 40% at 80% 50%, rgba(56, 189, 248, 0.05), transparent);
    }
    
    .skill-bar {
      background: linear-gradient(90deg, #3b8fff, #38bdf8);
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes flow {
      0% { background-position: 0% 0%; }
      100% { background-position: 0% 100%; }
    }
    
    .pipeline-line {
      background: linear-gradient(180deg, #3b8fff, #38bdf8, #818cf8, #3b8fff);
      background-size: 100% 200%;
      animation: flow 3s linear infinite;
    }
    
    .glow {
      box-shadow: 0 0 40px rgba(59, 143, 255, 0.15);
    }
    
    .tag {
      transition: all 0.2s ease;
    }
    .tag:hover {
      background: rgba(59, 143, 255, 0.2);
      transform: scale(1.05);
    }

    [data-animate] {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    [data-animate].visible {
      opacity: 1;
      transform: translateY(0);
    }

    .nav-link {
      position: relative;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b8fff, #38bdf8);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after, .nav-link.active::after {
      width: 100%;
    }

    .light .glass {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    
    @keyframes gridMove {
      0% { transform: translate(0, 0); }
      100% { transform: translate(40px, 40px); }
    }
    .grid-bg {
      background-image: radial-gradient(circle, rgba(59,143,255,0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      animation: gridMove 20s linear infinite;
    }
    .dark .grid-bg {
      background-image: radial-gradient(circle, rgba(59,143,255,0.12) 1px, transparent 1px);
    }
  </style>
</head>
<body class="bg-white text-slate-900 font-sans antialiased transition-colors duration-500">
  
  <!-- ============ NAVIGATION ============ -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            AW
          </div>
          <div class="hidden sm:block">
            <span class="font-bold text-lg text-slate-900">Amr Walid</span>
            <span class="block text-xs text-brand-400 font-mono -mt-0.5">Data Engineer</span>
          </div>
        </a>
        
        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a href="#about" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">About</a>
          <a href="#projects" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Projects</a>
          <a href="#experience" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Experience</a>
          <a href="#certifications" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Certifications</a>
          <a href="#blog" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors">Blog</a>
          <a href="#contact" class="ml-4 px-5 py-2.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5">
            Let's Talk
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-3 md:hidden">
          <button id="mobileMenuBtn" class="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-slate-700">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden md:hidden glass glass-light animate-slide-down">
      <div class="px-4 py-6 space-y-1">
        <a href="#about" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">About</a>
        <a href="#projects" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Projects</a>
        <a href="#experience" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Experience</a>
        <a href="#certifications" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Certifications</a>
        <a href="#blog" class="block px-4 py-3 rounded-xl text-gray-600 hover:bg-brand-500/10 hover:text-brand-400 transition-colors font-medium">Blog</a>
        <a href="#contact" class="block px-4 py-3 mt-4 bg-gradient-to-r from-brand-600 to-accent-500 text-white text-center rounded-xl font-semibold">Let's Talk</a>
      </div>
    </div>
  </nav>

  <!-- ============ HERO SECTION ============ -->
  <section id="hero" class="relative min-h-screen flex items-start lg:items-center justify-center hero-gradient overflow-hidden pt-32 lg:pt-0 pb-20">
    <div class="grid-bg absolute inset-0 opacity-60"></div>
    
    <!-- Floating Elements -->
    <div class="absolute top-1/4 left-10 w-3 h-3 bg-brand-500 rounded-full animate-float opacity-40"></div>
    <div class="absolute top-1/3 right-20 w-2 h-2 bg-accent-400 rounded-full animate-float opacity-30" style="animation-delay: 2s"></div>
    <div class="absolute bottom-1/3 left-1/4 w-4 h-4 bg-brand-400/20 rounded-full animate-float" style="animation-delay: 4s"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Column -->
        <div class="space-y-8 animate-slide-up order-last lg:order-first">
          <!-- Status Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/5 border border-brand-500/10">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-brand-600">Open to Opportunities</span>
          </div>
          
          <!-- Heading -->
          <div>
            <p class="text-lg sm:text-xl text-gray-500 font-medium mb-3">Hi, I'm</p>
            <h1 class="text-[clamp(2.75rem,9vw,4.5rem)] sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight whitespace-nowrap">
              <span class="text-slate-900">Amr</span>
              <span class="gradient-text"> Walid</span>
            </h1>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mt-3">
              Data Engineer
            </h2>
          </div>
          
          <!-- Tagline -->
          <p class="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl">
            I build <span class="text-brand-400 font-semibold">scalable data pipelines</span>, 
            <span class="text-accent-400 font-semibold">automation systems</span>, and 
            <span class="text-purple-400 font-semibold">analytics infrastructure</span> 
            that turn raw data into strategic business assets.
          </p>
          
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Python</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">SQL</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Spark</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Docker</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Airflow</span>
            <span class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-mono border border-gray-200">Power BI</span>
          </div>
          
          <!-- CTAs -->
          <div class="flex flex-wrap gap-4">
            <a href="#projects" class="group px-7 py-3.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-1 flex items-center gap-2">
              View My Work
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="https://github.com/Amr-Walid" target="_blank" class="px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-brand-500/50 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-sm">
              <i class="fab fa-github"></i>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-brand-500/50 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-sm">
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
        
        <!-- Right Column — Profile Picture -->
        <div class="relative flex items-center justify-center order-first lg:order-last mb-8 lg:mb-0">
          <div class="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto">
            <!-- Decorative rings -->
            <div class="absolute inset-0 border border-brand-500/30 rounded-full animate-spin-slow" style="animation-duration: 15s;"></div>
            <div class="absolute inset-4 border border-accent-500/20 rounded-full animate-[spin_20s_linear_reverse]"></div>
            
            <!-- Profile Image Container -->
            <div class="absolute inset-8 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-brand-500/20 glass">
              <img src="/assets/profile.jpg" alt="Amr Walid" class="w-full h-full object-cover object-[center_top]" />
            </div>

            <!-- Floating tech icons -->
            <div class="absolute top-0 right-10 w-12 h-12 bg-slate-800 rounded-xl shadow-lg flex items-center justify-center animate-float border border-slate-700 p-2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-full h-full" />
            </div>
            <div class="absolute bottom-10 left-0 w-12 h-12 bg-slate-800 rounded-xl shadow-lg flex items-center justify-center animate-float border border-slate-700 p-2" style="animation-delay: 1.5s;">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#about" class="dark:text-gray-500 text-gray-400 hover:text-brand-400 transition-colors">
        <i class="fas fa-chevron-down text-xl"></i>
      </a>
    </div>
  </section>

  <!-- ============ ABOUT SECTION ============ -->
  <section id="about" class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-5 gap-16 items-start" data-animate>
        <div class="lg:col-span-3 space-y-6">
          <div>
            <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// About Me</p>
            <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
              Turning Raw Data Into
              <span class="gradient-text"> Strategic Assets</span>
            </h2>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed">
            I'm a Data Engineer based in Cairo, Egypt, with a deep focus on building and maintaining robust, scalable data pipelines. I specialize in the complete data lifecycle — from extraction and transformation to orchestration and delivery — ensuring data is not only accessible but actionable.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            My expertise spans <strong class="dark:text-white text-slate-900">ETL/ELT design</strong>, <strong class="dark:text-white text-slate-900">data modeling</strong>, <strong class="dark:text-white text-slate-900">workflow automation</strong>, and <strong class="dark:text-white text-slate-900">cloud-native data architectures</strong>. I combine strong engineering fundamentals with analytical thinking to build systems that turn raw data into strategic business assets.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Currently studying Economics at Cairo University's Faculty of Economics & Political Science, I bring a unique perspective that bridges quantitative analysis with modern data infrastructure engineering.
          </p>
        </div>
        
        <!-- Stats -->
        <div class="lg:col-span-2 grid grid-cols-2 gap-4">
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">5+</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">Data Projects</div>
          </div>
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">10+</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">Technologies</div>
          </div>
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">3+</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">ETL Pipelines</div>
          </div>
          <div class="glass glass-light rounded-2xl p-6 text-center card-hover">
            <div class="text-3xl font-black gradient-text">1</div>
            <div class="text-sm text-gray-500 mt-1 font-medium">Certification</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PROJECTS SECTION ============ -->
  <section id="projects" class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Featured Work</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Project <span class="gradient-text">Case Studies</span>
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Real-world data engineering projects with documented architectures, tech decisions, and measurable impact.</p>
      </div>
      
      <!-- Project Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12" data-animate>
        <button class="filter-btn active px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="all">All Projects</button>
        <button class="filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="Data Engineering">Data Engineering</button>
        <button class="filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="Data Analysis">Data Analysis</button>
        <button class="filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all" data-filter="DevOps">DevOps</button>
      </div>
      
      <!-- Project Cards -->
      <div id="projectsGrid" class="grid lg:grid-cols-2 gap-8">
        <!-- Cards injected by JS -->
      </div>
    </div>
  </section>

  <!-- ============ EXPERIENCE SECTION ============ -->
  <section id="experience" class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Career Path</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Experience <span class="gradient-text">Timeline</span>
        </h2>
      </div>
      
      <div class="relative" data-animate>
        <!-- Timeline Line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 pipeline-line hidden sm:block"></div>
        
        <!-- Timeline Item 1 -->
        <div class="relative flex gap-6 sm:gap-10 mb-12">
          <div class="hidden sm:flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center z-10 shadow-lg shadow-brand-500/25">
              <i class="fas fa-database text-white text-xl"></i>
            </div>
          </div>
          <div class="flex-1 glass glass-light rounded-2xl p-6 lg:p-8 card-hover">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="px-3 py-1 bg-brand-500/10 text-brand-400 text-xs font-bold rounded-lg">2024 — Present</span>
              <span class="sm:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center"><i class="fas fa-database text-white text-sm"></i></span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">Junior Data Engineer</h3>
            <p class="text-brand-400 font-medium text-sm mb-4">Self-Directed Professional Development</p>
            <p class="dark:text-gray-400 text-gray-600 mb-4">Building production-grade data engineering projects focused on ETL pipeline design, containerization, workflow automation, and cloud-native data architectures.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Designed automated ETL pipelines with CI/CD using GitHub Actions</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Built containerized data workflows with Docker and PostgreSQL</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Implemented data modeling and BI solutions with Power BI & Excel</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Preparing for Microsoft DP-700 (Fabric Data Engineer) certification</li>
            </ul>
          </div>
        </div>
        
        <!-- Timeline Item 2 -->
        <div class="relative flex gap-6 sm:gap-10">
          <div class="hidden sm:flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center z-10 shadow-lg shadow-purple-500/25">
              <i class="fas fa-graduation-cap text-white text-xl"></i>
            </div>
          </div>
          <div class="flex-1 glass glass-light rounded-2xl p-6 lg:p-8 card-hover">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-lg">2022 — Present</span>
              <span class="sm:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center"><i class="fas fa-graduation-cap text-white text-sm"></i></span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">Economics Student — Data Engineering Focus</h3>
            <p class="text-purple-400 font-medium text-sm mb-4">Faculty of Economics & Political Science, Cairo University</p>
            <p class="dark:text-gray-400 text-gray-600 mb-4">Pursuing an economics degree with a self-directed specialization in data engineering. Bridging quantitative economic analysis with modern data infrastructure skills.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Applied statistical analysis to economic datasets</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Self-taught Python, SQL, and the modern data stack</li>
              <li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-1"></i>Built data-driven projects bridging economics and engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CERTIFICATIONS SECTION ============ -->
  <section id="certifications" class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Credentials</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Certifications & <span class="gradient-text">Learning</span>
        </h2>
      </div>
      
      <div class="space-y-6" data-animate>
        <!-- Cert 1 (In Progress DP-700) -->
        <div class="glass glass-light rounded-2xl p-6 lg:p-8 card-hover flex flex-col sm:flex-row gap-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 shadow-lg">
            <i class="fab fa-microsoft text-white text-2xl"></i>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h3 class="font-bold text-lg text-slate-900">DP-700: Fabric Data Engineer Associate</h3>
              <span class="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-lg">In Progress</span>
            </div>
            <p class="text-sm text-gray-500 mb-2">Microsoft Certified &bull; Expected 2026</p>
            <p class="dark:text-gray-400 text-gray-600 text-sm">Preparing for the DP-700 certification — designing and implementing data solutions with Microsoft Fabric, including pipelines, lakehouses, and data warehouses.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ BLOG SECTION ============ -->
  <section id="blog" class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Insights & Learning</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          From the <span class="gradient-text">Blog</span>
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Deep dives into data engineering concepts, project retrospectives, and technical insights.</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8" data-animate>
        <!-- Blog 1 -->
        <article class="glass glass-light rounded-2xl overflow-hidden card-hover group">
          <div class="h-48 bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center relative overflow-hidden">
            <i class="fas fa-robot text-white/20 text-7xl absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform"></i>
            <div class="relative z-10 text-center">
              <i class="fas fa-cogs text-white text-4xl mb-2"></i>
              <p class="text-white/80 text-sm font-mono">ETL Automation</p>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xs text-gray-400 font-mono">Jan 15, 2026</span>
              <span class="text-xs text-gray-300">&bull;</span>
              <span class="text-xs text-brand-400 font-medium">8 min read</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-400 transition-colors">How I Built a Self-Updating ETL Pipeline with GitHub Actions</h3>
            <p class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-4">A deep dive into designing a fully automated cryptocurrency data pipeline that runs 24/7 without manual intervention.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">ETL</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">GitHub Actions</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Python</span>
            </div>
          </div>
        </article>
        
        <!-- Blog 2 -->
        <article class="glass glass-light rounded-2xl overflow-hidden card-hover group">
          <div class="h-48 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative overflow-hidden">
            <i class="fab fa-docker text-white/20 text-7xl absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform"></i>
            <div class="relative z-10 text-center">
              <i class="fab fa-docker text-white text-4xl mb-2"></i>
              <p class="text-white/80 text-sm font-mono">Containerization</p>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xs text-gray-400 font-mono">Feb 01, 2026</span>
              <span class="text-xs text-gray-300">&bull;</span>
              <span class="text-xs text-brand-400 font-medium">6 min read</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-400 transition-colors">Why Every Data Engineer Should Containerize Their Pipelines</h3>
            <p class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-4">How Docker transforms fragile data pipelines into reproducible, portable systems. A practical guide with real examples.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Docker</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">PostgreSQL</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">DevOps</span>
            </div>
          </div>
        </article>
        
        <!-- Blog 3 -->
        <article class="glass glass-light rounded-2xl overflow-hidden card-hover group">
          <div class="h-48 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
            <i class="fas fa-project-diagram text-white/20 text-7xl absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform"></i>
            <div class="relative z-10 text-center">
              <i class="fas fa-sitemap text-white text-4xl mb-2"></i>
              <p class="text-white/80 text-sm font-mono">Architecture</p>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xs text-gray-400 font-mono">Jan 28, 2026</span>
              <span class="text-xs text-gray-300">&bull;</span>
              <span class="text-xs text-brand-400 font-medium">10 min read</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-400 transition-colors">The Data Structures Behind Airflow: Building an Orchestrator from Scratch</h3>
            <p class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-4">Understanding how Graphs, Topological Sort, and Queues power modern workflow orchestrators like Apache Airflow.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Algorithms</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Airflow</span>
              <span class="tag px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-mono cursor-default">Python</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ============ GITHUB SECTION ============ -->
  <section class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass glass-light rounded-3xl p-8 lg:p-12 text-center card-hover" data-animate>
        <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <i class="fab fa-github text-white text-4xl"></i>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Explore My Code</h2>
        <p class="dark:text-gray-400 text-gray-600 mb-8 max-w-xl mx-auto text-lg">All my data engineering projects, ETL pipelines, and automation scripts are open-source on GitHub. Explore the code, architecture, and documentation.</p>
        
        <!-- GitHub Stats -->
        <div class="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
          <div class="glass glass-light rounded-xl p-4">
            <div class="text-2xl font-bold gradient-text">5</div>
            <div class="text-xs text-gray-400 mt-1">Repositories</div>
          </div>
          <div class="glass glass-light rounded-xl p-4">
            <div class="text-2xl font-bold gradient-text">3</div>
            <div class="text-xs text-gray-400 mt-1">Languages</div>
          </div>
          <div class="glass glass-light rounded-xl p-4">
            <div class="text-2xl font-bold gradient-text">CI/CD</div>
            <div class="text-xs text-gray-400 mt-1">Automated</div>
          </div>
        </div>
        
        <a href="https://github.com/Amr-Walid" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
          <i class="fab fa-github text-xl"></i>
          Visit My GitHub Profile
          <i class="fas fa-external-link-alt text-sm ml-1"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT SECTION ============ -->
  <section id="contact" class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Get in Touch</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Let's <span class="gradient-text">Connect</span>
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-xl mx-auto">Have a data challenge? Looking for a data engineer? Or just want to chat about pipelines? Reach out.</p>
      </div>
      
      <div class="grid lg:grid-cols-5 gap-8" data-animate>
        <!-- Contact Info -->
        <div class="lg:col-span-2 space-y-4">
          <a href="mailto:amr.walid2022@feps.edu.eg" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <i class="fas fa-envelope text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">Email</p>
              <p class="font-medium text-slate-900 text-sm">amr.walid2022@feps.edu.eg</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <i class="fab fa-linkedin-in text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">LinkedIn</p>
              <p class="font-medium text-slate-900 text-sm">Amr Walid</p>
            </div>
          </a>
          
          <a href="https://github.com/Amr-Walid" target="_blank" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <i class="fab fa-github text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">GitHub</p>
              <p class="font-medium text-slate-900 text-sm">Amr-Walid</p>
            </div>
          </a>
          
          <div class="glass glass-light rounded-2xl p-5 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shrink-0">
              <i class="fas fa-map-marker-alt text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">Location</p>
              <p class="font-medium text-slate-900 text-sm">Cairo, Egypt</p>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <form id="contactForm" class="glass glass-light rounded-2xl p-6 lg:p-8 space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-2">Name *</label>
                <input type="text" name="name" required class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="Your name">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-2">Email *</label>
                <input type="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="you@email.com">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Subject</label>
              <input type="text" name="subject" class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="What's this about?">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Message *</label>
              <textarea name="message" required rows="5" class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
            </div>
            <button type="submit" id="submitBtn" class="w-full py-3.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <i class="fas fa-paper-plane"></i>
              Send Message
            </button>
            <div id="formMessage" class="hidden text-center text-sm font-medium py-3 rounded-xl"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer class="dark:bg-slate-900 bg-white border-t border-gray-200 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">AW</div>
          <div>
            <span class="font-bold text-slate-900">Amr Walid</span>
            <span class="block text-xs text-gray-400 font-mono">Data Engineer</span>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <a href="https://github.com/Amr-Walid" target="_blank" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:amr.walid2022@feps.edu.eg" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
        
        <p class="text-sm text-gray-400">
          &copy; 2026 Amr Walid. Built with passion.
        </p>
      </div>
    </div>
  </footer>

  <!-- ============ JAVASCRIPT ============ -->
  <script>
    // ===== PORTFOLIO DATA =====
    const projects = ${JSON.stringify(portfolioData.projects)};

    // ===== RENDER PROJECTS =====
    function renderProjects(filter = 'all') {
      const grid = document.getElementById('projectsGrid');
      const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
      
      grid.innerHTML = filtered.map(p => {
        const urls = p.imageUrls || (p.imageUrl ? [p.imageUrl] : []);
        let imageHeader = '';
        if (urls.length > 0) {
          imageHeader = \`<div class="w-full h-48 sm:h-56 relative bg-slate-200/50 border-b border-gray-200 flex flex-row overflow-hidden">
            \${urls.map((url, i) => \`
              <div class="flex-1 h-full flex items-center justify-center p-2 sm:p-3 relative group/img \${i > 0 ? 'border-l border-gray-300/50' : ''}">
                <img src="\${url}" alt="\${p.title} - Image \${i + 1}" class="max-w-full max-h-full object-contain rounded shadow-sm group-hover/img:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            \`).join('')}
          </div>\`;
        }

        return \`
        <div class="glass glass-light rounded-2xl overflow-hidden card-hover group project-card flex flex-col h-full" data-category="\${p.category}">
          <!-- Project Image Header -->
          \${imageHeader}
          
          <!-- Content Body -->
          <div class="p-6 lg:p-8 flex flex-col flex-grow">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shrink-0 shadow-lg">
                  <i class="fas fa-\${p.image} text-white text-lg"></i>
                </div>
                <div>
                  <span class="text-xs font-bold text-brand-400 font-mono uppercase tracking-wider">\${p.category}</span>
                  \${p.featured ? '<span class="ml-2 text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md font-bold">Featured</span>' : ''}
                </div>
              </div>
              <a href="\${p.github}" target="_blank" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all shrink-0">
                <i class="fab fa-github"></i>
              </a>
            </div>
            
            <h3 class="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-400 transition-colors">\${p.title}</h3>
            
            <!-- Problem & Solution Section -->
            <div class="mb-4">
              <p class="text-xs font-bold text-red-400 font-mono uppercase tracking-wider mb-1">Problem</p>
              <p class="text-sm text-gray-600 leading-relaxed">\${p.problem}</p>
            </div>
            
            <!-- Solution -->
            <div class="mb-4">
              <p class="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider mb-1">Solution</p>
              <p class="text-sm text-gray-600 leading-relaxed">\${p.solution}</p>
            </div>
            
            <!-- Architecture -->
            <div class="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
              <p class="text-xs font-bold text-purple-400 font-mono uppercase tracking-wider mb-1">Architecture</p>
              <p class="text-xs text-gray-500 font-mono leading-relaxed">\${p.architecture}</p>
            </div>
            
            <!-- Impact -->
            <div class="mb-5">
              <p class="text-xs font-bold text-accent-400 font-mono uppercase tracking-wider mb-2">Impact</p>
              <ul class="space-y-1.5">
                \${p.impact.map(i => \`<li class="flex items-start gap-2 text-sm text-gray-500"><i class="fas fa-check text-emerald-400 mt-0.5 text-xs"></i>\${i}</li>\`).join('')}
              </ul>
            </div>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              \${p.techStack.map(t => \`<span class="tag px-2.5 py-1 bg-brand-500/5 text-brand-400 text-xs rounded-lg font-mono font-medium border border-brand-500/10 cursor-default">\${t}</span>\`).join('')}
            </div>
          </div>
        </div>
      \`}).join('');
    }

    // ===== PROJECT FILTERS =====
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
      });
    });

    // Style filter buttons
    function styleFilters() {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.classList.contains('active')) {
          btn.className = 'filter-btn active px-5 py-2 rounded-xl text-sm font-semibold transition-all bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-500/25';
        } else {
          btn.className = 'filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all bg-gray-100 text-gray-600 hover:text-brand-400 border-gray-200 border';
        }
      });
    }
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', styleFilters);
    });

    // ===== CONTACT FORM =====
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      const msg = document.getElementById('formMessage');
      const form = e.target;
      
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;
      
      try {
        const data = Object.fromEntries(new FormData(form));
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        
        if (result.success) {
          msg.textContent = 'Message sent successfully! I will get back to you soon.';
          msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
          form.reset();
        } else {
          throw new Error(result.error);
        }
      } catch (err) {
        msg.textContent = err.message || 'Something went wrong. Please try again.';
        msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20';
      }
      
      msg.classList.remove('hidden');
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.disabled = false;
      
      setTimeout(() => msg.classList.add('hidden'), 5000);
    });
    // ===== MOBILE MENU =====
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
      });
    });

    // ===== NAVBAR SCROLL =====
    let tickingNavbar = false;
    window.addEventListener('scroll', () => {
      if (!tickingNavbar) {
        window.requestAnimationFrame(() => {
          const navbar = document.getElementById('navbar');
          const scroll = window.scrollY;
          
          if (scroll > 50) {
            navbar.classList.add('glass', 'glass-light', 'shadow-lg', 'py-0');
            navbar.classList.remove('py-2');
          } else {
            navbar.classList.remove('glass', 'glass-light', 'shadow-lg', 'py-0');
            navbar.classList.add('py-2');
          }
          tickingNavbar = false;
        });
        tickingNavbar = true;
      }
    }, { passive: true });

    // ===== SCROLL ANIMATIONS =====
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section[id]');
    let tickingNavLinks = false;
    window.addEventListener('scroll', () => {
      if (!tickingNavLinks) {
        window.requestAnimationFrame(() => {
          const scroll = window.scrollY + 200;
          sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector('a[href="#' + id + '"]');
            if (link && link.classList.contains('nav-link')) {
              if (scroll >= top && scroll < top + height) {
                link.classList.add('active', 'text-brand-400');
              } else {
                link.classList.remove('active', 'text-brand-400');
              }
            }
          });
          tickingNavLinks = false;
        });
        tickingNavLinks = true;
      }
    }, { passive: true });

    // ===== INIT =====
    renderProjects();
    styleFilters();
  </script>
</body>
</html>`
}

// ==================== ROUTES ====================
app.get('/', (c) => {
  return c.html(renderPage())
})

export default app
