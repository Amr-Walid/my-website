import { portfolioData } from './data';
import { icon, projectIcon } from './icons';

const d: any = portfolioData;
const p = d.personal;

/** Escape text for safe HTML interpolation. */
const esc = (s: unknown = ''): string =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const SITE_URL = 'https://amrw.me';
const CV_URL = '/assets/Amr_Walid_CV.pdf';
const CV_FILE = 'Amr_Walid_Maher_CV.pdf';

const navLinks = [
  ['about', 'About'],
  ['projects', 'Work'],
  ['services', 'Services'],
  ['experience', 'Experience'],
  ['awards', 'Awards'],
  ['contact', 'Contact']
];

const categoryIcon: Record<string, string> = {
  'Full-Stack': 'monitor',
  'Data Engineering': 'database',
  Automation: 'workflow',
  'Data Analysis': 'chartBar',
  'Web & WordPress': 'globe'
};

const categoryHue: Record<string, string> = {
  'Full-Stack': 'from-sky-500/30 via-blue-600/20 to-indigo-700/30',
  'Data Engineering': 'from-cyan-400/30 via-teal-500/20 to-blue-700/30',
  Automation: 'from-teal-400/30 via-cyan-500/20 to-sky-600/30',
  'Data Analysis': 'from-amber-400/30 via-orange-500/20 to-rose-600/30',
  'Web & WordPress': 'from-emerald-400/30 via-green-500/20 to-cyan-600/30'
};

const projectImages = (pr: any): string[] => pr.imageUrls || (pr.imageUrl ? [pr.imageUrl] : []);

// ---------------------------------------------------------------- sections

const renderNav = () => `
  <div id="scrollProgress" class="fixed top-0 left-0 h-[3px] w-0 z-[70] bg-gradient-to-r from-brand-500 via-accent-400 to-teal-400"></div>
  <header id="navbar" class="fixed top-0 inset-x-0 z-50 transition-all duration-500">
    <nav class="nav-shell mx-auto mt-3 max-w-6xl px-3 sm:px-4" aria-label="Main">
      <div class="nav-inner flex items-center justify-between gap-3 rounded-2xl px-3 sm:px-4 h-16 transition-all duration-500">
        <a href="#hero" class="flex items-center gap-3 group" aria-label="Amr Walid — home">
          <img src="/assets/logo.svg" alt="" width="40" height="40" class="logo-mark w-10 h-10 rounded-xl">
          <span class="hidden sm:block leading-tight">
            <span class="block font-bold text-fg">Amr Walid</span>
            <span class="block text-[11px] font-mono text-muted">data · systems · automation</span>
          </span>
        </a>
        <div class="hidden md:flex items-center gap-1">
          ${navLinks.map(([id, label]) => `<a href="#${id}" class="nav-link" data-nav="${id}">${label}</a>`).join('')}
        </div>
        <div class="flex items-center gap-2">
          <button id="themeToggle" class="icon-btn" aria-label="Toggle color theme">
            <span class="theme-icon-dark">${icon('moon', 'w-[18px] h-[18px]')}</span>
            <span class="theme-icon-light">${icon('sun', 'w-[18px] h-[18px]')}</span>
          </button>
          <a href="${CV_URL}" download="${CV_FILE}" class="hidden sm:inline-flex btn-ghost btn-sm magnetic" aria-label="Download CV (PDF)">${icon('download', 'w-4 h-4')} CV</a>
          <a href="#contact" class="hidden sm:inline-flex btn-primary btn-sm magnetic">Hire me ${icon('arrowUpRight', 'w-4 h-4')}</a>
          <button id="mobileMenuBtn" class="icon-btn md:hidden" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
            <span class="menu-open">${icon('menu', 'w-5 h-5')}</span>
            <span class="menu-close hidden">${icon('x', 'w-5 h-5')}</span>
          </button>
        </div>
      </div>
      <div id="mobileMenu" class="md:hidden hidden mt-2 rounded-2xl surface p-3">
        ${navLinks.map(([id, label]) => `<a href="#${id}" class="block px-4 py-3 rounded-xl text-fg/80 hover:bg-fg/5 hover:text-fg font-medium">${label}</a>`).join('')}
        <a href="${CV_URL}" download="${CV_FILE}" class="btn-ghost w-full justify-center mt-2">${icon('download', 'w-4 h-4')} Download CV</a>
        <a href="#contact" class="group btn-primary w-full justify-center mt-2">Hire me ${icon('arrowUpRight', 'w-4 h-4')}</a>
      </div>
    </nav>
  </header>`;

