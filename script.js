// ===== PRODUCT DATA =====
const products = [
  // Soaps
  { id: 's1', cat: 'soaps', icon: '🧴', nameTr: 'Eşşek Sütlü Sabun', nameEn: 'Donkey Milk Soap', descTr: 'Cildi besler, nemlendirir ve gençleştirir. Vitaminler (A, C, E, B12) ve amino asitler sayesinde kırışıklık karşıtı etki sunar.', descEn: 'Nourishes, moisturizes, and rejuvenates the skin. Rich in vitamins and amino acids, offers anti-aging effects.', price: '50 ₺' },
  { id: 's2', cat: 'soaps', icon: '🌹', nameTr: 'Gül Sabunu', nameEn: 'Rose Soap', descTr: 'Cildi nazikçe temizler, nemlendirir ve canlandırır. Antibakteriyel özelliğiyle sivilce oluşumunu engeller.', descEn: 'Gently cleanses, moisturizes, and revitalizes. Antibacterial properties prevent acne formation.', price: '50 ₺' },
  { id: 's3', cat: 'soaps', icon: '🐐', nameTr: 'Keçi Sütlü Sabun', nameEn: 'Goat Milk Soap', descTr: 'Derinlemesine temizler, gözenekleri açar. Laktik asit sayesinde ölü hücreleri nazikçe arındırır.', descEn: 'Deeply cleanses and opens pores. Lactic acid gently removes dead cells.', price: '50 ₺' },
  { id: 's4', cat: 'soaps', icon: '🛁', nameTr: 'Türk Hamam Sabunu', nameEn: 'Turkish Hammam Soap', descTr: 'Geleneksel Türk hamam kültürünün vazgeçilmezi. Zeytinyağı ile zenginleştirilmiş formül.', descEn: 'Traditional Turkish bath culture essential. Formula enriched with olive oil.', price: '50 ₺' },
  { id: 's5', cat: 'soaps', icon: '🌱', nameTr: 'Aloe Vera Sabunu', nameEn: 'Aloe Vera Soap', descTr: 'Yatıştırıcı ve yoğun nemlendirici etkisiyle hassas ciltler için idealdir.', descEn: 'Ideal for sensitive skin with soothing and intense moisturizing effect.', price: '50 ₺' },
  { id: 's6', cat: 'soaps', icon: '🍎', nameTr: 'Nar Sabunu', nameEn: 'Pomegranate Soap', descTr: 'Antioksidan deposu nar özüyle cildi sıkılaştırır ve gençleştirir.', descEn: 'Tightens and rejuvenates with antioxidant-rich pomegranate extract.', price: '50 ₺' },
  { id: 's7', cat: 'soaps', icon: '🧄', nameTr: 'Sarımsak Sabunu', nameEn: 'Garlic Soap', descTr: 'Güçlü antibakteriyel ve antifungal özellikleriyle sivilce ve akneye karşı etkilidir.', descEn: 'Effective against acne with strong antibacterial and antifungal properties.', price: '50 ₺' },
  { id: 's8', cat: 'soaps', icon: '🌸', nameTr: 'Lavanta Sabunu', nameEn: 'Lavender Soap', descTr: 'Sakinleştirici lavanta aromasıyla stresi azaltır, cilt tahrişlerini yatıştırır.', descEn: 'Reduces stress with calming lavender aroma, soothes skin irritations.', price: '50 ₺' },
  { id: 's9', cat: 'soaps', icon: '✨', nameTr: 'Kolojen Sabunu', nameEn: 'Collagen Soap', descTr: 'Cilt elastikiyetini artırır, kırışıklık karşıtı etki sunar.', descEn: 'Increases skin elasticity, offers anti-aging effects.', price: '50 ₺' },
  { id: 's10', cat: 'soaps', icon: '🫒', nameTr: 'Zeytinyağlı Sabun', nameEn: 'Olive Oil Soap', descTr: 'Yoğun nemlendirici etkisiyle kuru ciltler için birebirdir.', descEn: 'Perfect for dry skin with intense moisturizing effect.', price: '50 ₺' },
  { id: 's11', cat: 'soaps', icon: '🍋', nameTr: 'Limon Sabunu', nameEn: 'Lemon Soap', descTr: 'Cilt lekelerini hafifletir ve canlandırır. Yağlı ciltleri dengeleyerek ferahlık verir.', descEn: 'Lightens blemishes and revitalizes. Balances oily skin.', price: '50 ₺' },
  { id: 's12', cat: 'soaps', icon: '🧴', nameTr: 'Deve Sütlü Sabun', nameEn: 'Camel Milk Soap', descTr: 'Cildi derinlemesine besler, yoğun nemlendirir ve yumuşatır.', descEn: 'Deeply nourishes, intensely moisturizes, and softens the skin.', price: '50 ₺' },
  { id: 's13', cat: 'soaps', icon: '💛', nameTr: 'Kükürt Sabunu', nameEn: 'Sulfur Soap', descTr: 'Akne ve sivilce tedavisinde oldukça etkilidir. Cildin yağ dengesini düzenler.', descEn: 'Highly effective for acne treatment. Regulates skin oil balance.', price: '50 ₺' },
  { id: 's14', cat: 'soaps', icon: '🌰', nameTr: 'Bıttım Sabunu', nameEn: 'Bıttım Soap', descTr: 'Saç dökülmesini azaltır, kepeği giderir. Güneydoğu Anadolu\'ya özgü menengiç yağından üretilir.', descEn: 'Reduces hair loss, eliminates dandruff. Made from menengiç oil.', price: '50 ₺' },
  { id: 's15', cat: 'soaps', icon: '🌲', nameTr: 'Ardıç Sabunu', nameEn: 'Juniper Soap', descTr: 'Antiseptik ve antifungal özellikleriyle cilt sorunlarına karşı etkilidir.', descEn: 'Effective against skin problems with antiseptic and antifungal properties.', price: '50 ₺' },
  { id: 's16', cat: 'soaps', icon: '🪵', nameTr: 'Katran Sabunu', nameEn: 'Tar Soap', descTr: 'Sedef ve egzama gibi kronik cilt hastalıklarında yatıştırıcı etki gösterir.', descEn: 'Soothes chronic skin conditions like psoriasis and eczema.', price: '50 ₺' },
  { id: 's17', cat: 'soaps', icon: '🌾', nameTr: 'Pirinç Sabunu', nameEn: 'Rice Soap', descTr: 'Cildi aydınlatır, leke görünümünü azaltır, cilt tonunu eşitler.', descEn: 'Brightens skin, reduces blemishes, evens skin tone.', price: '50 ₺' },
  { id: 's18', cat: 'soaps', icon: '🌿', nameTr: 'Defne Sabunu', nameEn: 'Laurel Soap', descTr: 'Antibakteriyel ve antiseptik özellikleriyle cildi derinlemesine temizler.', descEn: 'Deeply cleanses with antibacterial and antiseptic properties.', price: '50 ₺' },
  // Special
  { id: 'sp1', cat: 'special', icon: '🧪', nameTr: 'Kojik Asit Sabunu', nameEn: 'Kojic Acid Soap', descTr: 'Leke giderici, cilt aydınlatıcı. Pirinç fermantasyonundan elde edilen doğal bileşen.', descEn: 'Spot remover, skin brightener. Natural ingredient from rice fermentation.', price: '200 ₺' },
  { id: 'sp2', cat: 'special', icon: '💎', nameTr: 'Doğal Mentol Taşı', nameEn: 'Natural Menthol Stone', descTr: 'Ferahlatıcı, aromaterapi. Baş ağrısını hafifletir, solunumu açar.', descEn: 'Refreshing, aromatherapy. Relieves headaches, opens respiratory tract.', price: '150 ₺' },
  { id: 'sp3', cat: 'special', icon: '🧴', nameTr: 'Naturel Peeling', nameEn: 'Natural Peeling', descTr: 'Doğal peeling, cilt yenileyici. Ölü hücreleri nazikçe arındırır.', descEn: 'Natural peeling, skin renewing. Gently removes dead cells.', price: '300 ₺' },
  // Room Sprays
  { id: 'rs1', cat: 'sprays', icon: '🍎', nameTr: 'Nar Oda Kokusu', nameEn: 'Pomegranate Room Spray', descTr: 'Tatlı ve ferahlatıcı nar aroması. 4 aya kadar kalıcı etki.', descEn: 'Sweet and refreshing pomegranate aroma. Lasts up to 4 months.', price: '250 ₺' },
  { id: 'rs2', cat: 'sprays', icon: '🪵', nameTr: 'Sandal Oda Kokusu', nameEn: 'Sandalwood Room Spray', descTr: 'Sıcak ve odunsu sandal kokusuyla sakinleştirici atmosfer.', descEn: 'Calming atmosphere with warm, woody sandalwood scent.', price: '250 ₺' },
  { id: 'rs3', cat: 'sprays', icon: '🟡', nameTr: 'Amber Oda Kokusu', nameEn: 'Amber Room Spray', descTr: 'Zengin ve büyüleyici amber kokusu. Uzun süre kalıcı.', descEn: 'Rich and fascinating amber scent. Long-lasting.', price: '250 ₺' },
  { id: 'rs4', cat: 'sprays', icon: '🌹', nameTr: 'Gül Oda Kokusu', nameEn: 'Rose Room Spray', descTr: 'Isparta güllerinden ilham alan zarif gül kokusu.', descEn: 'Elegant rose scent inspired by Isparta roses.', price: '250 ₺' },
  { id: 'rs5', cat: 'sprays', icon: '🌱', nameTr: 'Nane Oda Kokusu', nameEn: 'Mint Room Spray', descTr: 'Taze nane ferahlığıyla ortamı canlandırır ve enerji verir.', descEn: 'Revitalizes with fresh mint freshness.', price: '250 ₺' },
  { id: 'rs6', cat: 'sprays', icon: '🌲', nameTr: 'Orman Oda Kokusu', nameEn: 'Forest Room Spray', descTr: 'Çam ve orman kokusuyla evinize doğayı taşır.', descEn: 'Brings nature into your home with pine and forest scent.', price: '250 ₺' },
  { id: 'rs7', cat: 'sprays', icon: '🍒', nameTr: 'Kiraz Oda Kokusu', nameEn: 'Cherry Room Spray', descTr: 'Tatlı ve meyvemsi kiraz kokusuyla ortama neşe katar.', descEn: 'Adds joy with sweet and fruity cherry scent.', price: '250 ₺' },
  // Perfumes
  { id: 'pf1', cat: 'perfume', icon: '👨', nameTr: 'Erkek Doğal Gül Parfüm', nameEn: "Men's Natural Rose Perfume", descTr: 'Isparta güllerinden elde edilen saf gül esansı. Sentetik koku içermez.', descEn: 'Pure rose essence from Isparta. No synthetic fragrances.', price: '400 ₺' },
  { id: 'pf2', cat: 'perfume', icon: '👩', nameTr: 'Kadın Doğal Gül Parfüm', nameEn: "Women's Natural Rose Perfume", descTr: 'Doğal gül yağı ile hazırlanmış. Alkolsüz ve doğal içerik.', descEn: 'Made with natural rose oil. Alcohol-free and natural.', price: '400 ₺' },
  // Oils
  { id: 'o1', cat: 'oils', icon: '🌹', nameTr: 'Isparta Doğal Gül Yağı', nameEn: 'Isparta Natural Rose Oil', descTr: '%100 saf ve doğal. Cildi besler, nemlendirir, sıkılaştırır.', descEn: '100% pure and natural. Nourishes, moisturizes, tightens skin.', price: '500 ₺' },
  { id: 'o2', cat: 'oils', icon: '🌸', nameTr: 'Isparta Lavanta Yağı', nameEn: 'Isparta Lavender Oil', descTr: '%100 saf lavanta yağı. Stresi azaltır, cilt tahrişlerini yatıştırır.', descEn: '100% pure lavender oil. Reduces stress, soothes skin.', price: '500 ₺' },
  // Colognes
  { id: 'k1', cat: 'kolonya', icon: '🍋', nameTr: 'Limon Kolonyası', nameEn: 'Lemon Cologne', descTr: 'Taze limon ferahlığıyla canlandırır. Geleneksel tarif. 400 ml.', descEn: 'Revitalizes with fresh lemon. Traditional recipe. 400 ml.', price: '100 ₺' },
  { id: 'k2', cat: 'kolonya', icon: '🌹', nameTr: 'Gül Kolonyası', nameEn: 'Rose Cologne', descTr: 'Zarif gül kokusuyla rahatlatır. Klasik Türk kolonyası. 400 ml.', descEn: 'Relaxes with elegant rose scent. Classic Turkish cologne. 400 ml.', price: '100 ₺' },
  { id: 'k3', cat: 'kolonya', icon: '🟠', nameTr: 'Safran Kolonyası', nameEn: 'Saffron Cologne', descTr: 'Eşsiz safran aromasıyla özel bir deneyim. Lüks ve ferahlatıcı. 400 ml.', descEn: 'Unique saffron aroma. Luxurious and refreshing. 400 ml.', price: '100 ₺' },
  // Creams
  { id: 'c1', cat: 'creams', icon: '🌰', nameTr: 'At Kestaneli Krem', nameEn: 'Horse Chestnut Cream', descTr: 'Varis ve bacak ağrısına iyi gelir. Kan dolaşımını destekler. 500 g.', descEn: 'Good for varicose veins and leg pain. Supports circulation. 500 g.', price: '250 ₺' },
  { id: 'c2', cat: 'creams', icon: '🫎', nameTr: 'Organik Kuyruk Yağı', nameEn: 'Organic Tail Fat', descTr: 'Eklem ve kas ağrılarında doğal rahatlama. Tamamen organik.', descEn: 'Natural relief for joint and muscle aches. Completely organic.', price: '300 ₺' },
]

