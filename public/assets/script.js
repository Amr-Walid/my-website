/* ============================================================
   Amr Walid Portfolio — Client-Side JavaScript
   Separated from index.tsx for clean Separation of Concerns
   ============================================================ */

// ===== PORTFOLIO DATA (injected from server at runtime via window.PROJECTS) =====
// This script expects `window.PROJECTS` to be set by an inline <script> in the HTML
// before this file is loaded. See index.tsx renderPage() for the injection point.

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
      ? '<div class="absolute top-4 right-4 text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-md font-bold border border-amber-500/20 backdrop-blur-sm shadow-lg z-20"><i class="fas fa-star text-[10px] mr-1"></i>Featured</div>'
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
          '<div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl border border-white/10 group-hover:bg-brand-500/20 transition-colors duration-500">' +
            '<i class="fas fa-' + p.image + ' text-white text-2xl group-hover:text-brand-400 transition-colors duration-500 shadow-sm"></i>' +
          '</div>' +
          
          // Title
          '<h3 class="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-accent-400 transition-all duration-300 px-4">' + p.title + '</h3>' +
          
          // Category
          '<div class="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">' +
             '<i class="fas fa-layer-group text-[10px] opacity-70"></i> ' + p.category +
          '</div>' +
 
          // View Details Hint
          '<div class="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-brand-400 text-sm font-semibold flex items-center gap-2">' +
             'View Details <i class="fas fa-arrow-right text-xs"></i>' +
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
    return '<li class="flex items-start gap-2 text-sm text-gray-600"><i class="fas fa-check text-emerald-500 mt-1 flex-shrink-0"></i>' + i + '</li>';
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
