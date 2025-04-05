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

// Currency Calculator
document.addEventListener('DOMContentLoaded', function() {
  const calculatorBtn = document.getElementById('calculatorBtn');
  const calculatorOverlay = document.getElementById('calculatorOverlay');
  const closeBtn = calculatorOverlay.querySelector('.close-btn');
  const usdInput = document.getElementById('usdInput');
  const jpyInput = document.getElementById('jpyInput');
  
  // Exchange rate (can be updated)
  const EXCHANGE_RATE = 145;
  
  calculatorBtn.addEventListener('click', () => {
    calculatorOverlay.style.display = 'flex';
  });
  
  closeBtn.addEventListener('click', () => {
    calculatorOverlay.style.display = 'none';
  });
  
  // Close on overlay click
  calculatorOverlay.addEventListener('click', (e) => {
    if (e.target === calculatorOverlay) {
      calculatorOverlay.style.display = 'none';
    }
  });
  
  // USD to JPY conversion
  usdInput.addEventListener('input', () => {
    if (usdInput.value) {
      jpyInput.value = Math.round(usdInput.value * EXCHANGE_RATE);
    } else {
      jpyInput.value = '';
    }
  });
  
  // JPY to USD conversion
  jpyInput.addEventListener('input', () => {
    if (jpyInput.value) {
      usdInput.value = (jpyInput.value / EXCHANGE_RATE).toFixed(2);
    } else {
      usdInput.value = '';
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && calculatorOverlay.style.display === 'flex') {
      calculatorOverlay.style.display = 'none';
    }
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
