const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active22");
    } else {
      entry.target.classList.remove("active22");
    }
  });
});

const hiddenElements = document.querySelectorAll(".flag");
hiddenElements.forEach((el) => observer.observe(el));




