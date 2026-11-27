// idk rm what this is for lol
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.color;
    }
  });
}, { threshold: 0.5 }); sections.forEach(section => observer.observe(section));



// tab [in&out]
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");
buttons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    // Hide all content
    contents.forEach(content => {
      content.classList.remove("active");
    });

    // Activate clicked button
    button.classList.add("active");

    // Show matching content
    const tabId = button.dataset.tab;

    document.getElementById(tabId).classList.add("active");

  });
});