const renderHero = () => `
  <section id="hero" class="relative min-h-[min(100svh,960px)] flex items-center overflow-hidden pt-28 pb-20">
    <div class="aurora" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="hero-grid absolute inset-0" aria-hidden="true"></div>
    <canvas id="heroCanvas" class="absolute inset-0 w-full h-full opacity-60" aria-hidden="true"></canvas>

    <div class="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 w-full">
      <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
        <div class="order-2 lg:order-1">
          <div class="hero-in inline-flex items-center gap-2 rounded-full border border-line/10 bg-fg/[0.03] px-3 py-1.5 text-xs font-medium text-muted backdrop-blur" style="--d:0ms">
            <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span></span>
            Available for freelance &amp; full-time roles
          </div>

          <h1 class="mt-6 font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.9rem,8vw,5.6rem)]">
            <span class="hero-in block text-fg" style="--d:80ms">Amr Walid</span>
            <span class="hero-in block gradient-text pb-2" style="--d:160ms">builds systems</span>
          </h1>

          <p class="hero-in mt-5 text-xl sm:text-2xl font-semibold text-fg/90" style="--d:240ms">
            <span class="text-muted font-normal">I'm <span id="typedArticle">a</span></span>
            <span id="typedRole" class="typed text-fg">Data Engineer</span><span class="caret" aria-hidden="true"></span>
          </p>

          <p class="hero-in mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted" style="--d:320ms">
            End to end — from the database to the dashboard. I ship <span class="text-fg font-medium">real-time data pipelines</span>,
            <span class="text-fg font-medium">production business systems</span> (POS, CRM, e-commerce, asset tracking) and
            <span class="text-fg font-medium">automation</span> that replaces spreadsheets and manual work.
          </p>

          <div class="hero-in mt-8 flex flex-wrap items-center gap-3" style="--d:400ms">
            <a href="#projects" class="group btn-primary magnetic">View my work ${icon('arrowRight', 'w-4 h-4 transition-transform group-hover:translate-x-1')}</a>
            <a href="${CV_URL}" download="${CV_FILE}" class="btn-ghost magnetic">${icon('download', 'w-4 h-4')} Download CV</a>
            <a href="#contact" class="btn-ghost magnetic">Start a project</a>
            <div class="flex items-center gap-2 ml-1">
              <a href="${p.github}" target="_blank" rel="noopener" class="icon-btn" aria-label="GitHub">${icon('github', 'w-[18px] h-[18px]')}</a>
              <a href="${p.linkedin}" target="_blank" rel="noopener" class="icon-btn" aria-label="LinkedIn">${icon('linkedin', 'w-[18px] h-[18px]')}</a>
              <a href="mailto:${p.email}" class="icon-btn" aria-label="Email">${icon('mail', 'w-[18px] h-[18px]')}</a>
            </div>
          </div>

          <dl class="hero-in mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl" style="--d:480ms">
            ${d.stats
              .map(
                (s: any) => `
              <div class="stat">
                <dt class="sr-only">${esc(s.label)}</dt>
                <dd class="text-3xl font-display font-bold text-fg tabular-nums"><span data-count="${s.value}">0</span>${s.suffix}</dd>
                <p class="mt-1 text-xs leading-snug text-muted">${esc(s.label)}</p>
              </div>`
              )
              .join('')}
          </dl>
        </div>

        <div class="order-1 lg:order-2 relative flex justify-center">
          <div class="hero-in portrait relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem]" style="--d:120ms" data-parallax>
            <div class="portrait-ring ring-1"></div>
            <div class="portrait-ring ring-2"></div>
            <div class="portrait-glow"></div>
            <div class="absolute inset-6 sm:inset-8 rounded-full overflow-hidden border border-line/10 bg-base-2 shadow-2xl">
              <img src="/assets/profile.webp" alt="Portrait of Amr Walid" width="320" height="320" fetchpriority="high" decoding="async" class="w-full h-full object-cover object-[center_20%]">
            </div>
            <div class="float-chip top-4 -left-2 sm:-left-6" style="--fd:0s">${icon('database', 'w-4 h-4 text-accent-400')}<span>Pipelines</span></div>
            <div class="float-chip top-1/2 -right-4 sm:-right-10" style="--fd:1.2s">${icon('monitor', 'w-4 h-4 text-brand-400')}<span>Systems</span></div>
            <div class="float-chip bottom-6 left-0 sm:-left-4" style="--fd:2.4s">${icon('workflow', 'w-4 h-4 text-teal-400')}<span>Automation</span></div>
            <div class="code-card hidden sm:block -bottom-10 right-0 sm:-right-6">
              <div class="flex gap-1.5 mb-2"><i class="bg-rose-400"></i><i class="bg-amber-400"></i><i class="bg-emerald-400"></i></div>
              <code><span class="text-sky-400">SELECT</span> impact<br><span class="text-sky-400">FROM</span> raw_data<br><span class="text-sky-400">WHERE</span> manual = <span class="text-emerald-400">false</span>;</code>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#about" class="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-xs text-muted hover:text-fg" aria-label="Scroll to About">
      <span class="mouse"><span></span></span>Scroll
    </a>
  </section>`;

