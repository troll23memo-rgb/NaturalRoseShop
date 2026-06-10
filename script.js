// ===== Dark theme =====
const themeToggle = document.getElementById('themeToggle');
let darkTheme = localStorage.getItem('theme') === 'dark';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  if (themeToggle) themeToggle.textContent = darkTheme ? '☀️' : '🌙';
  localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
}
applyTheme();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    darkTheme = !darkTheme;
    applyTheme();
  });
}

// ===== Language switching =====
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'tr';

const translations = {
  navAbout: { tr: 'Hakkımızda', en: 'About Us' },
  navProducts: { tr: 'Ürünler', en: 'Products' },
  navContact: { tr: 'İletişim', en: 'Contact' },
  heroBadge: { tr: 'Doğal & Organik', en: 'Natural & Organic' },
  heroSub: { tr: 'Doğanın en saf halleri, gelenekten geleceğe…', en: 'The purest forms of nature, from tradition to future…' },
  heroBtn: { tr: 'Ürünleri Keşfet', en: 'Explore Products' },
  heroScroll: { tr: 'Kaydır', en: 'Scroll' },
  aboutLabel: { tr: 'Hakkımızda', en: 'About Us' },
  aboutTitle: { tr: 'Doğal Güzelliğin Adresi', en: 'Address of Natural Beauty' },
  aboutP1: { tr: '<strong>Natural Rose Shop</strong> olarak, en saf ve doğal ürünleri sizlerle buluşturuyoruz. Isparta\'nın eşsiz gül ve lavanta yağlarından, el yapımı doğal sabunlarımıza kadar her ürünümüz özenle seçilir ve titizlikle hazırlanır.', en: 'As <strong>Natural Rose Shop</strong>, we bring you the purest and most natural products. From Isparta\'s unique rose and lavender oils to our handmade natural soaps, every product is carefully selected and meticulously prepared.' },
  aboutP2: { tr: 'Yılların birikimiyle oluşturduğumuz güven dolu alışveriş deneyimimizle, sağlığınıza ve doğaya saygılı ürünler sunuyoruz. Her bir ürünümüz, doğanın bize sunduğu en değerli hediyelerden ilham alır.', en: 'With our trustworthy shopping experience built over the years, we offer products that respect your health and nature. Each of our products is inspired by the most valuable gifts nature offers us.' },
  productsLabel: { tr: 'Ürünlerimiz', en: 'Our Products' },
  productsTitle: { tr: 'Doğadan Sofranıza, Gelenekten Cildinize', en: 'From Nature to Your Table, From Tradition to Your Skin' },
  productsDesc: { tr: 'Her bir ürünümüz, doğanın bize sunduğu en saf halleriyle hazırlanmıştır.', en: 'Each of our products is prepared with the purest forms nature offers us.' },
  catSoaps: { tr: '🌿 Doğal Sabunlar', en: '🌿 Natural Soaps' },
  catSoapsNote: { tr: '18 çeşit • el yapımı • doğal', en: '18 varieties • handmade • natural' },
  catSpecial: { tr: '⭐ Özel Ürünler', en: '⭐ Special Products' },
  catSprays: { tr: '🏠 Oda Kokuları', en: '🏠 Room Sprays' },
  catSpraysNote: { tr: '4 ay kalıcılık • 7 çeşit', en: '4 months lasting • 7 varieties' },
  catPerfume: { tr: '👑 Doğal Gül Parfüm', en: '👑 Natural Rose Perfume' },
  catPerfumeNote: { tr: 'Erkek & Kadın', en: 'Men & Women' },
  catOils: { tr: '🧪 Doğal Yağlar', en: '🧪 Natural Oils' },
  catOilsNote: { tr: 'Isparta yöresi • %100 doğal', en: 'Isparta region • 100% natural' },
  catKolonya: { tr: '🧊 Kolonyalar', en: '🧊 Colognes' },
  catKolonyaNote: { tr: '400 ml • geleneksel', en: '400 ml • traditional' },
  catCreams: { tr: '💆 Ağrı Kesici Kremler', en: '💆 Pain Relief Creams' },
  catCreamsNote: { tr: '%100 doğal • bitkisel', en: '100% natural • herbal' },
  soapInfoHtml: { tr: '<strong>Doğal Sabunlarımız</strong> — Tüm sabunlarımız geleneksel yöntemlerle, doğal bitkisel yağlar kullanılarak el yapımı üretilir. Kimyasal katkı, paraben ve SLS içermez.', en: '<strong>Our Natural Soaps</strong> — All our soaps are handmade using traditional methods with natural vegetable oils. No chemical additives, parabens, or SLS.' },
  sprayInfoHtml: { tr: '<strong>Oda Kokularımız</strong> — Özel formülü sayesinde <strong>4 aya kadar kalıcılık</strong> sağlar. Doğal esansiyel yağlarla hazırlanmıştır.', en: '<strong>Our Room Sprays</strong> — Thanks to our special formula, they provide <strong>up to 4 months</strong> of lasting freshness. Made with natural essential oils.' },
  kolonyaInfoHtml: { tr: '<strong>Kolonyalarımız</strong> — 400 ml şişelerde, geleneksel tarifle hazırlanmış ferahlatıcı kolonyalar.', en: '<strong>Our Colognes</strong> — Refreshing colognes in 400 ml bottles, prepared with traditional recipes.' },
  detailHint: { tr: '(Üzerine tıklayın)', en: '(Click to view)' },
  contactLabel: { tr: 'İletişim', en: 'Contact' },
  contactTitle: { tr: 'Bize Ulaşın', en: 'Get In Touch' },
  contactDesc: { tr: 'Mağazamızı ziyaret edebilir veya telefonla bize ulaşabilirsiniz.', en: 'Visit our store or reach us by phone.' },
  contactAddressLabel: { tr: 'Adres', en: 'Address' },
  contactAddress: { tr: 'Tahtakale Mahallesi,<br>Vasıfçınar Caddesi, No:17/85<br>Eminönü / İstanbul', en: 'Tahtakale Neighborhood,<br>Vasıfçınar Street, No:17/85<br>Eminönü / Istanbul' },
  contactPhoneLabel: { tr: 'Telefon', en: 'Phone' },
  contactPersonLabel: { tr: 'Yetkili', en: 'Authorized Person' },
  contactPerson: { tr: 'Yılmaz Özgünlü', en: 'Yılmaz Özgünlü' },
  contactCallBtn: { tr: '📞 Hemen Ara', en: '📞 Call Now' },
  contactFormName: { tr: 'Adınız', en: 'Your Name' },
  contactFormEmail: { tr: 'E-posta', en: 'Email' },
  contactFormPhone: { tr: 'Telefon', en: 'Phone' },
  contactFormMessage: { tr: 'Mesajınız', en: 'Your Message' },
  contactFormSubmit: { tr: 'Gönder', en: 'Send Message' },
  footerText: { tr: '© 2026 Natural Rose Shop — Tüm hakları saklıdır.', en: '© 2026 Natural Rose Shop — All rights reserved.' },
  catSoapsPrice: { tr: '50 ₺', en: '50 ₺' },
  catSpraysPrice: { tr: '250 ₺', en: '250 ₺' },
  catPerfumePrice: { tr: '400 ₺', en: '400 ₺' },
  catOilsPrice: { tr: '500 ₺', en: '500 ₺' },
  catKolonyaPrice: { tr: '100 ₺', en: '100 ₺' },
  contactFormSuccess: { tr: 'Mesajınız başarıyla gönderildi!', en: 'Your message has been sent successfully!' },
  contactFormError: { tr: 'Bir hata oluştu. Lütfen tekrar deneyin.', en: 'An error occurred. Please try again.' },
};

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  if (langToggle) langToggle.textContent = lang === 'tr' ? '🇬🇧 EN' : '🇹🇷 TR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[key];
    if (val) {
      const text = val[lang];
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = translations[key];
    if (val) el.placeholder = val[lang];
  });

  document.querySelectorAll('.product-tag, .product-card').forEach(el => {
    const nameEl = el.querySelector('.product-name');
    if (nameEl) {
      nameEl.textContent = nameEl.getAttribute('data-' + lang);
    }
    const detailEl = el.querySelector('.tag-detail, .card-detail');
    if (detailEl) {
      detailEl.textContent = detailEl.getAttribute('data-' + lang);
    }
    const priceEl = el.querySelector('.price');
    if (priceEl && priceEl.hasAttribute('data-' + lang)) {
      priceEl.textContent = priceEl.getAttribute('data-' + lang);
    }
    const descEl = el.querySelector('.desc');
    if (descEl && descEl.hasAttribute('data-' + lang)) {
      descEl.textContent = descEl.getAttribute('data-' + lang);
    }
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    switchLang(currentLang === 'tr' ? 'en' : 'tr');
  });
}
switchLang(currentLang);

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== Hamburger menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav') && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    closeModal();
  }
});