// ===== STATE =====
let currentLang = localStorage.getItem('lang') || 'tr'
let currentCat = 'all'
let searchTerm = ''
let cart = JSON.parse(localStorage.getItem('cart')) || []
let darkTheme = localStorage.getItem('theme') === 'dark'
let currentCurrency = localStorage.getItem('currency') || 'TRY'
let exchangeRates = { TRY: 1, USD: 0.031, EUR: 0.028 }
let currencySymbols = { TRY: '₺', USD: '$', EUR: '€' }

// ===== I18N =====
const t = {
  navHome: { tr: 'Ana Sayfa', en: 'Home' },
  navProducts: { tr: 'Ürünler', en: 'Products' },
  navAbout: { tr: 'Hakkımızda', en: 'About Us' },
  navContact: { tr: 'İletişim', en: 'Contact' },
  heroBadge: { tr: '✦ Doğal & Organik', en: '✦ Natural & Organic' },
  heroLine1: { tr: 'Doğanın En Saf', en: 'The Purest of' },
  heroLine2pre: { tr: 'Hali', en: 'Nature' },
  heroLine2em: { tr: 'Rose', en: 'Rose' },
  heroSub: { tr: 'Gelenekten geleceğe, en özel bakım ürünleriyle tanışın.', en: 'From tradition to future, discover the most special care products.' },
  heroBtn: { tr: 'Ürünleri Keşfet', en: 'Explore Products' },
  heroBtnAbout: { tr: 'Hikayemiz', en: 'Our Story' },
  heroScroll: { tr: 'Kaydır', en: 'Scroll' },
  feat1Title: { tr: 'Ücretsiz Kargo', en: 'Free Shipping' },
  feat1Desc: { tr: '1000₺ üzeri siparişlerde', en: 'Orders over 1000₺' },
  feat2Title: { tr: '%100 Doğal', en: '100% Natural' },
  feat2Desc: { tr: 'Kimyasal katkı içermez', en: 'No chemical additives' },
  feat3Title: { tr: 'Güvenli Ödeme', en: 'Secure Payment' },
  feat3Desc: { tr: '%100 güvenli alışveriş', en: '100% secure shopping' },

  productsLabel: { tr: 'Ürünlerimiz', en: 'Our Products' },
  productsTitle: { tr: 'Doğadan Gelen Şifa', en: 'Healing from Nature' },
  productsDesc: { tr: 'Her bir ürünümüz, doğanın bize sunduğu en saf halleriyle hazırlanmıştır.', en: 'Each product is prepared with nature\'s purest offerings.' },
  catAll: { tr: 'Tümü', en: 'All' },
  catSoaps: { tr: 'Doğal Sabunlar', en: 'Natural Soaps' },
  catSpecial: { tr: 'Özel Ürünler', en: 'Special Products' },
  catSprays: { tr: 'Oda Kokuları', en: 'Room Sprays' },
  catPerfume: { tr: 'Parfüm', en: 'Perfume' },
  catOils: { tr: 'Doğal Yağlar', en: 'Natural Oils' },
  catKolonya: { tr: 'Kolonya', en: 'Cologne' },
  catCreams: { tr: 'Kremler', en: 'Creams' },
  aboutLabel: { tr: 'Hakkımızda', en: 'About Us' },
  aboutTitle: { tr: 'Doğal Güzelliğin Adresi', en: 'Address of Natural Beauty' },
  aboutP1: { tr: 'Natural Rose Shop olarak, en saf ve doğal ürünleri sizlerle buluşturuyoruz. Isparta\'nın eşsiz gül ve lavanta yağlarından, el yapımı doğal sabunlarımıza kadar her ürünümüz özenle seçilir ve titizlikle hazırlanır.', en: 'As Natural Rose Shop, we bring you the purest natural products. From Isparta\'s unique rose and lavender oils to our handmade natural soaps, every product is carefully selected.' },
  aboutP2: { tr: 'Yılların birikimiyle oluşturduğumuz güven dolu alışveriş deneyimimizle, sağlığınıza ve doğaya saygılı ürünler sunuyoruz.', en: 'With our trustworthy shopping experience built over the years, we offer products that respect your health and nature.' },
  aboutBtn: { tr: 'Bize Ulaşın', en: 'Contact Us' },
  statProducts: { tr: 'Ürün Çeşidi', en: 'Products' },
  statYears: { tr: 'Yıllık Tecrübe', en: 'Years Experience' },
  statCities: { tr: 'Şehir', en: 'Cities' },
  testLabel: { tr: 'Müşteri Yorumları', en: 'Testimonials' },
  testTitle: { tr: 'Onlar Ne Diyor?', en: 'What They Say?' },
  test1Text: { tr: '"Gül sabunu cildimi inanılmaz yumuşattı. Doğal içerikli olması benim için çok önemli, kesinlikle tavsiye ederim."', en: '"Rose soap made my skin incredibly soft. Natural ingredients are very important to me, I highly recommend."' },
  test2Text: { tr: '"Isparta gül yağını kullanmaya başlayalı cildimdeki farkı görebiliyorum. Kesinlikle orijinal ve kaliteli bir ürün."', en: '"I can see the difference in my skin since I started using Isparta rose oil. Definitely an original and quality product."' },
  test3Text: { tr: '"Oda kokuları harika! Özellikle sandal ve amber çok kalıcı. Misafirlerim sürekli kokuyu soruyor."', en: '"The room sprays are amazing! Sandalwood and amber are particularly long-lasting. My guests keep asking about the scent."' },
  test1Date: { tr: '2 ay önce', en: '2 months ago' },
  test2Date: { tr: '1 ay önce', en: '1 month ago' },
  test3Date: { tr: '3 hafta önce', en: '3 weeks ago' },
  contactLabel: { tr: 'İletişim', en: 'Contact' },
  contactTitle: { tr: 'Bize Ulaşın', en: 'Get in Touch' },
  contactDesc: { tr: 'Mağazamızı ziyaret edebilir veya telefonla bize ulaşabilirsiniz.', en: 'Visit our store or reach us by phone.' },
  contactAddressLabel: { tr: 'Adres', en: 'Address' },
  contactAddress: { tr: 'Tahtakale Mah. Vasıfçınar Cad. No:17/85, Eminönü / İstanbul', en: 'Tahtakale Mah. Vasıfçınar Cad. No:17/85, Eminönü / Istanbul' },
  contactPhoneLabel: { tr: 'Telefon', en: 'Phone' },
  contactPersonLabel: { tr: 'Yetkili', en: 'Authorized Person' },
  contactPerson: { tr: 'Yılmaz Özgünlü', en: 'Yılmaz Özgünlü' },
  contactFormName: { tr: 'Adınız', en: 'Your Name' },
  contactFormEmail: { tr: 'E-posta', en: 'Email' },
  contactFormMessage: { tr: 'Mesajınız', en: 'Your Message' },
  contactFormSubmit: { tr: 'Mesaj Gönder', en: 'Send Message' },
  newsletterTitle: { tr: 'Bültenimize Abone Olun', en: 'Subscribe to Our Newsletter' },
  newsletterDesc: { tr: 'Yeni ürünler, özel indirimler ve doğal bakım ipuçlarından haberdar olun.', en: 'Stay informed about new products, special discounts, and natural care tips.' },
  newsletterPlaceholder: { tr: 'E-posta adresiniz', en: 'Your email address' },
  newsletterBtn: { tr: 'Abone Ol', en: 'Subscribe' },
  footerDesc: { tr: 'Doğanın en saf halleriyle hazırlanmış, el yapımı doğal ürünler.', en: 'Handmade natural products prepared with nature\'s purest forms.' },
  footerQuickLinks: { tr: 'Hızlı Linkler', en: 'Quick Links' },
  footerCategories: { tr: 'Kategoriler', en: 'Categories' },
  footerHours: { tr: 'Pzt-Cmt: 09:00 - 18:00', en: 'Mon-Sat: 09:00 - 18:00' },
  footerText: { tr: '© 2026 Natural Rose Shop — Tüm hakları saklıdır.', en: '© 2026 Natural Rose Shop — All rights reserved.' },
  cartTitle: { tr: 'Sepetiniz', en: 'Your Cart' },
  cartEmpty: { tr: 'Sepetiniz boş.', en: 'Your cart is empty.' },
  cartTotal: { tr: 'Toplam:', en: 'Total:' },
  cartCheckout: { tr: 'Ödemeye Geç', en: 'Checkout' },
  modalAdd: { tr: 'Sepete Ekle', en: 'Add to Cart' },
  contactFormSuccess: { tr: 'Mesajınız başarıyla gönderildi!', en: 'Message sent successfully!' },
  contactFormError: { tr: 'Bir hata oluştu. Lütfen tekrar deneyin.', en: 'An error occurred. Please try again.' },
  searchPlaceholder: { tr: 'Ürün ara...', en: 'Search products...' },
  checkoutWarning: { tr: '🛒 Sipariş sistemi şu anda kullanılamıyor. Yakında hizmetinizde olacak!', en: '🛒 Order system is currently unavailable. Coming soon!' },
}