const renderMarquee = () => {
  const items = d.techMarquee.map((t: string) => `<li>${esc(t)}</li>`).join('');
  return `
  <section class="relative py-8 border-y border-line/[0.07] bg-base-2/50" aria-label="Technologies I work with">
    <div class="marquee">
      <ul class="marquee-track">${items}${items}</ul>
    </div>
  </section>`;
};

const sectionHead = (eyebrow: string, title: string, sub = '', center = true) => `
  <div class="${center ? 'text-center mx-auto' : ''} max-w-2xl mb-14" data-reveal>
    <p class="eyebrow ${center ? 'justify-center' : ''}">${eyebrow}</p>
    <h2 class="mt-3 font-display font-bold tracking-tight text-fg text-4xl sm:text-5xl leading-[1.05]">${title}</h2>
    ${sub ? `<p class="mt-4 text-lg text-muted leading-relaxed">${sub}</p>` : ''}
  </div>`;

const renderAbout = () => {
  const pillars = [
    ['database', 'Data Engineering', 'Kafka, Spark, Delta Lake, Airflow, dbt, SQL Server warehouses and ETL that runs on schedule.'],
    ['monitor', 'Full-Stack Systems', 'ASP.NET Core 8 / C#, EF Core, Next.js — POS, CRM, e-commerce and support desks in production.'],
    ['workflow', 'Automation', 'WhatsApp campaigns, Power Automate, n8n and GitHub Actions that remove repetitive work.'],
    ['chartBar', 'Analytics & BI', 'Power BI, Excel / DAX and custom web dashboards with AI-assisted insights.']
  ];
  return `
  <section id="about" class="relative py-24 lg:py-32">
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
      <div class="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">
        <div data-reveal>
          <p class="eyebrow">About me</p>
          <h2 class="mt-3 font-display font-bold tracking-tight text-fg text-4xl sm:text-5xl leading-[1.05]">From raw data to <span class="gradient-text">production systems</span>.</h2>
          <div class="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>I'm a <span class="text-fg">Software Engineer at Uni Group</span> and a Data Engineer based in ${esc(p.location)}. I don't stop at prototypes — I design, build and ship complete systems that people use every day (and was named <span class="text-fg">Best Employee of the Month</span> for it).</p>
            <p>On the data side I build streaming and batch pipelines, lakehouses and warehouses. On the application side I build business software with <span class="text-fg">clean architecture, roles, validation, audit logs and tests</span> — so it keeps running after launch.</p>
            <p>I'm a DEPI-certified Microsoft Data Engineer, a former Data Engineering instructor at ASL, and a graduate of the Faculty of Economics &amp; Political Science, Cairo University (Class of 2026) — which keeps me focused on the question that matters: <span class="text-fg">what decision does this data or system make better?</span></p>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="${p.github}" target="_blank" rel="noopener" class="btn-ghost btn-sm">${icon('github', 'w-4 h-4')} github.com/Amr-Walid</a>
            <a href="${p.linkedin}" target="_blank" rel="noopener" class="btn-ghost btn-sm">${icon('linkedin', 'w-4 h-4')} LinkedIn</a>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-4" data-reveal-group>
          ${pillars
            .map(
              ([ic, t, txt]) => `
            <article class="pillar spotlight" data-reveal>
              <span class="pillar-icon">${icon(ic, 'w-5 h-5')}</span>
              <h3 class="mt-4 font-semibold text-fg text-lg">${t}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">${txt}</p>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>`;
};

