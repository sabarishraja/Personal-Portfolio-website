// Hamburger menu
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  if (!menu || !icon) return;
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// Typewriter
const roles = [
  "AI/ML Engineer",
  "Data Analyst",
  "Agentic Systems Builder",
  "MS CS @ IIT Chicago"
];
const typingSpeed = 75;
const deletingSpeed = 35;
const pauseTime = 1400;
let roleIndex = 0, charPos = 0, forward = true;
const roleEl = document.getElementById("role");

function typeRole() {
  if (!roleEl) return;
  const text = roles[roleIndex];
  if (forward) {
    roleEl.textContent = text.slice(0, ++charPos);
    if (charPos === text.length) {
      forward = false;
      return setTimeout(typeRole, pauseTime);
    }
  } else {
    roleEl.textContent = text.slice(0, --charPos);
    if (charPos === 0) {
      forward = true;
      roleIndex = (roleIndex + 1) % roles.length;
      return setTimeout(typeRole, 400);
    }
  }
  setTimeout(typeRole, forward ? typingSpeed : deletingSpeed);
}
typeRole();

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Scroll-spy: highlight the nav link for the section in view
const navLinks = Array.from(document.querySelectorAll('#desktop-nav .nav-links a'));
const sectionsById = {};
navLinks.forEach((link) => {
  const id = link.getAttribute('href')?.replace('#', '');
  const section = id && document.getElementById(id);
  if (section) sectionsById[id] = link;
});

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = sectionsById[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);

Object.keys(sectionsById).forEach((id) => {
  const section = document.getElementById(id);
  if (section) spyObserver.observe(section);
});
