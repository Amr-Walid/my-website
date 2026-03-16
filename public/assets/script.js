/* ============================================================
   Amr Walid Portfolio — Client-Side JavaScript
   Separated from index.tsx for clean Separation of Concerns
   ============================================================ */

// ===== PORTFOLIO DATA (injected from server at runtime via window.PROJECTS) =====
// This script expects `window.PROJECTS` to be set by an inline <script> in the HTML
// before this file is loaded. See index.tsx renderPage() for the injection point.

// ===== SVG ICON MAP (replaces Font Awesome icons) =====
var SVG_ICONS = {
  'server':     '<svg class="w-7 h-7 fill-current" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>',
  'bolt':       '<svg class="w-7 h-7 fill-current" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.8L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.2L349.4 44.6z"/></svg>',
  'chart-line': '<svg class="w-7 h-7 fill-current" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 211.3l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 206.6l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>',
  'database':   '<svg class="w-7 h-7 fill-current" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>',
  'chart-bar':  '<svg class="w-7 h-7 fill-current" viewBox="0 0 512 512"><path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>',
  'default':    '<svg class="w-7 h-7 fill-current" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"/></svg>'
};

// ===== RENDER PROJECTS (Simple Square Cards) =====
function renderProjects(filter) {
  filter = filter || 'all';
  var projects = window.PROJECTS || [];
  var grid = document.getElementById('projectsGrid');
  if (!grid) return;

  // Grid layout is handled in template.ts

  var filtered = filter === 'all'
    ? projects
    : projects.filter(function(p) { return p.category === filter; });

  grid.innerHTML = filtered.map(function(p) {
    // We use the first image as the background
    var mainImage = '';
    if (p.imageUrls && p.imageUrls.length > 0) {
        mainImage = p.imageUrls[0];
    } else if (p.imageUrl) {
        mainImage = p.imageUrl;
    }    // --- Background Image Container ---
    var bgImageDiv = mainImage 
      ? '<div class="project-card-bg" style="background-image: url(' + mainImage + ');"></div>'
      : '<div class="project-card-bg" style="background-image: linear-gradient(to bottom, #1e293b, #0f172a);"></div>';

    // Dark Overlay (Always present)
    var overlay = '<div class="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/40 transition-colors duration-500 z-[1]"></div>';

    // --- Featured Badge ---
    var featuredBadge = p.featured
      ? '<div class="absolute top-4 right-4 text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-md font-bold border border-amber-500/20 backdrop-blur-sm shadow-lg z-20 flex items-center gap-1"><svg class="w-2.5 h-2.5 fill-current" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>Featured</div>'
      : '';

    // --- Full Simple Square Card ---
    return (
      '<div class="relative overflow-hidden rounded-2xl cursor-pointer group card-hover project-card-square flex flex-col justify-center items-center p-6 text-center border border-slate-700/50 shadow-xl" ' +
           'onclick="openProjectModal(\'' + p.id + '\')">' +
        bgImageDiv +
        overlay +
        featuredBadge +
        
        // Content Container
        '<div class="project-card-content project-card-text-blur flex flex-col items-center">' +
          // Icon
          '<div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl border border-white/10 group-hover:bg-brand-500/20 transition-colors duration-500 text-white group-hover:text-brand-400 transition-colors duration-500">' +
            (SVG_ICONS[p.image] || SVG_ICONS['default']) +
          '</div>' +
          
          // Title
          '<h3 class="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-accent-400 transition-all duration-300 px-4">' + p.title + '</h3>' +
          
          // Category
          '<div class="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">' +
             '<svg class="w-3 h-3 fill-current opacity-70" viewBox="0 0 512 512"><path d="M0 80C0 53.5 21.5 32 48 32H176c26.5 0 48 21.5 48 48V208c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM0 304c0-26.5 21.5-48 48-48H176c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM288 80c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V208c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V80zM288 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V304z"/></svg> ' + p.category +
          '</div>' +
 
          // View Details Hint
          '<div class="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-brand-400 text-sm font-semibold flex items-center gap-2">' +
             'View Details <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>' +
          '</div>' +
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

    btn.innerHTML = '<svg class="w-4 h-4 fill-white animate-spin" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg> Sending...';
    btn.disabled = true;

    try {
      var formData = new FormData(form);
      // Use Formspree
      var res = await fetch('https://formspree.io/f/xgonndrg', { 
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (res.ok) {
        msg.textContent = 'Message sent successfully! I will get back to you soon.';
        msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
        form.reset();
      } else {
        var result = await res.json();
        throw new Error(result.error || 'Failed to send message.');
      }
    } catch (err) {
      msg.textContent = 'Oops! There was a problem sending your message. Please try again.';
      msg.className = 'text-center text-sm font-medium py-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20';
    }

    msg.classList.remove('hidden');
    btn.innerHTML = '<svg class="w-4 h-4 fill-white" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg> Send Message';
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

// ===== MODAL LOGIC =====
function openProjectModal(projectId) {
  var p = (window.PROJECTS || []).find(function(proj) { return proj.id === projectId; });
  if (!p) return;

  var modal = document.getElementById('projectModal');
  var content = document.getElementById('modalContent');
  
  // Populate Data
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalProblem').textContent = p.problem || 'No problem described.';
  document.getElementById('modalSolution').textContent = p.solution || 'No solution described.';
  document.getElementById('modalArchitecture').textContent = p.architecture || 'No architecture described.';
  
  // Github Link
  var githubBtn = document.getElementById('modalGithubBtn');
  if (p.github) {
    githubBtn.href = p.github;
    githubBtn.style.display = 'flex';
  } else {
    githubBtn.style.display = 'none';
  }

  // Tech Stack Tags
  var techHtml = (p.techStack || []).map(function(t) {
    return '<span class="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-md font-mono shadow-sm">' + t + '</span>';
  }).join('');
  document.getElementById('modalTechStack').innerHTML = techHtml || '<span class="text-sm text-gray-400">Not specified</span>';

  // Impact List
  var impactHtml = (p.impact || []).map(function(i) {
    return '<li class="flex items-start gap-2 text-sm text-gray-600"><svg class="w-4 h-4 fill-emerald-500 mt-0.5 flex-shrink-0" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>' + i + '</li>';
  }).join('');
  document.getElementById('modalImpact').innerHTML = impactHtml || '<li class="text-sm text-gray-400">No impact metrics described.</li>';

  // Images Header
  var urls = p.imageUrls || (p.imageUrl ? [p.imageUrl] : []);
  var imgContainer = document.getElementById('modalImages');
  if (urls.length > 0) {
    var imgHtml = urls.map(function(url, i) {
      var border = i > 0 ? 'border-t sm:border-t-0 sm:border-l border-gray-100' : '';
      return (
        '<div class="flex-1 min-h-[200px] flex items-center justify-center p-4 bg-white shadow-inner ' + border + '">' +
          '<img src="' + url + '" alt="Project Image" class="w-full h-full object-contain max-h-[300px]" loading="lazy" />' +
        '</div>'
      );
    }).join('');
    imgContainer.innerHTML = imgHtml;
    imgContainer.style.display = 'flex';
  } else {
    imgContainer.style.display = 'none';
  }

  // Show Modal
  modal.classList.remove('hidden');
  document.documentElement.classList.add('modal-open'); // Prevent html scroll
  document.body.classList.add('modal-open'); // Prevent body scroll
  
  // Small delay for scale-in animation
  setTimeout(function() {
    modal.classList.remove('opacity-0');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
  }, 10);
}

function closeProjectModal() {
  var modal = document.getElementById('projectModal');
  var content = document.getElementById('modalContent');
  
  // Transition out
  modal.classList.add('opacity-0');
  content.classList.remove('scale-100');
  content.classList.add('scale-95');
  
  // Wait for transition to finish before hiding
  setTimeout(function() {
    modal.classList.add('hidden');
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
  }, 300);
}

function initModalEvents() {
  var closeModalBtn = document.getElementById('closeModalBtn');
  var modalBackdrop = document.getElementById('modalBackdrop');
  
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeProjectModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeProjectModal);
  }

  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !document.getElementById('projectModal').classList.contains('hidden')) {
      closeProjectModal();
    }
  });
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
  initModalEvents(); // Added modal init
});