const renderProjectCard = (pr: any, i: number) => {
  const imgs = projectImages(pr);
  const ic = projectIcon[pr.image] || categoryIcon[pr.category] || 'code';
  const hue = categoryHue[pr.category] || categoryHue['Full-Stack'];
  const media = imgs.length
    ? `<img src="${imgs[0]}" alt="${esc(pr.title)} preview" loading="lazy" decoding="async" class="card-img">`
    : `<div class="card-art bg-gradient-to-br ${hue}">
         <div class="card-art-grid"></div>
         <span class="card-art-icon">${icon(ic, 'w-10 h-10')}</span>
         <span class="card-art-label">${esc(pr.techStack[0] || pr.category)}</span>
       </div>`;
  const chips = (pr.techStack || []).slice(0, 4).map((t: string) => `<li>${esc(t)}</li>`).join('');
  return `
    <article class="project-card group" data-category="${esc(pr.category)}" data-index="${i}" data-reveal tabindex="0" role="button" aria-label="Open case study: ${esc(pr.title)}" data-project="${pr.id}">
      <div class="card-media">
        ${media}
        <div class="card-media-overlay"></div>
        <span class="card-cat">${icon(categoryIcon[pr.category] || 'code', 'w-3.5 h-3.5')} ${esc(pr.category)}</span>
        ${pr.status ? `<span class="card-status">${esc(pr.status)}</span>` : pr.website ? `<span class="card-status live"><i></i>Live</span>` : ''}
        ${imgs.length > 1 ? `<span class="card-count">${icon('image', 'w-3.5 h-3.5')} ${imgs.length}</span>` : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(pr.title)}</h3>
        <p class="card-summary">${esc(pr.summary)}</p>
        <ul class="card-chips">${chips}</ul>
        <div class="card-foot">
          <span class="card-cta">Case study ${icon('arrowRight', 'w-4 h-4')}</span>
          <span class="flex items-center gap-1.5">
            ${pr.github ? `<a href="${pr.github}" target="_blank" rel="noopener" class="mini-link" aria-label="Source code" data-stop>${icon('github', 'w-4 h-4')}</a>` : ''}
            ${pr.website ? `<a href="${pr.website}" target="_blank" rel="noopener" class="mini-link" aria-label="Live demo" data-stop>${icon('arrowUpRight', 'w-4 h-4')}</a>` : ''}
          </span>
        </div>
      </div>
    </article>`;
};

const renderProjects = () => {
  const counts: Record<string, number> = {};
  d.projects.forEach((pr: any) => (counts[pr.category] = (counts[pr.category] || 0) + 1));
  return `
  <section id="projects" class="relative py-24 lg:py-32 bg-base-2/40 border-y border-line/[0.06]">
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
      ${sectionHead(
        'Selected work',
        `Projects &amp; <span class="gradient-text">case studies</span>`,
        `${d.projects.length} real projects across data engineering, business systems, automation and the web — each with the problem, the architecture and the impact.`
      )}

      <div class="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter projects by category" data-reveal>
        <button class="chip-tab active" data-filter="all" aria-pressed="true">All <span class="chip-count">${d.projects.length}</span></button>
        ${d.categories
          .map(
            (c: string) =>
              `<button class="chip-tab" data-filter="${esc(c)}" aria-pressed="false">${icon(categoryIcon[c], 'w-4 h-4')} ${esc(c)} <span class="chip-count">${counts[c] || 0}</span></button>`
          )
          .join('')}
      </div>

      <div id="projectsGrid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${d.projects.map(renderProjectCard).join('')}
      </div>

      <div class="mt-12 flex justify-center">
        <button id="showMoreBtn" class="btn-ghost">${icon('chevronDown', 'w-4 h-4')} <span>Show all projects</span></button>
      </div>
    </div>
  </section>`;
};

