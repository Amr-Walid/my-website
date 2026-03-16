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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap">
  
  <!-- Security: Content Security Policy -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://avatars.githubusercontent.com; connect-src 'self' https://formspree.io;">

  <!-- Icons are now inline SVGs for performance -->
  
  <!-- Tailwind is now compiled locally via Vite/PostCSS -->
  <!-- Custom Styles (separated for clean Separation of Concerns) -->
  <link rel="stylesheet" href="/assets/styles.compiled.css">
</head>
<body class="bg-white text-slate-900 font-sans antialiased transition-colors duration-500">
  
  <!-- ============ NAVIGATION ============ -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-110 transition-transform">
            <img src="/assets/logo.webp" alt="Amr Walid Logo" class="w-full h-full object-cover scale-[1.3] translate-y-[-5%]" />
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
          <a href="#contact" class="ml-4 px-5 py-2.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5">
            Let's Talk
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-3 md:hidden">
          <button id="mobileMenuBtn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu" class="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-slate-700">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 448 512" aria-hidden="true"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
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
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform fill-current" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </a>
            <a href="https://github.com/Amr-Walid" target="_blank" class="px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-brand-500/50 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-sm">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-brand-500/50 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-sm">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zM384 416h-66.5V310.2c0-25.2-.5-57.6-35.1-57.6-35.1 0-40.5 27.5-40.5 55.8V416h-66.5V202.2h63.8v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
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
            <div class="absolute inset-6 sm:inset-8 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-brand-500/20 glass bg-slate-100 flex items-center justify-center">
              <img 
                src="/assets/profile.webp" 
                srcset="/assets/profile.webp 320w"
                sizes="(max-width: 640px) 126px, (max-width: 1024px) 160px, 176px"
                alt="Amr Walid Profile" 
                width="176" 
                height="176" 
                fetchpriority="high" 
                decoding="async" 
                class="w-full h-full object-cover object-[center_20%]" />
            </div>

            <!-- Floating tech icons -->
            <div class="absolute top-0 right-10 w-12 h-12 bg-slate-800 rounded-xl shadow-lg flex items-center justify-center animate-float border border-slate-700 p-2">
              <img src="/assets/python-original.svg" alt="Python" class="w-full h-full" />
            </div>
            <div class="absolute bottom-10 left-0 w-12 h-12 bg-slate-800 rounded-xl shadow-lg flex items-center justify-center animate-float border border-slate-700 p-2" style="animation-delay: 1.5s;">
              <img src="/assets/postgresql-original.svg" alt="PostgreSQL" class="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#about" aria-label="Scroll to About section" class="text-gray-500 hover:text-brand-400 transition-colors">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
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
              <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
            </div>
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-accent-500 animate-float" style="animation-delay: 1s;">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
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
                <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse-slow fill-current" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
             </div>
             <p class="text-center mt-2 sm:mt-3 text-[9px] sm:text-xs font-bold font-mono tracking-widest uppercase text-gray-500">Transform</p>
          </div>

          <!-- Destination Warehouse & Dashboard -->
          <div class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-10">
            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl shadow-lg shadow-brand-500/20 text-white flex items-center justify-center animate-pulse-slow" style="animation-duration: 3s;">
               <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 512 512"><path d="M64 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V160c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V48zm88 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H152zm144 16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H320c-13.3 0-24 10.7-24 24zM64 352c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V352zm88 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H152zm144 16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H320c-13.3 0-24 10.7-24 24z"/></svg>
            </div>
            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-lg shadow-accent-500/20 text-white flex items-center justify-center animate-pulse-slow" style="animation-duration: 4s;">
               <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
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
      </div>
      
      <!-- Project Cards -->
      <div id="projectsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      
      <div class="grid md:grid-cols-2 gap-6" data-animate>
        ${portfolioData.experience.map((exp, idx) => `
          <div class="glass glass-light rounded-2xl p-5 card-hover flex flex-col h-full border border-gray-100 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-1 bg-brand-500/10 text-brand-500 text-[10px] font-bold rounded-lg uppercase tracking-wider">${exp.period}</span>
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br ${idx % 2 === 0 ? 'from-brand-500 to-accent-500' : 'from-purple-500 to-purple-600'} flex items-center justify-center shadow-sm">
                ${idx === 0 ? '<svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 640 512"><path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H368 288 184c-39.8 0-72 32.2-72 72v280c0 17.7 14.3 32 32 32s32-14.3 32-32V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32zM480 320h48c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H448c-26.5 0-48 21.5-48 48v22.4L440 200V144c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v128c0 4.4-3.6 8-8 8H480v40z"/></svg>' : 
                  idx === 1 ? '<svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 384 512"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9zM152 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm-16-160c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64zm128 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64z"/></svg>' : 
                  idx === 2 ? '<svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 512 512"><path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32zm128-64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32z"/></svg>' : 
                  '<svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 512 512"><path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V512c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H0c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>'}
              </div>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-0.5">${exp.title}</h3>
            <p class="text-brand-400 font-semibold text-xs mb-3 font-mono uppercase tracking-tight">${exp.type}</p>
            <p class="text-gray-500 text-sm mb-4 leading-relaxed">${exp.description}</p>
            <ul class="space-y-1.5 mt-auto border-t border-gray-50 pt-3">
              ${exp.highlights.map(h => `
                <li class="flex items-start gap-2 text-xs text-gray-500">
                  <svg class="w-3.5 h-3.5 fill-emerald-400 mt-0.5 shrink-0" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ============ CERTIFICATIONS SECTION (Hidden) ============ -->
  <!--
  <section id="certifications" class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-animate>
        <p class="text-brand-400 font-mono text-sm font-semibold mb-2 tracking-wider uppercase">// Credentials</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-slate-900">
          Certifications & <span class="gradient-text">Learning</span>
        </h2>
      </div>
      
      <div class="space-y-6" data-animate>
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
  -->



  <!-- ============ GITHUB SECTION ============ -->
  <section class="py-24 lg:py-32 bg-gray-50/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass glass-light rounded-3xl p-8 lg:p-12 text-center card-hover" data-animate>
        <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg class="w-10 h-10 fill-white" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
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
          <svg class="w-5 h-5 fill-current" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          Visit My GitHub Profile
          <svg class="w-3.5 h-3.5 ml-1 fill-current" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
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
              <svg class="w-5 h-5 fill-white" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            </div>
            <div>
              <p class="text-sm text-gray-400">Email</p>
              <p class="font-medium text-slate-900 text-sm">amr.walid2022@feps.edu.eg</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zM384 416h-66.5V310.2c0-25.2-.5-57.6-35.1-57.6-35.1 0-40.5 27.5-40.5 55.8V416h-66.5V202.2h63.8v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </div>
            <div>
              <p class="text-sm text-gray-400">LinkedIn</p>
              <p class="font-medium text-slate-900 text-sm">Amr Walid</p>
            </div>
          </a>
          
          <a href="https://github.com/Amr-Walid" target="_blank" class="glass glass-light rounded-2xl p-5 flex items-center gap-4 card-hover group">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 fill-white" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </div>
            <div>
              <p class="text-sm text-gray-400">GitHub</p>
              <p class="font-medium text-slate-900 text-sm">Amr-Walid</p>
            </div>
          </a>
          
          <div class="glass glass-light rounded-2xl p-5 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 fill-white" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
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
              <svg class="w-4 h-4 fill-white" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
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
          <div class="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
            <img src="/assets/logo.webp" alt="Amr Walid Logo" class="w-full h-full object-cover scale-[1.3] translate-y-[-5%]" />
          </div>
          <div>
            <span class="font-bold text-slate-900">Amr Walid</span>
            <span class="block text-xs text-gray-500 font-mono">Data Engineer</span>
          </div>
        </div>
        
        <div class="flex flex-wrap items-center gap-4">
          <a href="https://github.com/Amr-Walid" target="_blank" rel="noopener noreferrer" aria-label="Visit Amr Walid's GitHub profile" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <svg class="w-5 h-5 fill-current text-gray-500 group-hover:text-brand-400" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/amrwalidmaher" target="_blank" rel="noopener noreferrer" aria-label="Visit Amr Walid's LinkedIn profile" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <svg class="w-5 h-5 fill-current text-gray-500 group-hover:text-brand-400" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zM384 416h-66.5V310.2c0-25.2-.5-57.6-35.1-57.6-35.1 0-40.5 27.5-40.5 55.8V416h-66.5V202.2h63.8v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
          <a href="mailto:amr.walid2022@feps.edu.eg" aria-label="Send email to Amr Walid" class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:text-brand-400 hover:bg-brand-500/10 transition-all">
            <svg class="w-5 h-5 fill-current text-gray-500 group-hover:text-brand-400" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
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
          <svg class="w-5 h-5 fill-current" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
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
               <svg class="w-5 h-5 fill-current" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg> View Source Code
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
