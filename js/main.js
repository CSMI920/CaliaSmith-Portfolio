// JS scripts placed here
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.color;
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
