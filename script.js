// Simple smooth scroll
document.documentElement.style.scrollBehavior = "smooth";

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

/* Small reveal on scroll */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.style.opacity = 1, e.target.style.transform = 'translateY(0)';
  });
},{threshold:0.12});

document.querySelectorAll('.section, .card, .timeline-item').forEach(el=>{
  el.style.opacity = 0; el.style.transform = 'translateY(8px)'; el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

// Toggle dark mode
const toggleButton = document.getElementById("dark-mode-toggle");

// nav toggle (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle && navLinks){
  navToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // close menu after clicking a link
  navLinks.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> navLinks.classList.remove('open'));
  });
}