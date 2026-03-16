/* ============================================================
   Amr Walid Portfolio — Client-Side JavaScript
   Separated from index.tsx for clean Separation of Concerns
   ============================================================ */

// ===== PORTFOLIO DATA (injected from server at runtime via window.PROJECTS) =====
// This script expects `window.PROJECTS` to be set by an inline <script> in the HTML
// before this file is loaded. See index.tsx renderPage() for the injection point.

// ===== RENDER PROJECTS =====
function renderProjects(filter) {
  filter = filter || 'all';
  var projects = window.PROJECTS || [];
  var grid = document.getElementById('projectsGrid');
  if (!grid) return;

  var filtered = filter === 'all'
    ? projects
    : projects.filter(function(p) { return p.category === filter; });

  grid.innerHTML = filtered.map(function(p) {
    // --- Image Header ---
    var urls = p.imageUrls || (p.imageUrl ? [p.imageUrl] : []);
    var imageHeader = '';
    if (urls.length > 0) {
      var imgParts = urls.map(function(url, i) {
        var webpUrl = url.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        var border = i > 0 ? 'border-l border-gray-200' : '';
        return (
          '<div class="flex-1 h-full flex items-center justify-center p-3 bg-white ' + border + '" style="min-width:0">' +
            '<picture style="display:block;width:100%;height:100%;">' +
              '<source srcset="' + webpUrl + '" type="image/webp">' +
              '<img src="' + url + '" alt="' + p.title + ' - Image ' + (i + 1) + '" width="400" height="300" ' +
                   'style="display:block;width:100%;height:100%;object-fit:contain;" loading="lazy" decoding="async" />' +
            '</picture>' +
          '</div>'
        );
      });
      imageHeader = (
        '<div class="w-full h-36 sm:h-44 lg:h-48 bg-white border-b border-gray-200 flex flex-row overflow-hidden">' +
          imgParts.join('') +
        '</div>'
      );
    }

    // --- Featured Badge ---
    var featuredBadge = p.featured
      ? '<span class="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md font-bold">Featured</span>'
      : '';

    // --- Impact Items ---
    var impactItems = (p.impact || []).map(function(item) {
      return (
        '<li class="flex items-start gap-2 text-sm text-gray-600">' +
          '<i class="fas fa-check text-emerald-600 mt-0.5 text-xs" aria-hidden="true"></i>' +
          item +
        '</li>'
      );
    }).join('');

    // --- Tech Stack Tags ---
    var techItems = (p.techStack || []).map(function(t) {
      return (
        '<span class="tag px-2.5 py-1 bg-brand-50 text-brand-700 text-xs rounded-lg font-mono font-medium border border-brand-200 cursor-default">' +
          t +
        '</span>'
      );
    }).join('');

    // --- Full Card ---
    return (
      '<div class="glass glass-light rounded-2xl overflow-hidden card-hover group project-card flex flex-col h-full" data-category="' + p.category + '">' +
        imageHeader +
        '<div class="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">' +
          '<div class="flex items-start justify-between mb-4">' +
            '<div class="flex items-center gap-3">' +
              '<div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shrink-0 shadow-lg">' +
                '<i class="fas fa-' + p.image + ' text-white text-base sm:text-lg"></i>' +
              '</div>' +
              '<div>' +
                '<span class="text-xs font-bold text-brand-700 font-mono uppercase tracking-wider">' + p.category + '</span>' +
                featuredBadge +
              '</div>' +
            '</div>' +
            '<a href="' + p.github + '" target="_blank" rel="noopener noreferrer" ' +
               'aria-label="View ' + p.title + ' source code on GitHub" ' +
               'class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:text-brand-700 hover:bg-brand-100 transition-all shrink-0">' +
              '<i class="fab fa-github" aria-hidden="true"></i>' +
            '</a>' +
          '</div>' +
          '<h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-brand-400 transition-colors">' + p.title + '</h3>' +
          '<div class="mb-3">' +
            '<p class="text-xs font-bold text-red-700 font-mono uppercase tracking-wider mb-1">Problem</p>' +
            '<p class="text-sm text-gray-700 leading-relaxed">' + p.problem + '</p>' +
          '</div>' +
          '<div class="mb-3">' +
            '<p class="text-xs font-bold text-emerald-700 font-mono uppercase tracking-wider mb-1">Solution</p>' +
            '<p class="text-sm text-gray-700 leading-relaxed">' + p.solution + '</p>' +
          '</div>' +
          '<div class="mb-3 p-3 bg-gray-50 rounded-xl border border-gray-200">' +
            '<p class="text-xs font-bold text-purple-700 font-mono uppercase tracking-wider mb-1">Architecture</p>' +
            '<p class="text-xs text-gray-600 font-mono leading-relaxed">' + p.architecture + '</p>' +
          '</div>' +
          '<div class="mb-4">' +
            '<p class="text-xs font-bold text-sky-700 font-mono uppercase tracking-wider mb-2">Impact</p>' +
            '<ul class="space-y-1.5">' + impactItems + '</ul>' +
          '</div>' +
          '<div class="flex flex-wrap gap-2">' + techItems + '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

// ===== STYLE FILTER BUTTONS =====
function styleFilters() {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    if (btn.classList.contains('active')) {
      btn.className = 'filter-btn active px-5 py-2 rounded-xl text-sm font-semibold transition-all bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-500/25';
    } else {
      btn.className = 'filter-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all bg-gray-100 text-gray-600 hover:text-brand-400 border-gray-200 border';
    }
  });
}

// ===== PROJECT FILTERS =====
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
      styleFilters();
    });
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    var btn = document.getElementById('submitBtn');
    var msg = document.getElementById('formMessage');

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
      var data = Object.fromEntries(new FormData(form));
      var res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      var result = await res.json();

      if (result.success) {
        msg.textContent = 'Message sent successfully! I will get back to you soon.';
        msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
        form.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      msg.textContent = (err && err.message) || 'Something went wrong. Please try again.';
      msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20';
    }

    msg.classList.remove('hidden');
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    setTimeout(function() { msg.classList.add('hidden'); }, 5000);
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  var menuBtn = document.getElementById('mobileMenuBtn');
  var menu = document.getElementById('mobileMenu');
  if (!menuBtn || !menu) return;

  menuBtn.addEventListener('click', function() {
    var isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  document.querySelectorAll('#mobileMenu a').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (window.scrollY > 50) {
          navbar.classList.add('glass', 'glass-light', 'shadow-lg', 'py-0');
          navbar.classList.remove('py-2');
        } else {
          navbar.classList.remove('glass', 'glass-light', 'shadow-lg', 'py-0');
          navbar.classList.add('py-2');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  var observer = new IntersectionObserver(function(entries, obs) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-animate]').forEach(function(el) {
    observer.observe(el);
  });
}

// ===== ACTIVE NAV LINK =====
function initActiveNavLinks() {
  var sections = document.querySelectorAll('section[id]');
  var navLinksData = Array.from(sections).map(function(section) {
    return {
      section: section,
      link: document.querySelector('a[href="#' + section.id + '"]')
    };
  }).filter(function(item) { return item.link; });

  var navObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navLinksData.forEach(function(item) {
          if (item.section === entry.target) {
            item.link.classList.add('active', 'text-brand-400');
          } else {
            item.link.classList.remove('active', 'text-brand-400');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -80% 0px' });

  sections.forEach(function(sec) { navObserver.observe(sec); });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', function() {
  renderProjects();
  styleFilters();
  initFilters();
  initContactForm();
  initMobileMenu();
  initNavbarScroll();
  initScrollAnimations();
  initActiveNavLinks();
});