const renderServices = () => {
  const services = [
    ['globe', 'Websites & Web Apps', 'Fast, bilingual (Arabic RTL / English) sites, portals and internal tools — custom code or WordPress themes your team can edit.', ['Company sites & landing pages', 'Custom WordPress themes', 'Next.js / ASP.NET Core apps']],
    ['monitor', 'Business Systems', 'Replace scattered spreadsheets with real software: POS, CRM, e-commerce, inventory & asset tracking, support desks.', ['Roles, permissions & audit logs', 'Reports with Excel / CSV export', 'Clean, tested architecture']],
    ['workflow', 'Automation & Integrations', 'Automate the repetitive work: marketing campaigns, RFM segmentation, scheduled reports and data syncing between tools.', ['WhatsApp & marketing automation', 'Power Automate / n8n flows', 'Scheduled jobs & alerts']],
    ['database', 'Data Engineering & ETL', 'Batch and streaming pipelines, lakehouses and warehouses that turn scattered sources into one reliable foundation.', ['Kafka / Spark / Airflow / dbt', 'SQL Server & PostgreSQL warehouses', 'Dockerized & monitored']],
    ['chartBar', 'Dashboards & BI', 'See your business clearly with KPI dashboards in Power BI, Excel (Power Query / DAX) or custom web apps with AI insights.', ['Power BI & Excel dashboards', 'KPI & performance reporting', 'AI-assisted web dashboards']]
  ];
  return `
  <section id="services" class="relative py-24 lg:py-32">
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
      ${sectionHead(
        'How I can help',
        `Services for <span class="gradient-text">businesses</span>`,
        'I turn manual, spreadsheet-driven work into reliable software — from the website down to the database and the automations behind it.'
      )}
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${services
          .map(
            ([ic, t, txt, bullets]: any) => `
          <article class="service-card spotlight" data-reveal>
            <span class="pillar-icon">${icon(ic, 'w-5 h-5')}</span>
            <h3 class="mt-5 font-semibold text-xl text-fg">${t}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">${txt}</p>
            <ul class="mt-5 space-y-2 text-sm">
              ${bullets.map((b: string) => `<li class="flex items-start gap-2 text-fg/80">${icon('check', 'w-4 h-4 mt-0.5 text-accent-400 shrink-0')}${b}</li>`).join('')}
            </ul>
          </article>`
          )
          .join('')}
        <article class="service-card cta-card" data-reveal>
          <span class="pillar-icon bg-white/15 text-white">${icon('sparkles', 'w-5 h-5')}</span>
          <h3 class="mt-5 font-semibold text-xl text-white">Not sure what you need?</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/80">Tell me about the manual process, the messy data or the report that takes days — I'll propose the simplest system that solves it.</p>
          <a href="#contact" class="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 text-sm hover:-translate-y-0.5 transition-transform">Start a conversation ${icon('arrowRight', 'w-4 h-4')}</a>
        </article>
      </div>

      <!-- Process -->
      <div class="mt-24" data-reveal>
        <p class="eyebrow justify-center text-center">Process</p>
        <h3 class="mt-3 text-center font-display font-bold text-fg text-3xl sm:text-4xl tracking-tight">How a project runs</h3>
      </div>
      <ol class="process mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${d.process
          .map(
            (s: any, i: number) => `
          <li class="process-step" data-reveal style="--i:${i}">
            <span class="process-num">${s.step}</span>
            <h4 class="mt-4 font-semibold text-lg text-fg">${esc(s.title)}</h4>
            <p class="mt-2 text-sm text-muted leading-relaxed">${esc(s.text)}</p>
          </li>`
          )
          .join('')}
      </ol>
    </div>
  </section>`;
};

const renderExperience = () => `
  <section id="experience" class="relative py-24 lg:py-32 bg-base-2/40 border-y border-line/[0.06]">
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
      <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div class="lg:sticky lg:top-28 self-start" data-reveal>
          <p class="eyebrow">Career path</p>
          <h2 class="mt-3 font-display font-bold tracking-tight text-fg text-4xl sm:text-5xl leading-[1.05]">Experience &amp; <span class="gradient-text">education</span></h2>
          <p class="mt-4 text-lg text-muted leading-relaxed">Software engineering at Uni Group, a national Microsoft Data Engineer programme and university teaching — alongside an economics degree that sharpens how I think about data.</p>

          <div class="mt-10 grid grid-cols-3 gap-3">
            <div class="mini-stat"><span class="text-2xl font-display font-bold text-fg">1+</span><span>Year as Software Engineer</span></div>
            <div class="mini-stat"><span class="text-2xl font-display font-bold text-fg">3</span><span>Awards &amp; honours</span></div>
            <div class="mini-stat"><span class="text-2xl font-display font-bold text-fg">5</span><span>Certificates</span></div>
          </div>
          <a href="#awards" class="mt-6 btn-ghost btn-sm">${icon('award', 'w-4 h-4')} View certificates &amp; awards</a>
        </div>

        <ol class="timeline relative">
          <span class="timeline-line" aria-hidden="true"><span id="timelineFill"></span></span>
          ${d.experience
            .map(
              (e: any, i: number) => `
            <li class="timeline-item" data-reveal>
              <span class="timeline-dot${e.current ? ' current' : ''}">${icon(e.education ? 'graduation' : 'briefcase', 'w-4 h-4')}</span>
              <div class="timeline-card spotlight">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="period">${esc(e.period)}</span>
                  ${e.current ? '<span class="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5"><i class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></i>Current</span>' : ''}
                </div>
                <h3 class="mt-3 text-xl font-semibold text-fg">${esc(e.title)}</h3>
                <p class="mt-1 text-sm font-medium text-accent-400">${esc(e.type)}</p>
                ${e.award ? `<p class="award-pill">${icon('award', 'w-3.5 h-3.5')} ${esc(e.award)}</p>` : ''}
                <p class="mt-3 text-sm leading-relaxed text-muted">${esc(e.description)}</p>
                <ul class="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  ${e.highlights.map((h: string) => `<li class="flex items-start gap-2 text-sm text-fg/75">${icon('check', 'w-4 h-4 mt-0.5 text-accent-400 shrink-0')}${esc(h)}</li>`).join('')}
                </ul>
              </div>
            </li>`
            )
            .join('')}
        </ol>
      </div>
    </div>
  </section>`;


