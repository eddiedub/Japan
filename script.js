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
