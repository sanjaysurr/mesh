// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Prevent body scroll when menu open
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking overlay
document.getElementById('mobile-menu-overlay').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('active');
  this.classList.remove('active');
  document.body.style.overflow = '';
});

// Close menu when clicking a link (optional)
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('mobile-menu-overlay').classList.remove('active');
    document.body.style.overflow = '';
  });
});
// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-content').style.maxHeight = null;
      i.querySelector('.arrow').textContent = 'Down Arrow';
    });

    // Open clicked
    if (!isOpen) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.textContent = 'Up Arrow';
    }
  });
});
// Add this to your script.js
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.timeline-container');
  const prevBtn = document.querySelector('.timeline-nav button:first-child');
  const nextBtn = document.querySelector('.timeline-nav button:last-child');
  const steps = document.querySelectorAll('.process-step');
  
  // Initialize Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  steps.forEach(step => observer.observe(step));

  // Navigation
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -350, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: 350, behavior: 'smooth' });
    });
  }
});