// ===== Product detail modal =====
const modal = document.getElementById('detailModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalIcon = document.getElementById('modalIcon');
const modalClose = document.getElementById('modalClose');

function openModal(icon, title, desc) {
  modalIcon.textContent = icon;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.querySelectorAll('.product-tag, .product-card').forEach(el => {
  el.addEventListener('click', function (e) {
    e.stopPropagation();
    const iconEl = this.querySelector('.icon');
    const nameEl = this.querySelector('.product-name');
    const detailEl = this.querySelector('.tag-detail, .card-detail');
    if (!detailEl) return;
    const icon = iconEl ? iconEl.textContent : '';
    const name = nameEl ? nameEl.getAttribute('data-' + currentLang) || nameEl.textContent : '';
    const desc = detailEl.getAttribute('data-' + currentLang) || detailEl.textContent;
    openModal(icon, name, desc);
  });
});

// ===== Contact form =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((val, key) => data[key] = val);

    fetch('https://formsubmit.co/ajax/anadoluharman23@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        formStatus.textContent = translations.contactFormSuccess[currentLang];
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        throw new Error('fail');
      }
    })
    .catch(() => {
      formStatus.textContent = translations.contactFormError ? translations.contactFormError[currentLang] : 'Error';
      formStatus.className = 'form-status error';
    });
  });
}

// ===== Reveal animations on scroll =====
const revealElements = document.querySelectorAll('.reveal');
if (!('IntersectionObserver' in window)) {
  revealElements.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
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
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));
}
