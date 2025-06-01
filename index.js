const images = ["assets/Front.jpg", "assets/Middle01.jpg", "assets/Back.jpg"]; // Add your image names
let current = 0;

const slideshow = document.getElementById("slideshow");
const animationEl = document.getElementById("animation");

function updateSlideshow() {
  // Change image
  slideshow.src = images[current];

  // Show animation shape
  animationEl.classList.add("show");

  // Hide it after 2 seconds
  setTimeout(() => {
    animationEl.classList.remove("show");
  }, 2000);

  // Next image index
  current = (current + 1) % images.length;
}

// Start on load
updateSlideshow();
setInterval(updateSlideshow, 3000);
