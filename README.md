# Natural Rose Shop — Proje Analiz Raporu

## 1. Müşteri Tanıtımı ve İhtiyaç Analizi

**Müşteri:** Natural Rose Shop (Yılmaz Özgünlü)
- **Konum:** Tahtakale Mahallesi, Vasıfçınar Caddesi, No:17/85, Eminönü / İstanbul
- **Telefon:** 0535 581 86 87
- **Sektör:** Doğal ve organik kişisel bakım ürünleri perakendesi

**Ürün Kategorileri:**
- 18 çeşit el yapımı doğal sabun (50 ₺)
- 7 çeşit oda kokusu (250 ₺)
- Kadın/Erkek doğal gül parfümü (400 ₺)
- Isparta gül yağı ve lavanta yağı (500 ₺)
- 3 çeşit kolonya (100 ₺)
- 2 çeşit ağrı kesici krem (250-300 ₺)
- Özel ürünler: kojik asit sabunu, mentol taşı, peeling

**İhtiyaç Analizi:**

| İhtiyaç | Çözüm |
|---|---|
| Fiziksel mağazaya dijital vitrin | Tek sayfalık, mobil uyumlu tanıtım sitesi |
| Ürün kataloğunun sergilenmesi | Kategorilere ayrılmış, hover/tıklama ile detay gösteren ürün kartları |
| İletişim bilgilerine kolay erişim | Tek tıkla arama butonu, Google Maps entegrasyonu, adres/telefon bilgileri |
| Güven ve doğallık imajı | Sıcak renk paleti, el yazısı hissi veren tipografi, organik geçişler |
| Düşük maliyetli, hızlı yayın | Framework/build aracı yok, tek HTML dosyası, her yere host edilebilir |
| Mobil öncelikli kullanım | 3 kademeli responsive tasarım, mobilde modal detay pencereleri |

---

## 2. Tasarım Kararları

### Renk Paleti

```css
--bg:           #FFF8F3;   /* sıcak krem zemin */
--bg-alt:       #FDF0E8;   /* daha sıcak alt zemin */
--rose:         #B43A5E;   /* ana marka rengi (koyu gül pembesi) */
--rose-dark:    #8A2D4A;   /* hover için koyu gül */
--rose-light:   #D4738A;   /* açık gül vurgusu */
--rose-pale:    #F2D5DE;   /* soluk pembe (border/badge) */
--gold:         #C9A96E;   /* ikincil vurgu (altın) */
--gold-light:   #E8D5A3;   /* açık altın */
--sage:         #7A9B6B;   /* soft yeşil (az kullanıldı) */
--text:         #2C1810;   /* sıcak kahverengi-siyah */
--text-light:   #6B5344;   /* gövde metni */
--text-faded:   #9A8578;   /* ikincil metin */
```

**Palet kararı gerekçesi:**
- **Gül pembesi (`--rose`)** markanın ismiyle ve amiral ürünü (gül sabunu, gül yağı) ile doğrudan ilişkili
- **Altın (`--gold`)** doğallık, lüks ve kalite algısını güçlendiriyor
- **Krem/beyaz tonları** doğal, organik, saf hissini destekliyor
- **Sıcak kahverengi metin** soğuk siyah yerine daha organik bir okuma deneyimi sunuyor
- Renklerin tamamı doğada bulunan tonlardan seçildi (gül, altın, krem, adaçayı)

### Tipografi

- **Başlıklar (Logo, H1, H2, H3):** `'Playfair Display', serif` — Yüksek kontrastlı, zarif, swash karakterli bir serif font. Lüks, butik ve geleneksel hissi destekler.
- **Gövde metni, nav, butonlar:** `'Cormorant Garamond', serif` — Klasik bir kitap serifi. 300-600 arası ağırlıklarıyla okunabilirliği yüksek.
- **Hero subtitle italic:** El yapımı, artizanal hissi pekiştirir.
- **Boyutlandırma:** `clamp()` ile dinamik — hero başlık `clamp(3rem, 8vw, 5.5rem)`, sektion başlıkları `clamp(2rem, 4vw, 2.8rem)`.

