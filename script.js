/* ============================================
   CLAUDE BUILDER CLUB — IIT MADRAS
   Scroll reveal, navbar, mobile menu, dark mode
   ============================================ */

// ── Dark / Light Mode Toggle ──
(function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('cbc-theme');

  // Apply saved preference or respect system preference
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cbc-theme', next);

    // Quick spin animation on toggle
    toggle.style.transform = 'rotate(180deg) scale(1.15)';
    setTimeout(() => { toggle.style.transform = ''; }, 350);
  });
})();

// ── Button Ripple / Glow Follow ──
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--x', ((e.clientX - rect.left) / rect.width * 100) + '%');
    btn.style.setProperty('--y', ((e.clientY - rect.top) / rect.height * 100) + '%');
  });
});

// ── Scroll Reveal ──
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const parent = entry.target.parentElement;
        const siblings = parent ? [...parent.querySelectorAll(':scope > .reveal')] : [];
        const idx = siblings.indexOf(entry.target);
        const delay = idx >= 0 ? idx * 100 : 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
revealElements.forEach((el) => revealObserver.observe(el));

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navActions = document.getElementById('navActions');

function closeMobileMenu() {
  navLinks.classList.remove('open');
  if (navActions) navActions.classList.remove('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity = '';
  spans[2].style.transform = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    navLinks.classList.add('open');
    if (navActions) navActions.classList.add('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Project Showcase ──

// ── CURATOR PICKS — edit these to update the leaderboard ──
// Set name + author for each rank. Leave name empty to show an open slot.
const CURATOR_PICKS = [
  { name: '', author: '' }, // 🥇 1st place
  { name: '', author: '' }, // 🥈 2nd place
  { name: '', author: '' }, // 🥉 3rd place
];

const PROJECTS_KEY = 'cbc-projects';
const COLORS = ['tile-olive','tile-blue','tile-pink','tile-lightpink','tile-purple','tile-orange'];

function getProjects() { return JSON.parse(localStorage.getItem(PROJECTS_KEY) || '[]'); }
function saveProjects(p) { localStorage.setItem(PROJECTS_KEY, JSON.stringify(p)); }

function esc(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderCard(p) {
  const links = [];
  if (p.github)  links.push(`<a href="${esc(p.github)}"  target="_blank" rel="noopener" class="project-btn">View Code</a>`);
  if (p.website) links.push(`<a href="${esc(p.website)}" target="_blank" rel="noopener" class="project-btn">View Website</a>`);
  if (p.demo)    links.push(`<a href="${esc(p.demo)}"    target="_blank" rel="noopener" class="project-btn">View Demo</a>`);
  const tags = p.tags.map(t => `<span class="project-tag">${esc(t)}</span>`).join('');
  return `
    <div class="project-card ${p.color}">
      <div class="project-card-body">
        <h3 class="project-title">${esc(p.name)}</h3>
        <p class="project-author">${esc(p.author)}</p>
        <p class="project-desc">${esc(p.desc)}</p>
        <div class="project-tags">${tags}</div>
      </div>
      ${links.length ? `<div class="project-card-footer">${links.join('')}</div>` : ''}
    </div>`;
}

function renderLeaderboard() {
  const lbBody = document.getElementById('lbBody');
  if (!lbBody) return;

  const medals = ['🥇','🥈','🥉'];
  const cls    = ['lb-rank-gold','lb-rank-silver','lb-rank-bronze'];

  lbBody.innerHTML = CURATOR_PICKS.map((pick, i) => {
    const filled = pick.name.trim() !== '';
    return filled ? `
      <div class="lb-row ${cls[i]}">
        <div class="lb-medal">${medals[i]}</div>
        <div class="lb-info">
          <p class="lb-proj-name">${esc(pick.name)}</p>
          <p class="lb-proj-author">${esc(pick.author)}</p>
        </div>
        <div class="lb-score-col">
          <span class="lb-goodies-badge">Claude Goodies</span>
        </div>
      </div>` : `
      <div class="lb-row lb-row-empty ${cls[i]}" style="cursor:pointer">
        <div class="lb-medal">${medals[i]}</div>
        <div class="lb-info">
          <p class="lb-proj-name lb-tbd">Your project could be here</p>
          <p class="lb-proj-author">Submit yours →</p>
        </div>
        <div class="lb-score-col"><span class="lb-pts lb-tbd">—</span></div>
      </div>`;
  }).join('');

  lbBody.querySelectorAll('.lb-row-empty').forEach(r => r.addEventListener('click', openModal));
}

function renderProjects() {
  const projects = getProjects();
  const emptyEl  = document.getElementById('showcaseEmpty');
  const gridEl   = document.getElementById('projectGrid');
  if (!emptyEl || !gridEl) return;

  if (projects.length === 0) {
    emptyEl.style.display = 'block';
    gridEl.style.display  = 'none';
    gridEl.innerHTML = '';
  } else {
    emptyEl.style.display = 'none';
    gridEl.style.display  = 'grid';
    gridEl.innerHTML = projects.map(p => renderCard(p)).join('');
  }
  renderLeaderboard();
}

// ── Modal ──
const modalOverlay = document.getElementById('modalOverlay');
const submitBtn    = document.getElementById('submitProjectBtn');
const emptySubBtn  = document.getElementById('emptySubmitBtn');
const modalClose   = document.getElementById('modalClose');
const submitForm   = document.getElementById('submitForm');
const formSuccess  = document.getElementById('formSuccess');

function openModal() {
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

submitBtn.addEventListener('click', openModal);
if (emptySubBtn) emptySubBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tags = [...document.querySelectorAll('.tag-checkbox:checked')].map(cb => cb.value);
  const project = {
    id:          Date.now().toString(),
    name:        document.getElementById('f-project').value.trim(),
    author:      document.getElementById('f-name').value.trim(),
    desc:        document.getElementById('f-desc').value.trim(),
    tags,
    github:      document.getElementById('f-github').value.trim(),
    website:     document.getElementById('f-website').value.trim(),
    demo:        document.getElementById('f-demo').value.trim(),
    color:       COLORS[Math.floor(Math.random() * COLORS.length)],
    submittedAt: Date.now(),
  };
  const projects = getProjects();
  projects.push(project);
  saveProjects(projects);

  submitForm.classList.add('hidden');
  formSuccess.classList.add('visible');
  renderProjects();

  setTimeout(closeModal, 2600);
  setTimeout(() => {
    submitForm.classList.remove('hidden');
    formSuccess.classList.remove('visible');
    submitForm.reset();
  }, 3000);
});

// init
renderProjects();
