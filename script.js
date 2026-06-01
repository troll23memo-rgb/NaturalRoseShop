// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Hamburger menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav') && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
  }
});

// ===== Click toggle for product details (mobile/touch support) =====
let overlay = null;

function closeAllDetails() {
  document.querySelectorAll('.product-tag.active, .product-card.active').forEach(el => {
    el.classList.remove('active');
  });
  if (overlay) { overlay.remove(); overlay = null; }
}

function isMobile() { return window.innerWidth <= 768; }

document.querySelectorAll('.product-tag, .product-card').forEach(el => {
  el.addEventListener('click', function(e) {
    e.stopPropagation();
    const wasActive = this.classList.contains('active');
    closeAllDetails();

    if (!wasActive) {
      this.classList.add('active');

      if (isMobile() && this.classList.contains('product-tag')) {
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:999;';
          overlay.addEventListener('click', closeAllDetails);
          document.body.appendChild(overlay);
        }
      }
    }
  });
});

document.addEventListener('click', closeAllDetails);

// ===== Reveal animations on scroll =====
const revealElements = document.querySelectorAll('.reveal');

if (!('IntersectionObserver' in window)) {
  revealElements.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
} else {
  revealElements.forEach(el => el.classList.add('reveal-hidden'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-hidden');
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}
