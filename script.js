// Mobile navigation toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Contact form handler
const form = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

if (form && formResponse) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formResponse.textContent = "Thanks! We’ll respond shortly.";
    formResponse.style.color = "green";
    form.reset();
  });
}

// Auto year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}
