// === script.js ===

// Typewriter Effect
const typewriterText = "Aspiring Full Stack Developer\nPassionate Problem Solver";
const typewriterElement = document.getElementById("typewriter");
let typeIndex = 0;

function type() {
  if (typeIndex < typewriterText.length) {
    const char = typewriterText.charAt(typeIndex);
    typewriterElement.textContent += char;
    typeIndex++;
    setTimeout(type, 50);
  } else {
    typewriterElement.style.borderRight = "none";
    typewriterElement.style.animation = "none";
  }
}

typewriterElement.textContent = "";
type();

// About Section Video Auto Play on Scroll
const aboutVideo = document.getElementById("aboutVideo");
const aboutSection = document.querySelector("#about");

if (aboutVideo && aboutSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutVideo.play().catch((err) => console.warn("Video play failed", err));
      }
    });
  }, { threshold: 0.5 });

  observer.observe(aboutSection);

  document.querySelectorAll('nav a[href="#about"]').forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        aboutVideo.play().catch((err) => console.warn("Video play failed", err));
      }, 1000);
    });
  });
}

// Scroll-based Animation for Project Cards
const cards = document.querySelectorAll('.project-card');
const directions = ['animate-left', 'animate-right', 'animate-up'];

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach((card, index) => {
  const direction = directions[index % directions.length];
  card.classList.add(direction);
  card.style.transitionDelay = `${index * 0.25}s`;
  cardObserver.observe(card);
});

// Reveal Project 1 details after video ends
function revealProjectDetails() {
  const details = document.getElementById("projectDetails");
  if (details) {
    details.classList.remove("hidden");
    details.classList.add("show");
  }
}

// Reveal Project 2 details after video ends
function revealProjectDetails2() {
  const details = document.getElementById("projectDetails2");
  if (details) {
    details.classList.remove("hidden");
    details.classList.add("show");
  }
}

// Reveal Project 3 details after video ends
function revealProjectDetails3() {
  const details = document.getElementById("projectDetails3");
  if (details) {
    details.classList.remove("hidden");
    details.classList.add("show");
  }
}

function setupIntersectionObservers() {
  const mockup1 = document.getElementById("mockup1");
  const video1 = document.getElementById("videoProject1");
  const mockup2 = document.getElementById("mockup2");
  const video2 = document.getElementById("videoProject2");
  const mockup3 = document.getElementById("mockup3");
  const video3 = document.getElementById("videoProject3");

  if (mockup1 && video1) {
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mockup1.classList.add("show");
          setTimeout(() => video1.play().catch(() => {}), 300);
        }
      });
    }, { threshold: 0.4 });
    observer1.observe(mockup1);
    video1.addEventListener("ended", revealProjectDetails);
  }

  if (mockup2 && video2) {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mockup2.classList.add("show");
          setTimeout(() => video2.play().catch(() => {}), 300);
        }
      });
    }, { threshold: 0.4 });
    observer2.observe(mockup2);
    video2.addEventListener("ended", revealProjectDetails2);
  }

  if (mockup3 && video3) {
    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mockup3.classList.add("show");
          setTimeout(() => video3.play().catch(() => {}), 300);
        }
      });
    }, { threshold: 0.4 });
    observer3.observe(mockup3);
    video3.addEventListener("ended", revealProjectDetails3);
  }
}

document.addEventListener("DOMContentLoaded", setupIntersectionObservers);
