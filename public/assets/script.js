/* ============================================================
   Amr Walid Portfolio — client-side interactions
   Cards are rendered server-side; this file only enhances them.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var PROJECTS = window.PROJECTS || [];

  var ICON = {
    check: '<svg class="w-4 h-4 mt-1 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    left: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    right: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    arrow: '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function toast(msg) {
    var t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  /* ---------------- Theme ---------------- */
  function initTheme() {
    var btn = $('#themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var toLight = root.classList.contains('dark');
      root.classList.toggle('dark', !toLight);
      root.classList.toggle('light', toLight);
      try { localStorage.setItem('theme', toLight ? 'light' : 'dark'); } catch (e) {}
    });
  }

  /* ---------------- Navbar: scrolled state, hide on scroll down, progress ---------------- */
  function initNavbar() {
    var nav = $('#navbar');
    var bar = $('#scrollProgress');
    var top = $('#backToTop');
    var menu = $('#mobileMenu');
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      if (nav) {
        nav.classList.toggle('scrolled', y > 20);
        var menuOpen = menu && !menu.classList.contains('hidden');
        if (y > 400 && y > lastY + 4 && !menuOpen) nav.classList.add('nav-hidden');
        else if (y < lastY - 4 || y <= 400) nav.classList.remove('nav-hidden');
      }
      if (top) top.classList.toggle('show', y > 900);
      lastY = y;
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
    if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); });
  }

  /* ---------------- Mobile menu ---------------- */
  function initMobileMenu() {
    var btn = $('#mobileMenuBtn');
    var menu = $('#mobileMenu');
    if (!btn || !menu) return;
    function set(open) {
      menu.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      $('.menu-open', btn).classList.toggle('hidden', open);
      $('.menu-close', btn).classList.toggle('hidden', !open);
    }
    btn.addEventListener('click', function () { set(menu.classList.contains('hidden')); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
  }

  /* ---------------- Active nav link ---------------- */
  function initActiveNav() {
    var links = $$('[data-nav]');
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle('active', l.dataset.nav === e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('section[id]').forEach(function (s) { io.observe(s); });
  }

  /* ---------------- Typed roles ---------------- */
  function initTyped() {
    var el = $('#typedRole');
    if (!el || reduceMotion) return;
    var art = $('#typedArticle');
    var roles = ['Data Engineer', 'Full-Stack Developer', 'Automation Builder', 'BI & Analytics Engineer'];
    var r = 0, i = roles[0].length, deleting = true;
    function tick() {
      if (deleting) {
        i--;
        if (i <= 0) { deleting = false; r = (r + 1) % roles.length; i = 0; }
      } else {
        i++;
        if (i >= roles[r].length) { deleting = true; el.textContent = roles[r]; return setTimeout(tick, 2000); }
      }
      el.textContent = roles[r].slice(0, i) || '\u00a0';
      if (art) art.textContent = /^[AEIOU]/.test(roles[r]) ? 'an' : 'a';
      setTimeout(tick, deleting ? 45 : 85);
    }
    setTimeout(tick, 2400);
  }

  /* ---------------- Counters ---------------- */
  function animateCount(el) {
    var target = parseInt(el.dataset.count, 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    var start = performance.now(), dur = 1600;
    function step(now) {
      var t = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 4)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------- Reveal on scroll (with stagger) ---------------- */
  function initReveal() {
    var els = $$('[data-reveal]');
    var counters = $$('[data-count]');
    if (!('IntersectionObserver' in window) || /[?&]reveal=all/.test(location.search)) {
      els.forEach(function (e) { e.classList.add('in'); });
      counters.forEach(animateCount);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.filter(function (e) { return e.isIntersecting; }).forEach(function (e, idx) {
        e.target.style.setProperty('--rd', Math.min(idx * 90, 450) + 'ms');
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });

    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });

    // Safety net: never leave on-screen content invisible.
    setTimeout(function () {
      $$('[data-reveal]:not(.in)').forEach(function (e) {
        if (e.getBoundingClientRect().top < window.innerHeight) e.classList.add('in');
      });
    }, 1500);
  }

  /* ---------------- Skills tabs ---------------- */
  function initSkills() {
    var tabs = $$('[data-skill-tab]');
    var panels = $$('[data-skill-panel]');
    function show(i) {
      tabs.forEach(function (t) { var on = t.dataset.skillTab === String(i); t.classList.toggle('active', on); t.setAttribute('aria-selected', on); });
      panels.forEach(function (p) {
        var on = p.dataset.skillPanel === String(i);
        p.classList.toggle('hidden', !on);
        p.classList.remove('in');
        if (on) requestAnimationFrame(function () { requestAnimationFrame(function () { p.classList.add('in'); }); });
      });
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.skillTab); }); });
    var first = panels[0];
    if (first && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { first.classList.add('in'); io.disconnect(); }
      }, { threshold: 0.3 });
      io.observe(first);
    } else if (first) first.classList.add('in');
  }

  /* ---------------- Project filters + show more ---------------- */
  var INITIAL = 9;
  var currentFilter = 'all';
  var expanded = false;

  function visibleCards() {
    return $$('.project-card').filter(function (c) { return !c.classList.contains('is-hidden') && !c.classList.contains('collapsed'); });
  }

  function applyFilter(animate) {
    var matched = 0;
    $$('.project-card').forEach(function (c) {
      var match = currentFilter === 'all' || c.dataset.category === currentFilter;
      c.classList.toggle('is-hidden', !match);
      c.classList.toggle('collapsed', match && currentFilter === 'all' && !expanded && matched >= INITIAL);
      if (match) matched++;
    });
    var btn = $('#showMoreBtn');
    if (btn) btn.parentElement.classList.toggle('hidden', currentFilter !== 'all' || expanded || matched <= INITIAL);
    if (!animate) return;
    visibleCards().forEach(function (c, i) {
      c.classList.remove('in');
      c.style.setProperty('--rd', Math.min(i * 60, 480) + 'ms');
      requestAnimationFrame(function () { requestAnimationFrame(function () { c.classList.add('in'); }); });
    });
  }

  function initFilters() {
    $$('[data-filter]').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('[data-filter]').forEach(function (x) { x.classList.toggle('active', x === b); x.setAttribute('aria-selected', x === b); });
        currentFilter = b.dataset.filter;
        applyFilter(true);
      });
    });
    var more = $('#showMoreBtn');
    if (more) more.addEventListener('click', function () { expanded = true; applyFilter(true); });
    applyFilter(false);
  }

  /* ---------------- 3D tilt, spotlight, magnetic buttons, cursor glow ---------------- */
  function initPointerFx() {
    if (!finePointer || reduceMotion) return;
    var spotEv = null, spotRaf = 0;
    document.addEventListener('pointermove', function (e) {
      spotEv = e;
      if (spotRaf) return;
      spotRaf = requestAnimationFrame(function () {
        spotRaf = 0;
        var t = spotEv.target.closest && spotEv.target.closest('.spotlight, .project-card');
        if (!t) return;
        var r = t.getBoundingClientRect();
        t.style.setProperty('--mx', (spotEv.clientX - r.left) + 'px');
        t.style.setProperty('--my', (spotEv.clientY - r.top) + 'px');
      });
    }, { passive: true });

    $$('.project-card').forEach(function (card) {
      var tr = 0, tx = 0, ty = 0;
      card.addEventListener('pointermove', function (e) {
        tx = e.clientX; ty = e.clientY;
        if (tr) return;
        tr = requestAnimationFrame(function () {
          tr = 0;
          var r = card.getBoundingClientRect();
          var x = (tx - r.left) / r.width - 0.5;
          var y = (ty - r.top) / r.height - 0.5;
          card.style.transform = 'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' + (x * 6).toFixed(2) + 'deg) translateY(-6px)';
        });
      }, { passive: true });
      card.addEventListener('pointerleave', function () { if (tr) { cancelAnimationFrame(tr); tr = 0; } card.style.transform = ''; });
    });

    $$('.magnetic').forEach(function (m) {
      m.addEventListener('pointermove', function (e) {
        var r = m.getBoundingClientRect();
        m.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.25).toFixed(1) + 'px)';
      });
      m.addEventListener('pointerleave', function () { m.style.transform = ''; });
    });

    var glow = $('#cursorGlow');
    var gx = -999, gy = -999, cx = gx, cy = gy;
    var glowRaf = 0;
    function loop() {
      cx += (gx - cx) * 0.14; cy += (gy - cy) * 0.14;
      glow.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
      // stop the loop once the glow has caught up with the pointer (idle = 0 CPU)
      glowRaf = (Math.abs(gx - cx) + Math.abs(gy - cy) > 0.5) ? requestAnimationFrame(loop) : 0;
    }
    if (glow) window.addEventListener('pointermove', function (e) {
      gx = e.clientX; gy = e.clientY;
      if (cx < -900) { cx = gx; cy = gy; }
      if (!glowRaf) glowRaf = requestAnimationFrame(loop);
    }, { passive: true });

    var portrait = $('[data-parallax]');
    if (portrait) {
      var pr = 0, px = 0, py = 0;
      window.addEventListener('pointermove', function (e) {
        if (root.classList.contains('paused-fx')) return;
        px = e.clientX; py = e.clientY;
        if (pr) return;
        pr = requestAnimationFrame(function () {
          pr = 0;
          var x = (px / window.innerWidth - 0.5) * 14;
          var y = (py / window.innerHeight - 0.5) * 14;
          portrait.style.translate = x.toFixed(1) + 'px ' + y.toFixed(1) + 'px';
        });
      }, { passive: true });
    }
  }

  /* ---------------- Hero network canvas ---------------- */
  function initCanvas() {
    var c = $('#heroCanvas');
    if (!c || reduceMotion) return;
    var ctx = c.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var pts = [], W, H, running = true, mouse = { x: -9999, y: -9999 };

    function size() {
      W = c.clientWidth; H = c.clientHeight;
      c.width = W * dpr; c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(W < 768 ? 28 : 55, (W * H) / 26000));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 });
    }
    function color(a) { return root.classList.contains('light') ? 'rgba(27,111,245,' + a + ')' : 'rgba(120,190,255,' + a + ')'; }
    var raf = 0, inView = true;
    function frame() {
      if (!running) { raf = 0; return; }
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = color(0.7); ctx.strokeStyle = color(1); ctx.lineWidth = 1;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        var dxm = p.x - mouse.x, dym = p.y - mouse.y;
        if (dxm * dxm + dym * dym < 16000) { p.x += dxm * 0.01; p.y += dym * 0.01; }
        ctx.fillRect(p.x - 1.2, p.y - 1.2, 2.4, 2.4);
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, dd = dx * dx + dy * dy;
          if (dd < 13000) {
            ctx.globalAlpha = (1 - dd / 13000) * 0.35;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(frame);
    }
    size();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 150); });
    c.parentElement.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    c.parentElement.addEventListener('pointerleave', function () { mouse.x = mouse.y = -9999; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        inView = es[0].isIntersecting; sync();
      }).observe(c);
    }
    function sync() {
      running = inView && !document.hidden;
      if (running && !raf) raf = requestAnimationFrame(frame);
    }
    document.addEventListener('visibilitychange', sync);
    raf = requestAnimationFrame(frame);
  }

  /* ---------------- Timeline progress ---------------- */
  function initTimeline() {
    var fill = $('#timelineFill');
    var tl = $('.timeline');
    if (!fill || !tl) return;
    function update() {
      var r = tl.getBoundingClientRect();
      var pct = Math.max(0, Math.min(1, (window.innerHeight * 0.6 - r.top) / r.height));
      fill.style.height = (pct * 100) + '%';
    }
    var tk = false;
    window.addEventListener('scroll', function () { if (!tk) { tk = true; requestAnimationFrame(function () { tk = false; update(); }); } }, { passive: true });
    update();
  }

  /* ---------------- Case-study modal ---------------- */
  var modalOrder = [];
  var modalIdx = 0;
  var galleryImgs = [];
  var galleryIdx = 0;
  var lastFocus = null;

  function renderGallery() {
    var hero = $('#modalHero');
    var p = PROJECTS[modalOrder[modalIdx]];
    var imgs = p.imageUrls || (p.imageUrl ? [p.imageUrl] : []);
    galleryImgs = imgs; galleryIdx = 0;
    if (!imgs.length) {
      hero.innerHTML = '<div class="modal-gallery grid place-items-center bg-gradient-to-br from-brand-600/30 via-violet-600/20 to-accent-500/20" style="aspect-ratio:21/7">' +
        '<div class="text-center px-6"><p class="font-mono text-xs uppercase tracking-[0.2em] text-muted">' + esc(p.category) + '</p>' +
        '<p class="mt-2 font-display text-2xl sm:text-3xl font-bold text-fg">' + esc((p.techStack || []).slice(0, 3).join(' · ')) + '</p></div></div>';
      return;
    }
    var thumbs = imgs.length > 1
      ? '<div class="modal-thumbs">' + imgs.map(function (u, i) { return '<button data-thumb="' + i + '" class="' + (i === 0 ? 'active' : '') + '" aria-label="Show image ' + (i + 1) + '"><img src="' + u + '" alt="" loading="lazy"></button>'; }).join('') + '</div>'
      : '';
    var nav = imgs.length > 1
      ? '<button class="icon-btn gal-nav left-3" data-gal="-1" aria-label="Previous image">' + ICON.left + '</button><button class="icon-btn gal-nav right-3" data-gal="1" aria-label="Next image">' + ICON.right + '</button>'
      : '';
    hero.innerHTML = '<div class="modal-gallery"><img id="galleryMain" src="' + imgs[0] + '" alt="' + esc(p.title) + ' screenshot" title="Click to enlarge">' + nav + '</div>' + thumbs;
  }

  function setGallery(i) {
    if (!galleryImgs.length) return;
    galleryIdx = (i + galleryImgs.length) % galleryImgs.length;
    var img = $('#galleryMain');
    if (img) {
      img.style.opacity = '0';
      setTimeout(function () { img.onload = function () { img.style.opacity = '1'; }; img.src = galleryImgs[galleryIdx]; }, 150);
    }
    $$('[data-thumb]').forEach(function (b) { b.classList.toggle('active', +b.dataset.thumb === galleryIdx); });
  }

  function fillModal() {
    var p = PROJECTS[modalOrder[modalIdx]];
    if (!p) return;
    $('#modalTitle').textContent = p.title;
    $('#modalSummary').textContent = p.summary || '';
    $('#modalCategory').textContent = p.category;
    var st = $('#modalStatus');
    st.classList.toggle('hidden', !p.status);
    st.textContent = p.status || '';
    $('#modalProblem').textContent = p.problem || '';
    $('#modalSolution').textContent = p.solution || '';

    var parts = String(p.architecture || '').split(/\s*→\s*/).filter(Boolean);
    $('#modalArchitecture').innerHTML = parts.length > 1
      ? parts.map(function (n, i) { return '<span class="arch-node">' + esc(n) + '</span>' + (i < parts.length - 1 ? '<span class="arch-arrow">' + ICON.arrow + '</span>' : ''); }).join('')
      : '<p class="case-p mt-0">' + esc(p.architecture || '') + '</p>';

    $('#modalImpact').innerHTML = (p.impact || []).map(function (i) { return '<li class="flex gap-2.5 text-sm leading-relaxed text-fg/85">' + ICON.check + '<span>' + esc(i) + '</span></li>'; }).join('');
    $('#modalTechStack').innerHTML = (p.techStack || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');

    var gh = $('#modalGithubBtn'), live = $('#modalLiveBtn');
    gh.classList.toggle('hidden', !p.github); if (p.github) gh.href = p.github;
    live.classList.toggle('hidden', !p.website); if (p.website) live.href = p.website;

    $('#modalIndex').textContent = (modalIdx + 1) + ' / ' + modalOrder.length;
    renderGallery();
    $('#modalScroll').scrollTop = 0;
  }

  function indexOfId(id) { for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return i; return -1; }

  function openModal(id) {
    var target = indexOfId(id);
    if (target < 0) return;
    modalOrder = visibleCards().map(function (c) { return indexOfId(c.dataset.project); }).filter(function (i) { return i > -1; });
    if (modalOrder.indexOf(target) === -1) modalOrder = PROJECTS.map(function (_, i) { return i; });
    modalIdx = modalOrder.indexOf(target);
    lastFocus = document.activeElement;
    fillModal();
    var m = $('#projectModal');
    m.classList.remove('hidden');
    root.style.overflow = 'hidden';
    requestAnimationFrame(function () { requestAnimationFrame(function () { m.classList.add('open'); }); });
    setTimeout(function () { $('.modal-close', m).focus({ preventScroll: true }); }, 60);
    try { history.replaceState(null, '', '#project=' + id); } catch (e) {}
  }

  function closeModal() {
    var m = $('#projectModal');
    m.classList.remove('open');
    setTimeout(function () { m.classList.add('hidden'); root.style.overflow = ''; }, 380);
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function stepModal(dir) {
    if (!modalOrder.length) return;
    modalIdx = (modalIdx + dir + modalOrder.length) % modalOrder.length;
    var scroll = $('#modalScroll');
    scroll.style.transition = 'opacity .15s ease';
    scroll.style.opacity = '0';
    setTimeout(function () { fillModal(); scroll.style.opacity = '1'; }, 150);
    try { history.replaceState(null, '', '#project=' + PROJECTS[modalOrder[modalIdx]].id); } catch (e) {}
  }

  /* ---------------- Lightbox ---------------- */
  function setLightbox(i) {
    if (!galleryImgs.length) return;
    galleryIdx = (i + galleryImgs.length) % galleryImgs.length;
    var img = $('#lightboxImg');
    img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
    img.src = galleryImgs[galleryIdx];
    $('#lightboxCount').textContent = galleryImgs.length > 1 ? (galleryIdx + 1) + ' / ' + galleryImgs.length : '';
    $$('.lb-prev, .lb-next').forEach(function (b) { b.classList.toggle('hidden', galleryImgs.length < 2); });
  }
  function openLightbox(i) { $('#lightbox').classList.remove('hidden'); setLightbox(i); }
  function closeLightbox() { $('#lightbox').classList.add('hidden'); if (!$('#projectModal').classList.contains('hidden')) setGallery(galleryIdx); }

  function initModal() {
    var grid = $('#projectsGrid');
    var m = $('#projectModal');
    var lb = $('#lightbox');
    if (!grid || !m) return;

    grid.addEventListener('click', function (e) {
      if (e.target.closest('[data-stop]')) return;
      var card = e.target.closest('.project-card');
      if (card) openModal(card.dataset.project);
    });
    grid.addEventListener('keydown', function (e) {
      var card = e.target.closest && e.target.closest('.project-card');
      if (card && e.target === card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModal(card.dataset.project); }
    });

    m.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) return closeModal();
      var g = e.target.closest('[data-gal]'); if (g) return setGallery(galleryIdx + Number(g.dataset.gal));
      var th = e.target.closest('[data-thumb]'); if (th) return setGallery(Number(th.dataset.thumb));
      if (e.target.id === 'galleryMain') return openLightbox(galleryIdx);
    });
    $('#prevProject').addEventListener('click', function () { stepModal(-1); });
    $('#nextProject').addEventListener('click', function () { stepModal(1); });

    lb.addEventListener('click', function (e) {
      if (e.target.closest('[data-lb-prev]')) return setLightbox(galleryIdx - 1);
      if (e.target.closest('[data-lb-next]')) return setLightbox(galleryIdx + 1);
      if (e.target.closest('[data-lb-close]') || e.target === lb) return closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') setLightbox(galleryIdx - 1);
        else if (e.key === 'ArrowRight') setLightbox(galleryIdx + 1);
        return;
      }
      if (m.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') stepModal(-1);
      else if (e.key === 'ArrowRight') stepModal(1);
      else if (e.key === 'Tab') {
        var f = $$('a[href], button', $('#modalContent')).filter(function (x) { return x.offsetParent !== null; });
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });

    // Touch swipe between projects
    var sx = 0, sy = 0;
    m.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    m.addEventListener('touchend', function (e) {
      if (e.target.closest('.modal-gallery, .modal-thumbs')) return;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 1.6) stepModal(dx < 0 ? 1 : -1);
    }, { passive: true });

    // Deep link: #project=<id>
    var match = location.hash.match(/^#project=(.+)$/);
    if (match && indexOfId(match[1]) > -1) setTimeout(function () { openModal(match[1]); }, 400);
  }

  /* ---------------- Contact form ---------------- */
  function initContact() {
    var form = $('#contactForm');
    if (!form) return;
    var btn = $('#submitBtn');
    var msg = $('#formMessage');
    var label = $('span', btn);

    function show(text, ok) {
      msg.textContent = text;
      msg.className = 'text-sm font-medium rounded-xl px-4 py-3 ' + (ok
        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
        : 'bg-rose-500/10 text-rose-500 border border-rose-500/20');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      $$('.field', form).forEach(function (f) {
        var input = $('input, textarea', f);
        var valid = input.checkValidity() && input.value.trim() !== '';
        f.classList.toggle('invalid', !valid);
        if (!valid) ok = false;
      });
      if (!ok) { show('Please fill in your name, a valid email and a message.', false); return; }
      if (form.elements._gotcha && form.elements._gotcha.value) return;

      btn.disabled = true;
      label.textContent = 'Sending…';
      fetch('https://formspree.io/f/xgonndrg', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('send failed'); show('Thanks! Your message was sent — I will get back to you within 24 hours.', true); form.reset(); })
        .catch(function () { show('Something went wrong. Please email me directly at amr.walid2022@feps.edu.eg', false); })
        .then(function () { btn.disabled = false; label.textContent = 'Send message'; });
    });
    $$('.field input, .field textarea', form).forEach(function (i) {
      i.addEventListener('input', function () { i.closest('.field').classList.remove('invalid'); });
    });

    var copy = $('#copyEmail');
    if (copy) copy.addEventListener('click', function () {
      var email = copy.dataset.email;
      if (navigator.clipboard) navigator.clipboard.writeText(email).then(function () { toast('Email copied to clipboard'); }, function () { toast(email); });
      else toast(email);
    });

    var t = $('#localTime');
    if (t) {
      var tick = function () {
        try { t.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Cairo' }).format(new Date()) + ' Cairo'; } catch (e) {}
      };
      tick(); setInterval(tick, 30000);
    }
  }

  /* ---------------- Certificates & awards lightbox ---------------- */
  function initCerts() {
    var certs = window.CERTS || [];
    if (!certs.length || !$('#lightbox')) return;
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-cert]');
      if (!b) return;
      e.preventDefault();
      galleryImgs = certs.map(function (c) { return c.src; });
      openLightbox(Number(b.dataset.cert));
      var img = $('#lightboxImg');
      if (img) img.alt = certs[Number(b.dataset.cert)].title || '';
    });
  }

  /* ---------------- Pause decorative animations when not visible ---------------- */
  function initFxPause() {
    var hero = $('#hero');
    var heroVisible = true;
    function sync() { root.classList.toggle('paused-fx', !heroVisible || document.hidden); }
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { heroVisible = es[0].isIntersecting; sync(); }, { rootMargin: '80px' }).observe(hero);
    }
    document.addEventListener('visibilitychange', sync);
  }

  function boot() {
    initTheme();
    initNavbar();
    initMobileMenu();
    initActiveNav();
    initTyped();
    initReveal();
    initSkills();
    initFilters();
    initPointerFx();
    initCanvas();
    initTimeline();
    initModal();
    initContact();
    initCerts();
    initFxPause();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();
