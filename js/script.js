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

// Reveal Project Details after Videos End
function revealProjectDetails(id) {
  const details = document.getElementById(id);
  if (details) {
    details.classList.remove("hidden");
    details.classList.add("show");
  }
}

function setupIntersectionObservers() {
  const observers = [
    { mockup: "mockup1", video: "videoProject1", details: "projectDetails" },
    { mockup: "mockup2", video: "videoProject2", details: "projectDetails2" },
    { mockup: "mockup3", video: "videoProject3", details: "projectDetails3" },
  ];

  observers.forEach(({ mockup, video, details }) => {
    const mockupEl = document.getElementById(mockup);
    const videoEl = document.getElementById(video);

    if (mockupEl && videoEl) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            mockupEl.classList.add("show");
            setTimeout(() => videoEl.play().catch(() => {}), 300);
          }
        });
      }, { threshold: 0.4 });

      observer.observe(mockupEl);
      videoEl.addEventListener("ended", () => revealProjectDetails(details));
    }
  });
}

document.addEventListener("DOMContentLoaded", setupIntersectionObservers);

// Navbar Slide-In Animation
window.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(-10px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, index * 150);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("nav ul li");

  navItems.forEach((item, index) => {
    item.style.animation = "none";
    item.offsetHeight; // Trigger reflow
    item.style.animation = `slideInNav 0.6s ease forwards`;
    item.style.animationDelay = `${(index + 1) * 0.1}s`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const splineWrapper = document.getElementById("splineWrapper");

  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        splineWrapper.classList.add("show");
      }
    });
  }, { threshold: 0.4 });

  if (splineWrapper) contactObserver.observe(splineWrapper);
});

// Contact scroll animation for text & 3D
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".slide-left, .slide-right, .contact-3d-center");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  animatedElements.forEach((el) => observer.observe(el));
});

function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  }