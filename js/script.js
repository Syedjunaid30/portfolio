// Typewriter Effect
const text = "Aspiring Full Stack Developer\nPassionate Problem Solver";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function type() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  } else {
    // Remove blinking cursor after typing
    typewriterElement.style.borderRight = "none";
    typewriterElement.style.animation = "none";
  }
}

typewriterElement.textContent = "";
type();

// Profile Image Slideshow
const profileImg = document.getElementById("profileImg");
const images = [
  "assets/images/junaidcolor.jpeg",
  "assets/images/junaidbw.jpeg"
];
let currentImage = 0;

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  profileImg.src = images[currentImage];
}, 4000);