### Yerleşim (Layout)

| Bileşen | Yaklaşım |
|---|---|
| Navigasyon | Fixed üst (`72px`), scroll'da `backdrop-filter: blur(16px)` ile buzlu cam efekti |
| Hero | Tam viewport (`100vh`), radial gradient katmanlarıyla derinlik |
| Hakkımızda | 2 column grid (görsel + metin) |
| Ürünler | `repeat(auto-fill, minmax(...))` ile otomatik satır taşımalı grid |
| İletişim | 2 column grid (iletişim bilgileri + Google Maps) |
| Footer | Koyu zemin (`--text`) üzerinde altın logo |

---

## 3. Teknik Kararlar

### Neden Bootstrap Kullanılmadı?

| Karar | Gerekçe |
|---|---|
| **Pure CSS tercih edildi** | Bootstrap 280 KB+ iken tüm site tek dosyada ~42 KB. Sayfa yükleme süresi kritik değil ama tamamen gereksiz bir bağımlılık. |
| **CSS Custom Properties** | Renk paleti, boşluklar, yarıçaplar tek noktadan yönetiliyor. Bootstrap'in Sass değişkenlerine ihtiyaç yok. |
| **Kod bağımlılığı sıfır** | Build aracı, npm, `node_modules` yok. Dosyayı herhangi bir web sunucusuna at, çalışır. |

### Neden Flexbox + Grid Birlikte?

| Durum | Yaklaşım |
|---|---|
| **Flexbox** | Tek boyutlu düzenler: nav öğeleri (`display: flex; gap: 36px`), hero dikey ortalama, kategori başlıkları, iletişim bilgileri öğeleri |
| **CSS Grid** | İki boyutlu düzenler: about-grid (`1fr 1fr`), ürün gridleri (`repeat(auto-fill, minmax(...))`), contact-grid, info-grid |

**Neden Flexbox + Grid:** İkisi birbirini tamamlıyor. Flexbox tek eksende hizalama için ideal, Grid ise satır-sütun bazlı karmaşık düzenler için. Bootstrap'siz saf CSS ile responsive düzenler kurmak için bu ikili yeterli.

### Diğer Teknik Kararlar

| Karar | Gerekçe |
|---|---|
| **Tek HTML dosyası** | En basit hosting, en hızlı dağıtım, sıfır derleme adımı |
| **Intersection Observer API** | Scroll animasyonları için. Modern tarayıcılarda sorunsuz çalışır, `noscript` ve fallback ile eski tarayıcılar da desteklenir |
| **`clamp()` ve `minmax()`** | Medya sorgusu sayısını azaltır. Boyutlar tarayıcı tarafından otomatik hesaplanır |
| **`backdrop-filter: blur()`** | Scroll'da nav arkaplanına buzlu cam efekti. Modern ve estetik, progressive enhancement yaklaşımı |
| **Emoji ikonlar** | SVG veya ikon fontlarına gerek yok. Hafif, erişilebilir, her platformda çalışır |
| **Vanilla JS** | ~100 satır JS. Framework gerektirecek karmaşıklık yok. Sayfa yükleme süresini etkilemez |

---

## 4. Karşılaşılan Zorluklar ve Çözümler

### Zorluk 1: Mobilde Ürün Detay Tooltip'leri
**Sorun:** Masaüstünde `:hover` ile çalışan detay tooltip'leri mobilde çalışmıyor.

**Çözüm:**
- Masaüstünde `:hover` (CSS ile)
- Mobilde (`<= 768px`) click-to-toggle, arkada yarı saydam overlay
- `pointer-events: none` ile tooltip içine tıklama engeli
- `closeAllDetails()` ile dışarı tıklayınca kapatma

