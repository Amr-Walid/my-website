import { portfolioData } from './data';

export const renderPage = () => {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
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
  
  <!-- Fonts: async load to avoid render-blocking -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"></noscript>
  
  <!-- Security: Content Security Policy -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' data: https://cdn.jsdelivr.net https://avatars.githubusercontent.com; connect-src 'self';">

  <!-- Icons: load async to avoid render-blocking -->
  <link rel="preload" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" rel="stylesheet"></noscript>
  
  <!-- Tailwind: preload hint to reduce render-blocking impact -->
  <link rel="preload" href="https://cdn.tailwindcss.com" as="script">
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Custom Styles (separated for clean Separation of Concerns) -->
  <link rel="stylesheet" href="/assets/styles.css">
  
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

</head>
<body class="bg-white text-slate-900 font-sans antialiased transition-colors duration-500">
  
  <!-- ============ NAVIGATION ============ -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            AW
          </div>
          <div class="hidden sm:block">
            <span class="font-bold text-lg text-slate-900">Amr Walid</span>
            <span class="block text-xs text-brand-400 font-mono -mt-0.5">Data Engineer & Analyst</span>
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
          <button id="mobileMenuBtn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu" class="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-slate-700">
            <i class="fas fa-bars" aria-hidden="true"></i>
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
  <section id="hero" class="relative min-h-screen flex items-start lg:items-center justify-center hero-gradient overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-20">
    <div class="grid-bg absolute inset-0 opacity-60"></div>
    
    <!-- Floating Elements -->
    <div class="absolute top-1/4 left-10 w-3 h-3 bg-brand-500 rounded-full animate-float opacity-40"></div>
    <div class="absolute top-1/3 right-20 w-2 h-2 bg-accent-400 rounded-full animate-float opacity-30" style="animation-delay: 2s"></div>
    <div class="absolute bottom-1/3 left-1/4 w-4 h-4 bg-brand-400/20 rounded-full animate-float" style="animation-delay: 4s"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Column -->
        <div class="space-y-8 animate-slide-up order-last lg:order-first">

          
          <!-- Heading -->
          <div>
            <p class="text-lg sm:text-xl text-gray-500 font-medium mb-3">Hi, I'm</p>
            <h1 class="text-[clamp(2.75rem,9vw,4.5rem)] sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight whitespace-nowrap">
              <span class="text-slate-900">Amr</span>
              <span class="gradient-text"> Walid</span>
            </h1>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mt-3">
              Data Engineer & Analyst
            </h2>
          </div>
          
          <!-- Tagline -->
          <p class="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl">
            From raw extraction to strategic insights. I build <span class="text-brand-400 font-semibold">scalable ETL pipelines</span> and design <span class="text-accent-400 font-semibold">dynamic dashboards</span> that drive data-informed decisions.
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
          <div class="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64 mx-auto">
            <!-- Decorative rings -->
            <div class="absolute inset-0 border border-brand-500/30 rounded-full animate-spin-slow" style="animation-duration: 15s;"></div>
            <div class="absolute inset-4 border border-accent-500/20 rounded-full animate-[spin_20s_linear_reverse]"></div>
            
            <!-- Profile Image Container -->
            <div class="absolute inset-6 sm:inset-8 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-brand-500/20 glass">
              <picture style="display:block;width:100%;height:100%;">
                <source srcset="/assets/profile.webp" type="image/webp" sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px">
                <img src="/assets/profile.webp" alt="Amr Walid" width="320" height="320" fetchpriority="high" decoding="async" sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px" style="display:block;width:100%;height:100%;object-fit:cover;object-position:center top;" />
              </picture>
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
      <a href="#about" aria-label="Scroll to About section" class="text-gray-500 hover:text-brand-400 transition-colors">
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
            My expertise spans <strong class="text-slate-900">ETL/ELT design</strong>, <strong class="text-slate-900">data modeling</strong>, <strong class="text-slate-900">workflow automation</strong>, and <strong class="text-slate-900">cloud-native data architectures</strong>. I combine strong engineering fundamentals with analytical thinking to build systems that turn raw data into strategic business assets.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Currently studying Economics at Cairo University's Faculty of Economics & Political Science, I bring a unique perspective that bridges quantitative analysis with modern data infrastructure engineering.
          </p>
        </div>
        
        <!-- Interactive ETL Diagram -->
        <div class="lg:col-span-2 relative h-[300px] w-full rounded-3xl glass glass-light p-6 overflow-hidden flex items-center justify-center border border-white/40 shadow-xl" id="etlDiagram">
          <!-- Data Sources -->
          <div class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-10">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-brand-500 animate-float" style="animation-delay: 0s;">
              <i class="fas fa-database text-lg sm:text-xl"></i>
            </div>
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-accent-500 animate-float" style="animation-delay: 1s;">
              <i class="fas fa-code text-lg sm:text-xl"></i>
            </div>
          </div>

          <!-- ETL Pipeline Path -->
          <div class="absolute left-14 sm:left-20 right-14 sm:right-20 top-1/2 -translate-y-1/2 h-1 bg-gray-200/50 rounded-full z-0 overflow-hidden">
            <!-- Flowing Data Particles -->
            <div class="data-particle particle-1"></div>
            <div class="data-particle particle-2"></div>
            <div class="data-particle particle-3"></div>
          </div>

          <svg class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" preserveAspectRatio="none">
             <path d="M 80 100 Q 150 150 50vw 150 T right-80 150" fill="transparent" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="4 4"/>
             <defs>
               <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                 <stop offset="0%" stop-color="#3b8fff" />
                 <stop offset="100%" stop-color="#0ea5e9" />
               </linearGradient>
             </defs>
          </svg>

          <!-- ETL Engine (Middle) -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mt-1 sm:mt-0">
             <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 shadow-2xl flex items-center justify-center group overflow-hidden">
                <div class="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                   <div class="w-12 h-12 sm:w-16 sm:h-16 border-2 border-brand-400/30 rounded-full animate-spin-slow"></div>
                </div>
                <i class="fas fa-cogs text-white text-2xl sm:text-3xl animate-pulse-slow"></i>
             </div>
             <p class="text-center mt-2 sm:mt-3 text-[9px] sm:text-xs font-bold font-mono tracking-widest uppercase text-gray-500">Transform</p>
          </div>

          <!-- Destination Warehouse & Dashboard -->
          <div class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-10">
            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl shadow-lg shadow-brand-500/20 text-white flex items-center justify-center animate-pulse-slow" style="animation-duration: 3s;">
               <i class="fas fa-server text-lg sm:text-2xl"></i>
            </div>
            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-lg shadow-accent-500/20 text-white flex items-center justify-center animate-pulse-slow" style="animation-duration: 4s;">
               <i class="fas fa-chart-pie text-lg sm:text-2xl"></i>
            </div>
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
  <footer class="bg-white border-t border-gray-200 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">AW</div>
          <div>
            <span class="font-bold text-slate-900">Amr Walid</span>
            <span class="block text-xs text-gray-500 font-mono">Data Engineer</span>
          </div>
        </div>
        
        <div class="flex flex-wrap items-center gap-4">
          <a href="https://github.com/Amr-Walid" target="_blank" rel="noopener noreferrer" aria-label="Visit Amr Walid's GitHub profile" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" rel="noopener noreferrer" aria-label="Visit Amr Walid's LinkedIn profile" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a href="mailto:amr.walid2022@feps.edu.eg" aria-label="Send email to Amr Walid" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        
        <p class="text-sm text-gray-600">
          &copy; 2026 Amr Walid. Built with passion.
        </p>
      </div>
    </div>
  </footer>

  <!-- ============ PROJECT MODAL ============ -->
  <div id="projectModal" class="fixed inset-0 z-[100] hidden items-center justify-center p-2 sm:p-6 opacity-0 transition-opacity duration-300">
    <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-md" id="modalBackdrop"></div>
    
    <div class="relative w-full max-w-7xl h-[98vh] sm:h-[94vh] bg-[#faf9f8] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col scale-95 transition-transform duration-300 border border-white/20" id="modalContent">
      
      <!-- Close Button (Sticky on mobile, Absolute on desktop) -->
      <div class="absolute top-0 right-0 p-3 sm:p-4 lg:p-6 z-[60] flex justify-end w-full lg:w-auto pointer-events-none">
        <button id="closeModalBtn" class="pointer-events-auto w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-slate-900 hover:scale-105 transition-all">
          <i class="fas fa-times text-lg lg:text-xl"></i>
        </button>
      </div>

      <!-- Split Layout Container (Scrollable on mobile, Split on desktop) -->
      <div class="flex flex-col-reverse lg:flex-row h-full w-full overflow-y-auto lg:overflow-hidden custom-scrollbar">
        
        <!-- Left Side: Text Content -->
        <div class="w-full lg:w-5/12 h-auto lg:h-full lg:overflow-y-auto p-6 sm:p-8 lg:p-12 xl:p-14 bg-white/60 border-t lg:border-t-0 lg:border-r border-gray-200/60 custom-scrollbar z-20">
          
          <!-- Title -->
          <h2 id="modalTitle" class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight mt-4 lg:mt-0">Project Title</h2>
          
          <!-- Category / Tech Stack -->
          <div class="mb-8 sm:mb-10">
            <h4 class="text-[10px] sm:text-xs font-bold text-gray-400 font-mono tracking-widest uppercase mb-3">Technologies</h4>
            <div id="modalTechStack" class="flex flex-wrap gap-2"></div>
          </div>

          <!-- Problem & Solution -->
          <div class="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
             <div>
                <h4 class="text-[10px] sm:text-xs font-bold text-brand-600 font-mono tracking-widest uppercase mb-2 sm:mb-3">The Challenge</h4>
                <p id="modalProblem" class="text-gray-600 leading-relaxed text-sm sm:text-base">...</p>
             </div>
             <div>
                <h4 class="text-[10px] sm:text-xs font-bold text-emerald-600 font-mono tracking-widest uppercase mb-2 sm:mb-3">The Solution</h4>
                <p id="modalSolution" class="text-gray-600 leading-relaxed text-sm sm:text-base">...</p>
             </div>
          </div>

          <!-- Architecture & Impact -->
          <div class="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
            <div>
              <h4 class="text-[10px] sm:text-xs font-bold text-purple-600 font-mono tracking-widest uppercase mb-2 sm:mb-3">Architecture</h4>
              <p id="modalArchitecture" class="text-gray-600 leading-relaxed text-xs sm:text-sm font-mono bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm overflow-x-auto">...</p>
            </div>
            <div>
              <h4 class="text-[10px] sm:text-xs font-bold text-sky-600 font-mono tracking-widest uppercase mb-2 sm:mb-3">Key Impact</h4>
              <ul id="modalImpact" class="space-y-2 text-gray-600 text-sm sm:text-base"></ul>
            </div>
          </div>

          <!-- Action Button -->
          <div class="pt-4 border-t border-gray-200/60 pb-6 lg:pb-0">
            <a id="modalGithubBtn" href="#" target="_blank" class="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base">
               <i class="fab fa-github text-lg"></i> View Source Code
            </a>
          </div>

        </div>

        <!-- Right Side: Images (Top on mobile) -->
        <div class="w-full lg:w-7/12 h-auto lg:h-full lg:overflow-y-auto bg-[#f8f9fa] p-6 pt-16 sm:p-8 sm:pt-20 lg:p-12 relative custom-scrollbar z-10 shrink-0">
          <!-- Background Grid Pattern for style -->
          <div class="absolute inset-0 grid-bg opacity-40 pointer-events-none hidden lg:block"></div>
          
          <div id="modalImages" class="relative z-10 flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full max-w-4xl mx-auto items-center">
            <!-- Images injected here -->
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ============ JAVASCRIPT ============ -->
  <!-- Inject data for script.js (no CSS/JS syntax clash risk) -->
  <script>window.PROJECTS = ${JSON.stringify(portfolioData.projects)};</script>
  <script src="/assets/script.js" defer></script>

</body>
</html>`
}
