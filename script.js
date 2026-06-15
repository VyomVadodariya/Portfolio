/* ============================================================
   VYOM VADODARIYA — Portfolio JavaScript
   Navbar · Scroll effects · Animations · GitHub API · AI Orb
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────
   1. NAVBAR — scroll effect + active link
──────────────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const navOverlay= document.getElementById('navOverlay');
const allNavLinks = document.querySelectorAll('.nav-link[data-section]');

// Scroll — add glass effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  highlightActiveSection();
}, { passive: true });

// Mobile hamburger toggle
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  navOverlay.classList.toggle('show', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu on overlay click
navOverlay.addEventListener('click', closeMenu);

// Close menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  navOverlay.classList.remove('show');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Highlight active section based on scroll
function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 90;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-link[data-section="${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < bottom);
    }
  });
}


/* ──────────────────────────────────────────────
   2. INTERSECTION OBSERVER — reveal animations
──────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});


/* ──────────────────────────────────────────────
   3. STAT COUNTER ANIMATION
──────────────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1400;
  const step = target / (duration / 16);
  let current = 0;

  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsBlock = document.querySelector('.about-stats');
if (statsBlock) statObserver.observe(statsBlock);


/* ──────────────────────────────────────────────
   4. SMOOTH SCROLL — override for anchor links
──────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 70;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ──────────────────────────────────────────────
   5. GITHUB PROJECTS API
──────────────────────────────────────────────── */
const GITHUB_USERNAME = 'VyomVadodariya';
const FALLBACK_PROJECTS = [
  {
    name: 'OptCELL-global',
    description: 'A project focused on global cellular network optimisation and intelligent routing algorithms.',
    language: 'Python',
    html_url: `https://github.com/${GITHUB_USERNAME}/OptCELL-global`,
    homepage: null,
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: 'TerraSense',
    description: 'An earth observation and terrain analysis application leveraging ML models for geospatial intelligence.',
    language: 'Python',
    html_url: `https://github.com/${GITHUB_USERNAME}/TerraSense`,
    homepage: null,
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: 'smps-portal',
    description: 'A student management and performance system portal with a full-featured dashboard for institutions.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/smps-portal`,
    homepage: null,
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: 'AutoSRE-PostMortem',
    description: 'Automated site reliability engineering post-mortem report generator using AI to analyse incidents.',
    language: 'Python',
    html_url: `https://github.com/${GITHUB_USERNAME}/AutoSRE-PostMortem`,
    homepage: null,
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: 'Medhavi',
    description: 'An AI-powered intelligent tutoring and educational platform tailored for competitive exam preparation.',
    language: 'Python',
    html_url: `https://github.com/${GITHUB_USERNAME}/Medhavi`,
    homepage: null,
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: '2d-graphics-editor',
    description: 'A browser-based 2D vector and raster graphics editor with drawing tools and export capabilities.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/2d-graphics-editor`,
    homepage: null,
    stargazers_count: 0,
    forks_count: 0
  }
];

const LANG_COLORS = {
  Python:     '#3776AB',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML:       '#E34F26',
  CSS:        '#1572B6',
  C:          '#A8B9CC',
  'C++':      '#00599C',
  Java:       '#ED8B00',
  Rust:       '#CE422B',
  Go:         '#00ADD8',
  default:    '#94a3b8'
};

function getLangColor(lang) {
  return LANG_COLORS[lang] || LANG_COLORS.default;
}