const renderAwards = () => {
  const withImg = d.certifications.filter((c: any) => c.image);
  const noImg = d.certifications.filter((c: any) => !c.image);
  return `
  <section id="awards" class="relative py-24 lg:py-32">
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
      ${sectionHead('Recognition', `Certificates &amp; <span class="gradient-text">awards</span>`, 'Honours from my employer and university, plus the national Microsoft Data Engineer programme. Click any certificate to view it full size.')}
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${withImg
          .map(
            (c: any, i: number) => `
          <button class="cert-card group" data-reveal data-cert="${i}" aria-label="View certificate: ${esc(c.title)}">
            <span class="cert-thumb"><img src="${c.image}" alt="${esc(c.title)} — ${esc(c.issuer)}" loading="lazy" decoding="async" width="400" height="280"></span>
            <span class="cert-kind ${c.kind === 'Award' ? 'award' : ''}">${icon(c.kind === 'Award' ? 'award' : 'checkCircle', 'w-3.5 h-3.5')} ${esc(c.kind)}</span>
            <span class="block mt-3 font-semibold text-fg leading-snug text-left">${esc(c.title)}</span>
            <span class="block mt-1 text-xs text-muted text-left">${esc(c.issuer)}</span>
            <span class="block mt-1 text-xs font-mono text-accent-400 text-left">${esc(c.date)}</span>
          </button>`
          )
          .join('')}
      </div>
      <div class="mt-6 grid sm:grid-cols-2 gap-4">
        ${noImg
          .map(
            (c: any) => `
          <div class="cert" data-reveal>
            <span class="cert-icon">${icon('award', 'w-5 h-5')}</span>
            <div class="min-w-0">
              <p class="font-semibold text-fg text-sm leading-snug">${esc(c.title)}</p>
              <p class="text-xs text-muted mt-0.5">${esc(c.issuer)}</p>
            </div>
            <span class="cert-badge ${c.date === 'In Progress' ? 'progress' : ''}">${esc(c.date)}</span>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
};