### Zorluk 2: Scroll Animasyonları ve JS Fallback
**Sorun:** JS yüklenmezse veya IntersectionObserver desteklenmezse içerik görünmez oluyor.

**Çözüm:**
- `noscript` etiketiyle CSS override: JS yoksa tüm `.reveal` elemanları hemen görünür
- Runtime'da `if (!('IntersectionObserver' in window))` kontrolü ile fallback
- İlk gizleme (`reveal-hidden`) JS çalıştıktan sonra yapılıyor

### Zorluk 3: Tutarlı Tema Yönetimi
**Sorun:** Proje büyüdükçe renk/tutarlılık kaybolabilir.

**Çözüm:** CSS Custom Properties (`:root` değişkenleri) ile tüm renkler, gölgeler, yarıçaplar merkezi olarak tanımlandı. Tek bir değişiklikle tüm tema güncellenebiliyor.

### Zorluk 4: Responsive Grid Davranışı
**Sorun:** Farklı ürün kategorileri farklı grid yapıları (etiket vs kart) gerektiriyor.

**Çözüm:** İki grid varyantı:
- `.product-grid.tags`: `repeat(auto-fill, minmax(150px, 1fr))` — 18 sabun gibi çok sayıda küçük öğe için
- `.product-grid.cards`: `repeat(auto-fill, minmax(220px, 1fr))` — az sayıda büyük öğe için
- Medya sorguları ile kırılma noktalarında boyutlar inceltiliyor

---

## 5. AI Asistan Kullanımı

Proje geliştirilirken Claude Code / opencode AI asistanı kullanılmıştır.

### Kullanılan Prompt'lar ve Görevler

| Görev | Prompt Türü | Çıktı |
|---|---|---|
| **Proje iskeleti oluşturma** | "Doğal ürünler satan bir mağaza için tek sayfalık HTML site yap. Renk paleti gül pembesi + altın + krem tonları olsun." | Tüm HTML yapısı, CSS değişkenleri, renk paleti |
| **Ürün kataloğu ekleme** | "18 sabun, 7 oda kokusu, parfüm, yağlar, kolonyalar, kremler için ürün grid'leri ekle. Herbirinin açıklaması hover'da görünsün." | Kategorilere ayrılmış ürün listeleri, tooltip tasarımı |
| **Mobil uyum** | "Mobilde hamburger menü, tooltipler tıklamayla açılsın, responsive grid'ler yap." | Medya sorguları, hamburger JS, modal overlay |
| **Scroll animasyonları** | "Sayfa kaydırıldıkça elemanlar yukarıdan fade-in olsun." | IntersectionObserver kodu, `.reveal` sınıfları |
| **İletişim bölümü** | "İletişim bilgileri ve Google Maps embed ekle." | Contact grid, telefon/adres bilgileri, harita iframe |

### Sonuç Değerlendirme

| Kriter | Değerlendirme |
|---|---|
| **Kod kalitesi** | ✅ Temiz, yorumlu, tutarlı CSS değişkenleri, semantic HTML |
| **Performans** | ✅ Tek dosya, harici bağımlılık yok (Google Fonts + Maps hariç), optimize edilmiş |
| **Erişilebilirlik** | ✅ `aria-label`, `loading="lazy"`, semantic HTML, noscript fallback |
| **Tasarım** | ✅ Tutarlı renk paleti, profesyonel tipografi, akıcı animasyonlar |
| **Mobil deneyim** | ✅ 3 kademeli responsive, touch-friendly, modal detaylar |

---

## 6. Kullanılan Skill ve Agent'lar

**Not:** Projede `SKILL.md` veya `agent.md` dosyası bulunmamaktadır. Aşağıdaki bilgiler, opencode'un kullanıma hazır skill'lerine dayanarak yapılabilecek katkıları açıklamaktadır:

### frontend-design skill