function buildProjectCard(repo) {
  const card = document.createElement('article');
  card.className = 'project-card reveal-up';

  const lang = repo.language || 'Code';
  const langColor = getLangColor(repo.language);
  const desc = repo.description || 'A project by Vyom Vadodariya. Visit GitHub for full details.';
  const stars = repo.stargazers_count || 0;
  const name = repo.name || 'Project';
  const githubUrl = repo.html_url;
  const liveUrl = repo.homepage;

  card.innerHTML = `
    <div class="project-card-top">
      <div class="project-card-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      </div>
      ${stars > 0 ? `
      <div class="project-stars" aria-label="${stars} stars">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
        ${stars}
      </div>` : ''}
    </div>

    <h3 class="project-name">${escapeHtml(name)}</h3>
    <p class="project-desc">${escapeHtml(desc)}</p>

    <div class="project-lang" aria-label="Language: ${escapeHtml(lang)}">
      <span class="lang-dot" style="background:${langColor}" aria-hidden="true"></span>
      ${escapeHtml(lang)}
    </div>

    <div class="project-actions">
      <a href="${escapeHtml(githubUrl)}" class="project-btn project-btn--primary" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHtml(name)} on GitHub">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
      ${liveUrl ? `
      <a href="${escapeHtml(liveUrl)}" class="project-btn project-btn--secondary" target="_blank" rel="noopener noreferrer" aria-label="View live demo of ${escapeHtml(name)}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live
      </a>` : ''}
    </div>
  `;

  return card;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function loadProjects() {
  const grid    = document.getElementById('projectsGrid');
  const loading = document.getElementById('projectsLoading');

  let repos = null;

  try {
    const resp = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&type=public`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (resp.ok) {
      const data = await resp.json();
      // Filter out forks, sort by stars
      repos = data
        .filter(r => !r.fork)
        .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at) - new Date(a.updated_at)))
        .slice(0, 9);
    }
  } catch (_) {
    // API failed — use fallback
  }

  // Remove loading indicator
  if (loading) loading.remove();

  const projectsToShow = (repos && repos.length > 0) ? repos : FALLBACK_PROJECTS;

  projectsToShow.forEach((repo, i) => {
    const card = buildProjectCard(repo);
    card.style.setProperty('--delay', `${i * 0.08}s`);
    grid.appendChild(card);
  });

  // Re-observe newly added cards
  document.querySelectorAll('.project-card.reveal-up').forEach(el => {
    revealObserver.observe(el);
  });
}

loadProjects();


/* ──────────────────────────────────────────────
   6. COMMAND INTERFACE — mini canvas animations
──────────────────────────────────────────────── */

/* --- Mini Neural Net (AI/ML module icon) --- */
(function initMiniNet() {
  const canvas = document.getElementById('miniNet');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 44, H = 44;
  let t = 0;

  // 3 layers: input(2), hidden(3), output(1)
  const layers = [
    [{ x: 10, y: 14 }, { x: 10, y: 30 }],
    [{ x: 22, y: 9  }, { x: 22, y: 22 }, { x: 22, y: 35 }],
    [{ x: 34, y: 22 }]
  ];

  // Precompute all connections
  const conns = [];
  for (let l = 0; l < layers.length - 1; l++) {
    for (const a of layers[l]) {
      for (const b of layers[l + 1]) {
        conns.push({ a, b, offset: Math.random() * Math.PI * 2 });
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.04;

    // Draw connections
    conns.forEach(({ a, b, offset }) => {
      const alpha = 0.18 + 0.12 * Math.sin(t + offset);
      ctx.beginPath();
      ctx.strokeStyle = `rgba(74,144,217,${alpha})`;
      ctx.lineWidth = 0.9;
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();

      // Signal pulse
      const prog = ((t * 0.4 + offset) % (Math.PI * 2)) / (Math.PI * 2);
      const sx = a.x + (b.x - a.x) * prog;
      const sy = a.y + (b.y - a.y) * prog;
      if (prog > 0 && prog < 1) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(74,144,217,0.9)';
        ctx.arc(sx, sy, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw nodes
    layers.flat().forEach((n, i) => {
      const pulse = 0.7 + 0.3 * Math.sin(t * 1.5 + i * 0.8);
      // Glow
      const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 5);
      grd.addColorStop(0, `rgba(74,144,217,${0.3 * pulse})`);
      grd.addColorStop(1, 'rgba(74,144,217,0)');
      ctx.beginPath();
      ctx.fillStyle = grd;
      ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
      ctx.fill();
      // Core
      ctx.beginPath();
      ctx.fillStyle = `rgba(74,144,217,${0.8 * pulse})`;
      ctx.arc(n.x, n.y, 2.2 * pulse, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();


/* --- Mini Quant Chart (Quant module icon) --- */
(function initMiniChart() {
  const canvas = document.getElementById('miniChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 44, H = 44;
  let t = 0;

  // Static base curve points (sine wave shape)
  const pts = 20;
  function getY(i, time) {
    const x = i / (pts - 1);
    return H * 0.65 - Math.sin(x * Math.PI * 2.5 + time) * (H * 0.22) - x * (H * 0.08);
  }

  // Candlestick-like bars
  const bars = [
    { x: 7,  open: 30, close: 24, low: 32, high: 22 },
    { x: 14, open: 24, close: 20, low: 26, high: 18 },
    { x: 21, open: 20, close: 26, low: 21, high: 15 },
    { x: 28, open: 26, close: 22, low: 28, high: 20 },
    { x: 35, open: 22, close: 16, low: 24, high: 14 },
  ];

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.03;

    // Subtle grid
    ctx.strokeStyle = 'rgba(74,144,217,0.08)';
    ctx.lineWidth = 0.5;
    for (let row = 0; row < 3; row++) {
      const y = 10 + row * 12;
      ctx.beginPath();
      ctx.moveTo(4, y);
      ctx.lineTo(W - 4, y);
      ctx.stroke();
    }

    // Animated sine curve
    ctx.beginPath();
    for (let i = 0; i < pts; i++) {
      const x = 4 + (i / (pts - 1)) * (W - 8);
      const y = getY(i, t);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(74,144,217,0.7)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Fill under curve
    ctx.beginPath();
    for (let i = 0; i < pts; i++) {
      const x = 4 + (i / (pts - 1)) * (W - 8);
      const y = getY(i, t);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.lineTo(W - 4, H - 4);
    ctx.lineTo(4, H - 4);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, 'rgba(74,144,217,0.16)');
    grad.addColorStop(1, 'rgba(74,144,217,0)');
    ctx.fillStyle = grad;
    ctx.fill();

    // Moving dot on the curve tip
    const tipX = W - 4;
    const tipY = getY(pts - 1, t);
    ctx.beginPath();
    ctx.fillStyle = '#4a90d9';
    ctx.arc(tipX, tipY, 2.5, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(draw);
  }
  draw();
})();


/* ──────────────────────────────────────────────
   7. SKILL TAG STAGGER ANIMATION
──────────────────────────────────────────────── */
const skillGroupObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const tags = entry.target.querySelectorAll('.skill-tag');
      tags.forEach((tag, i) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';
        tag.style.transition = `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`;
        requestAnimationFrame(() => {
          tag.style.opacity = '1';
          tag.style.transform = 'translateY(0)';
        });
      });
      skillGroupObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-group').forEach(el => {
  // Set initial state
  el.querySelectorAll('.skill-tag').forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(10px)';
  });
  skillGroupObserver.observe(el);
});


/* ──────────────────────────────────────────────
   8. CURSOR TRAIL (subtle, desktop only)
──────────────────────────────────────────────── */
(function initCursorTrail() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch devices

  const TRAIL_COUNT = 6;
  const trail = [];

  for (let i = 0; i < TRAIL_COUNT; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      border-radius: 50%;
      background: rgba(74,144,217,${0.35 - i * 0.05});
      transition: width 0.2s, height 0.2s;
      mix-blend-mode: multiply;
      will-change: transform;
    `;
    const size = 10 - i * 1.2;
    dot.style.width = dot.style.height = `${Math.max(size, 3)}px`;
    dot.style.marginLeft = dot.style.marginTop = `-${Math.max(size, 3) / 2}px`;
    document.body.appendChild(dot);
    trail.push({ el: dot, x: -100, y: -100, tx: -100, ty: -100 });
  }

  window.addEventListener('mousemove', e => {
    trail[0].tx = e.clientX;
    trail[0].ty = e.clientY;
  }, { passive: true });

  function animate() {
    trail.forEach((item, i) => {
      if (i === 0) {
        item.x += (item.tx - item.x) * 0.35;
        item.y += (item.ty - item.y) * 0.35;
      } else {
        item.x += (trail[i - 1].x - item.x) * 0.28;
        item.y += (trail[i - 1].y - item.y) * 0.28;
      }
      item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
    });
    requestAnimationFrame(animate);
  }

  animate();
})();


/* ──────────────────────────────────────────────
   9. HERO TEXT TYPEWRITER EFFECT
──────────────────────────────────────────────── */
(function initTypewriter() {
  const el = document.querySelector('.hero-headline');
  if (!el) return;

  const original = el.textContent;
  el.textContent = '';
  el.style.visibility = 'visible';

  let i = 0;
  function type() {
    if (i <= original.length) {
      el.textContent = original.slice(0, i);
      i++;
      setTimeout(type, i === 1 ? 700 : 28); // start delay + typing speed
    }
  }
  type();
})();


/* ──────────────────────────────────────────────
   10. INIT — ensure page starts at top
──────────────────────────────────────────────── */
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  highlightActiveSection();
});