const renderContact = () => `
  <section id="contact" class="relative py-24 lg:py-32 overflow-hidden">
    <div class="aurora aurora-soft" aria-hidden="true"><span></span><span></span></div>
    <div class="relative max-w-6xl mx-auto px-5 sm:px-6">
      <div class="contact-shell rounded-[2rem] p-6 sm:p-10 lg:p-14" data-reveal>
        <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <p class="eyebrow">Get in touch</p>
            <h2 class="mt-3 font-display font-bold tracking-tight text-fg text-4xl sm:text-5xl leading-[1.05]">Let's build something <span class="gradient-text">that works</span>.</h2>
            <p class="mt-4 text-lg text-muted leading-relaxed">A data challenge, a system to replace spreadsheets, a website, or a role on your team — tell me about it. I usually reply within 24 hours.</p>

            <div class="mt-8 space-y-3">
              <div class="contact-row">
                <span class="pillar-icon">${icon('mail', 'w-5 h-5')}</span>
                <a href="mailto:${p.email}" class="min-w-0 flex-1"><span class="block text-xs text-muted">Email</span><span class="block font-medium text-fg break-all">${esc(p.email)}</span></a>
                <button class="icon-btn" id="copyEmail" data-email="${esc(p.email)}" aria-label="Copy email">${icon('copy', 'w-4 h-4')}</button>
              </div>
              <a href="${p.linkedin}" target="_blank" rel="noopener" class="contact-row">
                <span class="pillar-icon">${icon('linkedin', 'w-5 h-5')}</span>
                <span class="flex-1"><span class="block text-xs text-muted">LinkedIn</span><span class="block font-medium text-fg">in/amrwalidmaher</span></span>
                ${icon('arrowUpRight', 'w-4 h-4 text-muted')}
              </a>
              <a href="${p.github}" target="_blank" rel="noopener" class="contact-row">
                <span class="pillar-icon">${icon('github', 'w-5 h-5')}</span>
                <span class="flex-1"><span class="block text-xs text-muted">GitHub</span><span class="block font-medium text-fg">Amr-Walid</span></span>
                ${icon('arrowUpRight', 'w-4 h-4 text-muted')}
              </a>
              <div class="contact-row">
                <span class="pillar-icon">${icon('pin', 'w-5 h-5')}</span>
                <span class="flex-1"><span class="block text-xs text-muted">Location</span><span class="block font-medium text-fg">${esc(p.location)} · Remote friendly</span></span>
                <span class="text-xs font-mono text-muted" id="localTime"></span>
              </div>
            </div>
          </div>

          <form id="contactForm" class="space-y-4" novalidate>
            <div class="grid sm:grid-cols-2 gap-4">
              <label class="field"><span>Name *</span><input type="text" name="name" required maxlength="100" autocomplete="name" placeholder="Your name"></label>
              <label class="field"><span>Email *</span><input type="email" name="email" required maxlength="254" autocomplete="email" placeholder="you@company.com"></label>
            </div>
            <div>
              <span class="block text-sm font-medium text-fg/80 mb-2">I'm interested in</span>
              <div class="flex flex-wrap gap-2" id="topicChips">
                ${['Website / Web app', 'Business system', 'Automation', 'Data pipeline', 'Dashboard / BI', 'Job opportunity']
                  .map((t, i) => `<label class="topic-chip"><input type="radio" name="subject" value="${t}" ${i === 0 ? 'checked' : ''}><span>${t}</span></label>`)
                  .join('')}
              </div>
            </div>
            <label class="field"><span>Message *</span><textarea name="message" rows="5" required maxlength="5000" placeholder="Tell me about your project, timeline and goals…"></textarea></label>
            <input type="text" name="_gotcha" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
            <button type="submit" id="submitBtn" class="group btn-primary w-full justify-center py-4 text-base">${icon('send', 'w-4 h-4')} <span>Send message</span></button>
            <p id="formMessage" class="hidden text-sm font-medium rounded-xl px-4 py-3" role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </div>
  </section>`;

const renderFooter = () => `
  <footer class="border-t border-line/[0.07] py-10">
    <div class="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <img src="/assets/logo.svg" alt="" width="36" height="36" class="logo-mark w-9 h-9 rounded-xl" loading="lazy">
        <div class="leading-tight">
          <p class="font-semibold text-fg">Amr Walid</p>
          <p class="text-xs text-muted">${esc(p.title)}</p>
        </div>
      </div>
      <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted" aria-label="Footer">
        ${navLinks.map(([id, label]) => `<a href="#${id}" class="hover:text-fg transition-colors">${label}</a>`).join('')}
      </nav>
      <p class="text-sm text-muted">&copy; ${new Date().getFullYear()} Amr Walid. All rights reserved.</p>
    </div>
  </footer>
  <button id="backToTop" class="back-to-top icon-btn" aria-label="Back to top">${icon('arrowUp', 'w-5 h-5')}</button>`;

