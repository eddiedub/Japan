document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  
  // Add visible class to all sections initially
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("visible");
    }, index * 100); // Stagger the animations
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "20px",
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

function toggleFullscreen() {
    const mapContainer = document.querySelector('.map-container');
    const button = document.querySelector('.fullscreen-btn');
    const body = document.body;
    const iframe = mapContainer.querySelector('iframe');

    if (!mapContainer.classList.contains('fullscreen')) {
        mapContainer.classList.add('fullscreen');
        body.classList.add('map-fullscreen');
        button.innerHTML = '✖ Exit';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        mapContainer.classList.remove('fullscreen');
        body.classList.remove('map-fullscreen');
        button.innerHTML = '⛶ Fullscreen';
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Allow ESC key to exit fullscreen
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.querySelector('.map-container.fullscreen')) {
        toggleFullscreen();
    }
});