// ===== CURRENCY =====
function formatPrice(priceStr) {
  const num = parseInt(priceStr.replace(/[^0-9]/g, ''))
  const converted = num * exchangeRates[currentCurrency]
  const symbol = currencySymbols[currentCurrency]
  if (currentCurrency === 'TRY') return `${converted} ${symbol}`
  return `${symbol}${converted.toFixed(2)}`
}

async function fetchExchangeRates() {
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/TRY')
    const data = await res.json()
    exchangeRates.USD = data.rates.USD
    exchangeRates.EUR = data.rates.EUR
  } catch {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/TRY')
      const data = await res.json()
      exchangeRates.USD = data.rates.USD
      exchangeRates.EUR = data.rates.EUR
    } catch {
      exchangeRates.USD = 0.031
      exchangeRates.EUR = 0.028
    }
  }
  applyCurrencyUI()
}
fetchExchangeRates()

// ===== RENDER PRODUCTS =====
const grid = document.getElementById('productGrid')

function renderProducts(cat) {
  let filtered = cat === 'all' ? products : products.filter(p => p.cat === cat)
  if (searchTerm) {
    const term = searchTerm.toLowerCase()
    filtered = filtered.filter(p =>
      p.nameTr.toLowerCase().includes(term) ||
      p.nameEn.toLowerCase().includes(term) ||
      p.descTr.toLowerCase().includes(term) ||
      p.descEn.toLowerCase().includes(term)
    )
  }
  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" data-id="${p.id}" data-index="${i}" style="animation-delay:${i*0.03}s">
      <span class="icon">${p.icon}</span>
      <span class="cat-badge">${t['cat' + p.cat.charAt(0).toUpperCase() + p.cat.slice(1)][currentLang] || p.cat}</span>
      <h3>${currentLang === 'tr' ? p.nameTr : p.nameEn}</h3>
      <p class="desc">${currentLang === 'tr' ? p.descTr : p.descEn}</p>
      <div class="price-row">
        <span class="price">${formatPrice(p.price)}</span>
        <button class="add-btn" data-id="${p.id}" aria-label="${currentLang === 'tr' ? 'Sepete Ekle' : 'Add to Cart'}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>
  `).join('')

  // Trigger entrance animation
  requestAnimationFrame(() => {
    grid.querySelectorAll('.product-card').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 40)
    })
  })

  // Update active tab
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === cat)
  })

  // Attach add-to-cart handlers
  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      addToCart(btn.dataset.id)
      btn.classList.add('added')
      setTimeout(() => btn.classList.remove('added'), 600)
    })
  })

  // Attach click for modal
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id
      const prod = products.find(p => p.id === id)
      if (prod) openModal(prod)
    })
  })
}

// ===== CATEGORY TABS =====
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    currentCat = tab.dataset.cat
    renderProducts(currentCat)
  })
})

// ===== CART =====
function addToCart(id) {
  const prod = products.find(p => p.id === id)
  if (!prod) return
  const existing = cart.find(item => item.id === id)
  if (existing) {
    existing.qty += 1
  } else {
    cart.push({ id, qty: 1 })
  }
  saveCart()
  updateCartUI()
  openCart()
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id)
  saveCart()
  updateCartUI()
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

function getCartTotal() {
  const totalTRY = cart.reduce((sum, item) => {
    const prod = products.find(p => p.id === item.id)
    const price = parseInt(prod ? prod.price.replace(/[^0-9]/g, '') : 0)
    return sum + price * item.qty
  }, 0)
  return totalTRY * exchangeRates[currentCurrency]
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0)
  const badge = document.getElementById('cartCount')
  badge.textContent = count
  badge.classList.toggle('show', count > 0)

  const body = document.getElementById('cartBody')
  const empty = body.querySelector('.cart-empty')
  const items = document.getElementById('cartItems')
  const footer = document.getElementById('cartFooter')

  if (cart.length === 0) {
    empty.style.display = 'block'
    items.innerHTML = ''
    footer.style.display = 'none'
    return
  }

  empty.style.display = 'none'
  footer.style.display = 'block'

  items.innerHTML = cart.map(item => {
    const prod = products.find(p => p.id === item.id)
    if (!prod) return ''
    const name = currentLang === 'tr' ? prod.nameTr : prod.nameEn
    const totalTRY = parseInt(prod.price.replace(/[^0-9]/g, '')) * item.qty
    const totalConverted = totalTRY * exchangeRates[currentCurrency]
    const symbol = currencySymbols[currentCurrency]
    const displayTotal = currentCurrency === 'TRY' ? `${totalConverted} ${symbol}` : `${symbol}${totalConverted.toFixed(2)}`
    return `
      <div class="cart-item">
        <div class="cart-item-icon">${prod.icon}</div>
        <div class="cart-item-info">
          <h4>${name} ${item.qty > 1 ? `×${item.qty}` : ''}</h4>
          <span>${displayTotal}</span>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">✕</button>
      </div>
    `
  }).join('')

  const total = getCartTotal()
  const sym = currencySymbols[currentCurrency]
  document.getElementById('cartTotalPrice').textContent = currentCurrency === 'TRY' ? `${total} ${sym}` : `${sym}${total.toFixed(2)}`

  items.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id))
  })
}

// Cart sidebar
const cartToggle = document.getElementById('cartToggle')
const cartSidebar = document.getElementById('cartSidebar')
const cartOverlay = document.getElementById('cartOverlay')
const cartClose = document.getElementById('cartClose')

function openCart() {
  cartSidebar.classList.add('open')
  cartOverlay.classList.add('open')
  document.body.classList.add('no-scroll')
}

function closeCart() {
  cartSidebar.classList.remove('open')
  cartOverlay.classList.remove('open')
  document.body.classList.remove('no-scroll')
}

if (cartToggle) cartToggle.addEventListener('click', () => {
  if (cartSidebar.classList.contains('open')) closeCart()
  else openCart()
})
if (cartOverlay) cartOverlay.addEventListener('click', closeCart)
if (cartClose) cartClose.addEventListener('click', closeCart)

// Checkout warning
const checkoutBtn = document.getElementById('checkoutBtn')
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const msg = t.checkoutWarning[currentLang]
    const existing = document.querySelector('.checkout-toast')
    if (existing) existing.remove()
    const toast = document.createElement('div')
    toast.className = 'checkout-toast'
    toast.textContent = msg
    document.body.appendChild(toast)
    requestAnimationFrame(() => toast.classList.add('show'))
    setTimeout(() => {
      toast.classList.remove('show')
      setTimeout(() => toast.remove(), 400)
    }, 3500)
  })
}

// ===== PRODUCT MODAL =====
const modal = document.getElementById('productModal')
const modalClose = document.getElementById('modalClose')

function openModal(prod) {
  document.getElementById('modalIcon').textContent = prod.icon
  document.getElementById('modalTitle').textContent = currentLang === 'tr' ? prod.nameTr : prod.nameEn
  document.getElementById('modalDesc').textContent = currentLang === 'tr' ? prod.descTr : prod.descEn
  document.getElementById('modalPrice').textContent = formatPrice(prod.price)
  const addBtn = document.getElementById('modalAddBtn')
  addBtn.dataset.id = prod.id
  modal.classList.add('open')
  document.body.classList.add('no-scroll')
}

function closeModalFn() {
  modal.classList.remove('open')
  document.body.classList.remove('no-scroll')
}

if (modalClose) modalClose.addEventListener('click', closeModalFn)
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModalFn() })

document.getElementById('modalAddBtn').addEventListener('click', function() {
  addToCart(this.dataset.id)
  closeModalFn()
})

// ===== SEARCH =====
const searchInput = document.getElementById('productSearch')
if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchTerm = searchInput.value.trim()
    renderProducts(currentCat)
  })
}

// ===== CURRENCY =====
const currencyToggle = document.getElementById('currencyToggle')
const currencyOrder = ['TRY', 'USD', 'EUR']

function applyCurrencyUI() {
  if (currencyToggle) {
    const label = currencyToggle.querySelector('.currency-label')
    if (label) {
      if (currentCurrency === 'TRY') label.textContent = '₺'
      else if (currentCurrency === 'USD') label.textContent = '$'
      else if (currentCurrency === 'EUR') label.textContent = '€'
    }
  }
  renderProducts(currentCat)
  updateCartUI()
}

if (currencyToggle) {
  currencyToggle.addEventListener('click', () => {
    const idx = currencyOrder.indexOf(currentCurrency)
    currentCurrency = currencyOrder[(idx + 1) % currencyOrder.length]
    localStorage.setItem('currency', currentCurrency)
    applyCurrencyUI()
  })
}

// ===== LANGUAGE =====
const langToggle = document.getElementById('langToggle')

function switchLang(lang) {
  currentLang = lang
  localStorage.setItem('lang', lang)

  if (langToggle) {
    langToggle.querySelector('.lang-label').textContent = lang === 'tr' ? 'EN' : 'TR'
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    const val = t[key]
    if (val) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val[lang]
      } else {
        el.textContent = val[lang]
      }
    }
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder')
    const val = t[key]
    if (val) el.placeholder = val[lang]
  })

  renderProducts(currentCat)
  updateCartUI()
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    switchLang(currentLang === 'tr' ? 'en' : 'tr')
  })
}

// ===== THEME =====
const themeToggle = document.getElementById('themeToggle')

function applyTheme() {
  document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  localStorage.setItem('theme', darkTheme ? 'dark' : 'light')
}
applyTheme()

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    darkTheme = !darkTheme
    applyTheme()
  })
}

// ===== NAVBAR =====
const header = document.getElementById('header')
const hamburger = document.getElementById('hamburger')
const navPrimary = document.getElementById('navPrimary')

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80)
})

hamburger.addEventListener('click', () => {
  const isOpen = navPrimary.querySelector('.nav-links').classList.toggle('open')
  hamburger.classList.toggle('active')
  hamburger.setAttribute('aria-expanded', isOpen)
})

navPrimary.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navPrimary.querySelector('.nav-links').classList.remove('open')
    hamburger.classList.remove('active')
    hamburger.setAttribute('aria-expanded', 'false')
  })
})

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    const top = section.offsetTop - 150
    if (scrollY >= top) current = section.getAttribute('id')
  })
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current)
  })
})

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModalFn()
    closeCart()
    navPrimary.querySelector('.nav-links').classList.remove('open')
    hamburger.classList.remove('active')
  }
})

// Close mobile menu on click outside
document.addEventListener('click', e => {
  if (!e.target.closest('#header') && navPrimary.querySelector('.nav-links').classList.contains('open')) {
    navPrimary.querySelector('.nav-links').classList.remove('open')
    hamburger.classList.remove('active')
  }
})

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm')
const formStatus = document.getElementById('formStatus')

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const data = {}
    new FormData(contactForm).forEach((val, key) => data[key] = val)

    fetch('https://formsubmit.co/ajax/anadoluharman23@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        formStatus.textContent = t.contactFormSuccess[currentLang]
        formStatus.className = 'form-status success'
        contactForm.reset()
      } else {
        throw new Error('fail')
      }
    })
    .catch(() => {
      formStatus.textContent = t.contactFormError[currentLang]
      formStatus.className = 'form-status error'
    })
  })
}

// ===== NEWSLETTER =====
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault()
  const btn = this.querySelector('button')
  const orig = btn.textContent
  btn.textContent = currentLang === 'tr' ? 'Teşekkürler!' : 'Thank You!'
  btn.style.background = 'var(--sage)'
  btn.style.borderColor = 'var(--sage)'
  setTimeout(() => {
    btn.textContent = orig
    btn.style.background = ''
    btn.style.borderColor = ''
  }, 2000)
  this.reset()
})

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const revealEls = document.querySelectorAll('.section-head, .about-grid, .testimonial-grid, .contact-grid, .newsletter-content, .features-bar, .stat')

if (!('IntersectionObserver' in window)) {
  revealEls.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none' })
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  revealEls.forEach(el => {
    el.classList.add('reveal')
    observer.observe(el)
  })
}

// ===== STAT COUNTER ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-num')
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target
      const target = parseInt(el.dataset.count)
      animateCounter(el, target)
      statObserver.unobserve(el)
    }
  })
}, { threshold: 0.5 })

statNumbers.forEach(el => statObserver.observe(el))

function animateCounter(el, target) {
  let current = 0
  const step = Math.ceil(target / 40)
  const interval = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(interval)
    }
    el.textContent = current + (target === 34 ? '+' : '+')
  }, 30)
}

// ===== FOOTER CATEGORY LINKS =====
document.querySelectorAll('.footer-links a[data-cat]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const cat = link.dataset.cat
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      currentCat = cat
      renderProducts(cat)
    }, 500)
  })
})

// ===== INIT =====
renderProducts('all')
updateCartUI()
switchLang(currentLang)
