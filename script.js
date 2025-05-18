function toggleMenu() {
    const menu = document.querySelector('.menu_links');    
    
    if (menu.style.display === 'block') {
        // If the menu is visible, hide it
        menu.style.display = 'none';
    } else {
        // If the menu is hidden, show it
        menu.style.display = 'block';
    }

}
function changetocross(){
    const menu_icon = document.querySelector("#menu_icon");
    if (menu_icon.src.includes("icons8-hamburger.svg")) {
        menu_icon.src = "assets/cross-15.svg";
    } else {
        menu_icon.src = "assets/icons8-hamburger.svg";
    }
}

const roles = [
  "Frontend Developer",
  "Machine Learning Enthusiast",
  "Data Science Student"
];
const typingSpeed = 100;    
const deletingSpeed = 50; 
const pauseTime = 1000;    
let i = 0, pos = 0, forward = true;
const el = document.getElementById("role");

function typeRole() {
  const text = roles[i];

  if (forward) {
    el.textContent = text.slice(0, ++pos);
    if (pos === text.length) {
      forward = false;
      return setTimeout(typeRole, pauseTime);
    }
  } else {
    el.textContent = text.slice(0, --pos);
    if (pos === 0) {
      forward = true;
      i = (i + 1) % roles.length;
      return setTimeout(typeRole, pauseTime);
    }
  }


  setTimeout(
    typeRole,
    forward ? typingSpeed : deletingSpeed
  );
}


typeRole();

// Flight animation in about section

const airplane        = document.getElementById("airplane");
const flightContainer = document.querySelector(".flight-container");
const educationRow    = document.querySelector(".education-container");

window.addEventListener("scroll", () => {
  // 1) current geometry
  const flightRect  = flightContainer.getBoundingClientRect();
  const eduRect     = educationRow.getBoundingClientRect();
  const planeRect   = airplane.getBoundingClientRect();
  const viewportH   = window.innerHeight;

  // 2) compute runway length each time
  const maxX = flightRect.width - planeRect.width;

  // 3) determine progress between "row just entering view" → "row just leaving view"
  const start   = viewportH;            // when eduRect.top hits bottom of viewport
  const end     = -eduRect.height;      // when eduRect.bottom clears the top
  const raw     = (start - eduRect.top) / (start - end);
  const progress = Math.min(Math.max(raw, 0), 1);

  // 4) apply movement
  airplane.style.transform = `translateX(${progress * maxX}px)`;
});

// JS: append to script.js

document.addEventListener('DOMContentLoaded', () => {
  const timeline   = document.querySelector('.timeline');
  const progress   = document.querySelector('.line-progress');
  const items      = document.querySelectorAll('.timeline-item');

  // On vertical scroll, grow/shrink horizontal progress
  function updateProgress() {
    const rect    = timeline.getBoundingClientRect();
    const totalW  = timeline.scrollWidth;
    // how far into the timeline container we are
    const scrolled = window.innerHeight - rect.top;
    const pct      = Math.max(0, Math.min(scrolled / (rect.height + window.innerHeight), 1));
    progress.style.width = `${pct * totalW}px`;
  }
  window.addEventListener('scroll', updateProgress);
  updateProgress();

  // Fade items in/out
  const observer = new IntersectionObserver(entries => {
    for (let entry of entries) {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    }
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
});