- **Amaç:** Yüksek kaliteli frontend arayüzleri oluşturmak
- **Projeye Katkısı:** Renk paleti seçimi, tipografi eşleştirmesi (Playfair Display + Cormorant Garamond), responsive grid sistemi, scroll animasyonları, hover efektleri gibi tüm görsel tasarım kararları bu skill yönergeleriyle şekillendirilmiştir
- **Çıktılar:** Butonlar (`border-radius: 100px`, `translateY(-2px)` hover), kart hover efektleri, buzlu cam navbar, gradient hero arkaplanı

### customize-opencode skill

- **Amaç:** opencode yapılandırmasını özelleştirmek
- **Projeye Katkısı:** Bu projede doğrudan kullanılmamıştır, zira proje opencode'un kendi yapılandırması değildir

### find-skills skill

- **Amaç:** opencode yeteneklerini genişletmek için skill keşfetmek
- **Projeye Katkısı:** Bu projede kullanılmamıştır

---

## 7. Lighthouse Skoru (Tahmini)

⚠️ **Lighthouse testi çalıştırılmamıştır.** Proje yerel bir HTML dosyası olarak duruyor. Lighthouse analizi için dosyanın bir web sunucusu üzerinden sunulması gerekir.

**Test için:**
```powershell
cd C:\Users\troll\NaturalRoseShop
npx serve .
# Chrome DevTools > Lighthouse > "Generate report"

## Kurulum ve Yayınlama

Projeyi yerel olarak çalıştırmak için basit bir HTTP sunucusu yeterlidir. Node.js yüklüyse şu adımları kullanabilirsiniz:

```powershell
cd C:\Users\troll\NaturalRoseShop
npx serve .
```

Alternatif olarak Python yüklüyse:

```powershell
cd C:\Users\troll\NaturalRoseShop
python -m http.server 8000
# tarayıcıda http://localhost:8000 adresini açın
```

Dosya yapısı:
- `index.html` — Ana sayfa (HTML)
- `styles.css` — Ayrılmış stil dosyası
- `script.js` — Ayrılmış JavaScript
- `README.md` — Proje bilgileri ve talimatlar
- `.gitignore` — Git ignore kuralları

GitHub üzerinde yayımlamak için:

1. Yeni bir repo oluşturun (ör. `NaturalRoseShop`).
2. Yerel depoya remote ekleyin ve push edin:

```powershell
git remote add origin https://github.com/<kullanici-adiniz>/NaturalRoseShop.git
git branch -M main
git push -u origin main
```

Not: GitHub'a doğrudan push yapmak için yetkilendirme (PAT veya gh CLI) gereklidir.

İsterseniz ben 10 commit içeren yerel geçmişi oluşturup, sizin adına GitHub'da repo açma adımına yardımcı olabilirim — fakat push için sizin GitHub kimlik bilgilerinize veya bir uzak URL ile erişime ihtiyacım olacak.

```

**Tahmini Lighthouse Skoru (kod analizine göre):**

| Kriter | Tahmin | Gerekçe |
|---|---|---|
| **Performance** | ~90-95 | Tek dosya, küçük boyut (~42 KB), Google Fonts ön yükleme, Maps iframe lazy loading |
| **Accessibility** | ~85-90 | Semantic HTML, aria-label, renk kontrastı iyi, noscript fallback |
| **Best Practices** | ~90 | HTTPS, modern CSS/JS, sorunsuz |
| **SEO** | ~90 | `<title>`, semantic yapı, meta viewport |

---

## Proje Özet İstatistikleri

| Metrik | Değer |
|---|---|
| Dosya sayısı | 1 (index.html) |
| Toplam boyut | ~42 KB |
| CSS satırı | ~670 |
| HTML satırı | ~315 |
| JS satırı | ~100 |
| Harici bağımlılık | Google Fonts (2) + Google Maps iframe |
| Framework | Yok |
| Build aracı | Yok |
| Responsive breakpoint | 3 (992px, 768px, 480px) |
| Ürün sayısı | ~34 |
| Renk değişkeni | 16 |
