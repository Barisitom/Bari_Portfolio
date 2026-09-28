// Nav scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t){ root.setAttribute('data-theme', t); themeToggle.textContent = t === 'dark' ? '◐' : '◑'; }
try {
  const saved = localStorage.getItem('ba-theme');
  applyTheme(saved || 'dark');
} catch(e) { applyTheme('dark'); }
themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('ba-theme', next); } catch(e) {}
});

// Animated counters
const stats = document.querySelectorAll('.stat h3');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) { el.textContent = target + '+'; counterObserver.unobserve(el); return; }
      let cur = 0;
      const step = Math.max(1, Math.round(target / 40));
      const tick = () => {
        cur = Math.min(target, cur + step);
        el.textContent = cur + '+';
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
stats.forEach(s => counterObserver.observe(s));

// Projects (edit this array to update your project info)
const projects = [
  { name: "Heaven's Touch Solution", desc: "Digital solutions website providing website development and graphic design services. Brand concept: digital innovation with a heavenly touch.", tech: ["HTML","CSS","JavaScript","Tailwind CSS"], repo: "https://github.com/Bari-byu/heaven-s", demo: "https://bari-byu.github.io/heaven-s/portfolio.html" },
  { name: "Community Fitness & Wellness Center", desc: "A responsive website focused on fitness and wellness services.", tech: ["HTML","CSS","JavaScript","API"], repo: "https://github.com/Barisitom/wdd231/tree/main/project", demo: "https://barisitom.github.io/wdd231/project/index.html" },
  { name: "Holy Land Construction", desc: "This is a web application to showcase the Companying Operation and Service they render.", tech: ["HTML", "CSS","JavaScript"], repo: "https://github.com/Barisitom/holyland", demo: "https://barisitom.github.io/holyland/holyland-construction-advanced/projects.html" },
  { name: "SleepOutside", desc: "An e-commerce-style outdoor product website demonstrating responsive design, JavaScript functionality and shopping-cart concepts.", tech: ["HTML","CSS","JavaScript"], repo: "https://github.com/Barisitom/WDD330-sleepoutside", demo: "https://barisitom.github.io/WDD330-sleepoutside/src/index.html" },
  { name: "Service Network", desc: "A full-stack application built around organizations, categories and service projects, with MVC architecture and server-side rendering.", tech: ["Node.js","Express.js","EJS","PostgreSQL"], repo: "https://github.com/Bari-byu/cse340-course-repo", demo: "https://cse340-course-repo-ed3v.onrender.com" },
  { name: "Personal Fitness & Nutrition Tracker", desc: "A concept app combining nutrition and exercise data via external APIs.", tech: ["JavaScript","API Integration","HTML","CSS"], repo: "https://github.com/Barisitom", demo: "#" }
];
const grid = document.getElementById('projectGrid');
grid.innerHTML = projects.map(p => `
  <div class="project-card">
    <div class="project-thumb"><span>${p.name}</span></div>
    <div class="project-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tag-row">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="project-actions">
        <a href="${p.repo}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub</a>
        <a href="${p.demo}" class="btn btn-primary btn-sm">Live Demo</a>
      </div>
    </div>
  </div>
`).join('');

// Contact form validation (client-side only — connect a backend/service to actually send)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  ['name','email','subject','message'].forEach(id => {
    const field = document.getElementById(id);
    field.dataset.touched = 'true';
    const errorEl = form.querySelector(`[data-error-for="${id}"]`);
    if (!field.checkValidity()) {
      valid = false;
      errorEl.textContent = id === 'email' ? 'Please enter a valid email address.' : 'This field is required.';
    } else {
      errorEl.textContent = '';
    }
  });
  if (!valid) { status.textContent = 'Please fix the highlighted fields.'; return; }
  status.textContent = "Message ready to send — connect a form service (see notes) to deliver it.";
  form.reset();
});