const renderModal = () => `
  <div id="projectModal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel" id="modalContent">
      <button class="icon-btn modal-close" data-close aria-label="Close case study">${icon('x', 'w-5 h-5')}</button>
      <div class="modal-scroll" id="modalScroll">
        <div class="modal-hero" id="modalHero"></div>
        <div class="px-6 sm:px-10 lg:px-14 pb-12">
          <div class="flex flex-wrap items-center gap-2 -mt-1">
            <span id="modalCategory" class="card-cat static"></span>
            <span id="modalStatus" class="card-status static hidden"></span>
          </div>
          <h2 id="modalTitle" class="mt-4 font-display font-bold tracking-tight text-fg text-3xl sm:text-4xl leading-tight"></h2>
          <p id="modalSummary" class="mt-3 text-lg text-muted max-w-3xl"></p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a id="modalLiveBtn" href="#" target="_blank" rel="noopener" class="group btn-primary btn-sm hidden">${icon('globe', 'w-4 h-4')} Live demo</a>
            <a id="modalGithubBtn" href="#" target="_blank" rel="noopener" class="btn-ghost btn-sm hidden">${icon('github', 'w-4 h-4')} Source code</a>
          </div>

          <div class="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-10">
            <div class="space-y-8">
              <div><h3 class="case-h">${icon('target', 'w-4 h-4')} The challenge</h3><p id="modalProblem" class="case-p"></p></div>
              <div><h3 class="case-h">${icon('lightbulb', 'w-4 h-4')} The solution</h3><p id="modalSolution" class="case-p"></p></div>
              <div><h3 class="case-h">${icon('layers', 'w-4 h-4')} Architecture</h3><div id="modalArchitecture" class="arch-flow"></div></div>
            </div>
            <aside class="space-y-8">
              <div class="surface rounded-2xl p-6"><h3 class="case-h">${icon('rocket', 'w-4 h-4')} Key impact</h3><ul id="modalImpact" class="mt-4 space-y-3"></ul></div>
              <div><h3 class="case-h">${icon('code', 'w-4 h-4')} Tech stack</h3><ul id="modalTechStack" class="card-chips mt-4"></ul></div>
            </aside>
          </div>

          <div class="mt-12 pt-6 border-t border-line/10 flex items-center justify-between gap-4">
            <button class="btn-ghost btn-sm" id="prevProject">${icon('chevronLeft', 'w-4 h-4')} <span class="hidden sm:inline">Previous</span></button>
            <span class="text-xs font-mono text-muted" id="modalIndex"></span>
            <button class="btn-ghost btn-sm" id="nextProject"><span class="hidden sm:inline">Next</span> ${icon('chevronRight', 'w-4 h-4')}</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="lightbox" class="lightbox hidden" role="dialog" aria-modal="true" aria-label="Image viewer">
    <button class="icon-btn lb-close" data-lb-close aria-label="Close image">${icon('x', 'w-5 h-5')}</button>
    <button class="icon-btn lb-prev" data-lb-prev aria-label="Previous image">${icon('chevronLeft', 'w-5 h-5')}</button>
    <img id="lightboxImg" alt="">
    <button class="icon-btn lb-next" data-lb-next aria-label="Next image">${icon('chevronRight', 'w-5 h-5')}</button>
    <p id="lightboxCount" class="lb-count"></p>
  </div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>`;

// ---------------------------------------------------------------- page

export const renderPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.title,
    email: `mailto:${p.email}`,
    url: SITE_URL,
    image: `${SITE_URL}/assets/profile.webp`,
    address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
    alumniOf: 'Faculty of Economics & Political Science, Cairo University',
    sameAs: [p.github, p.linkedin],
    knowsAbout: ['Data Engineering', 'ETL', 'Apache Kafka', 'Apache Spark', 'ASP.NET Core', 'C#', 'Python', 'SQL', 'Next.js', 'Power BI', 'Automation']
  };
  const safeJson = (o: unknown) => JSON.stringify(o).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Amr Walid — Data Engineer &amp; Full-Stack Developer | Pipelines, Systems &amp; Automation</title>
  <meta name="description" content="Amr Walid is a Data Engineer & Full-Stack developer in Cairo. Real-time data pipelines (Kafka, Spark, Azure), production business systems (POS, CRM, e-commerce, asset tracking), automation and WordPress sites.">
  <meta name="author" content="Amr Walid">
  <meta name="theme-color" content="#070a14" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f7f8fc" media="(prefers-color-scheme: light)">
  <link rel="canonical" href="${SITE_URL}/">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${SITE_URL}/">
  <meta property="og:title" content="Amr Walid — Data Engineer & Full-Stack Developer">
  <meta property="og:description" content="Real-time data pipelines, production business systems and automation — end to end.">
  <meta property="og:image" content="${SITE_URL}/assets/cryptopulse-architecture.webp">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
  <link rel="alternate icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"></noscript>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://avatars.githubusercontent.com; connect-src 'self' https://formspree.io;">

  <script>
    // Apply saved theme before first paint (no flash).
    (function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}}catch(e){}})();
  </script>
  <link rel="stylesheet" href="/assets/styles.compiled.css">
  <script type="application/ld+json">${safeJson(jsonLd)}</script>
</head>
<body class="bg-base text-fg font-sans antialiased">
  <a href="#main" class="skip-link">Skip to content</a>
  <div id="cursorGlow" aria-hidden="true"></div>
  ${renderNav()}
  <main id="main">
    ${renderHero()}
    ${renderMarquee()}
    ${renderAbout()}
    ${renderProjects()}
    ${renderServices()}
    ${renderExperience()}
    ${renderAwards()}
    ${renderContact()}
  </main>
  ${renderFooter()}
  ${renderModal()}
  <script>window.PROJECTS = ${safeJson(d.projects)};window.CERTS = ${safeJson(d.certifications.filter((c: any) => c.image).map((c: any) => ({ src: c.image, title: c.title })))};</script>
  <script src="/assets/script.js" defer></script>
</body>
</html>`;
};
