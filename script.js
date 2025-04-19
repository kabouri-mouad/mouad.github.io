document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click', () => {
      // Toggle nav
      nav.classList.toggle('nav-active');
      
      // Animate links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });
      
      // Burger animation
      burger.classList.toggle('toggle');
  });
  
  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.remove('nav-active');
          burger.classList.remove('toggle');
          navLinks.forEach(link => {
              link.style.animation = '';
          });
      });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Simulating form submission
          const submitButton = this.querySelector('button[type="submit"]');
          const originalText = submitButton.textContent;
          
          submitButton.disabled = true;
          submitButton.textContent = 'Envoi en cours...';
          
          // Simulate API call
          setTimeout(() => {
              alert('Merci pour votre message ! Je vous répondrai dès que possible.');
              contactForm.reset();
              submitButton.disabled = false;
              submitButton.textContent = originalText;
          }, 1500);
      });
  }
  
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  }, {
      threshold: 0.1
  });
  
  // Elements to animate
  const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .education-item, .skill-item');
  animatedElements.forEach(el => {
      el.classList.add('animate');
      observer.observe(el);
  });
  
  // Dynamically add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
      .animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .show {
          opacity: 1;
          transform: translateY(0);
      }
      
      @keyframes navLinkFade {
          from {
              opacity: 0;
              transform: translateX(50px);
          }
          to {
              opacity: 1;
              transform: translateX(0);
          }
      }
      
      .burger.toggle .line1 {
          transform: rotate(-45deg) translate(-5px, 6px);
      }
      
      .burger.toggle .line2 {
          opacity: 0;
      }
      
      .burger.toggle .line3 {
          transform: rotate(45deg) translate(-5px, -6px);
      }
  `;
  document.head.appendChild(style);
});