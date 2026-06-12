# Natural Rose Shop — Modern UI/UX Redesign Mühendislik Dokümantasyonu

## 1. Giriş

Bu dokümanda, Natural Rose Shop projesinde yaptığım modern UI/UX revizyonunu adım adım açıklıyorum. Benden istenen:
- Mevcut siteyi modern bir e-ticaret görünümüne kavuşturmak
- Referans olarak verilen eviahome.com.tr sitesinin tasarım dilini baz almak
- Yaptığım tüm değişiklikleri detaylı olarak belgelemek

---

## 2. Tasarım Kararları

### 2.1 Tasarım Yönü

**Organik Lüks** — Doğal ürünlerin saflığını korurken, lüks bir butik hissi vermeyi hedefledim. Evia Home'un temiz, profesyonel e-ticaret yapısıyla doğal ürün markalarının samimi havasını birleştirdim.

### 2.2 Renk Paleti

Dört temel renk seçtim:

| Renk | Kodu | Ne İşe Yarar |
|---|---|---|
| Gül Pembesi | `#B83A5E` | Ana marka rengi — "Rose" ismiyle ve gül ürünleriyle bağlantılı |
| Altın | `#C9A96E` | Lüks ve kalite hissi vermek için |
| Adaçayı Yeşili | `#5D7B4F` | Doğal/organik algısını desteklemek için |
| Krem | `#FFF8F0` | Sıcak, organik bir okuma deneyimi için |

**Neden bu renkler?**
- Gül pembesi marka adıyla direkt bağlantılı, akılda kalıcı
- Altın, Evia Home'un premium hissini yansıtıyor
- Krem ve yeşil, soğuk beyaz/siyah yerine doğal bir his veriyor

### 2.3 Font Seçimi

| Yer | Font | Neden? |
|---|---|---|
| Başlıklar | **Syne** | Karakteristik, modern, özgün bir görünüm |
| Metinler | **Commissioner** | Temiz, okunabilir, sıcak bir sans-serif |

Yaygın kullanılan Inter/Roboto gibi fontlar yerine daha özgün ve karakteristik fontlar tercih ettim.

### 2.4 Bileşen Tasarımları

| Bileşen | Yaptığım | Neden? |
|---|---|---|
| **Navigasyon** | Fixed header, scroll'da blur efektli | Evia Home'da da sabit header var, kullanıcı her an menüye ulaşsın |
| **Hero** | Tam ekran, animasyonlu gradient arkaplan | İlk izlenim önemli, göze hitap etsin |
| **Features Bar** | 4 özellik badge'li bar | Evia Home'daki gibi kargo/iade/ödeme avantajlarını göster |
| **Ürün Grid** | Kategori tab'leri, hover efektli kartlar | Kullanıcı istediği ürün tipini seçip filtreleyebilsin |
| **Sepet** | Slide-in panel, kalıcı kayıt | Gerçek e-ticaret sitesi gibi çalışsın, sayfa kapansa da sepettekiler kalsın |

---

## 3. Teknik Kararlar

### 3.1 Neler Kullandım?

| Konu | Tercih | Gerekçe |
|---|---|---|
| **Dosya yapısı** | 3 ayrı dosya (HTML, CSS, JS) | Bakımı kolay, karışıklık yok |
| **CSS** | CSS değişkenleri (Custom Properties) | Renk/tema değişikliği tek noktadan yapılsın |
| **JS** | Vanilla JS (hiçbir kütüphane yok) | Ekstra yük yok, her yerde çalışır |
| **Framework** | Kullanılmadı | Proje küçük, React/Vue eklemek gereksiz şişkinlik olurdu |

### 3.2 Önemli Teknik Detaylar

| Teknik | Nerede Kullandım? | Açıklama |
|---|---|---|
| `backdrop-filter: blur(20px)` | Navigasyon | Scroll'da buzlu cam efekti |
| `IntersectionObserver` | Scroll animasyonları | Performanslı, sayfa kaydırıldıkça elemanlar gelsin |
| `localStorage` | Sepet, dil, tema tercihleri | Sayfa kapansa da kullanıcı ayarları kalsın |
| 3 kırılma noktası | Responsive tasarım | Telefon, tablet, masaüstünde düzgün görünsün |

---

## 4. Orijinal Projeye Göre Eklediklerim

| Özellik | Eskiden | Şimdi |
|---|---|---|
| Navigasyon | 3 link | 4 link + SVG logo + sepet ikonu |
| Hero | Düz gradient | Animasyonlu blob efektleri, 2 buton |
| Features | Yok | Kargo, iade, ödeme badge'leri |
| Ürünler | Düz liste | Kategori filtreleme + sepete ekle butonu |
| Sepet | Yok | Slide-in panel, localStorage kayıtlı |
| İstatistikler | Yok | Animasyonlu sayılar (34+, 12+, 5+) |
| Müşteri Yorumları | Yok | 3 yıldızlı yorum kartı |
| Bülten | Yok | E-posta aboneliği formu |
| Footer | 1 satır | 4 kolon (marka, linkler, kategoriler, iletişim) |
| Tema | Emoji ile | SVG ikonlu, daha temiz geçiş |
| Animasyonlar | Sadece scroll reveal | Scroll reveal + blob float + sayaç + kart girişi |

---

## 5. Klasör Yapısı

```
NaturalRoseShop/
├── index.html           # Orijinal proje dosyam
├── styles.css           # Orijinal CSS
├── script.js            # Orijinal JS
├── README.md            # Orijinal açıklama
└── redesign/            # YENİ TASARIM
    ├── index.html       # HTML sayfası
    ├── styles.css       # Tüm stiller
    ├── script.js        # Tüm işlevler
    └── ENGINEERING.md   # Bu doküman
```

---

## 6. Çalıştırma

```powershell
cd C:\Users\troll\NaturalRoseShop\redesign
npx serve .
```

---

## 7. Önemli Not

Bu bir **tasarım revizyonu** çalışmasıdır. "Ödemeye Geç" butonu ve form submit işlemleri gerçek bir backend/ödeme entegrasyonu içermez. Bunlar, tasarım onaylandıktan sonraki aşamada eklenebilir.

---

## 8. Gelecekte Eklenebilecekler

- Gerçek ürün görselleri
- Canlı arama
- Fiyat aralığına göre filtreleme
- Ödeme entegrasyonu (Iyzico, PayTR)
- Mobil uygulama / PWA desteği

---

## 9. Sonuç

Bu revizyonla Natural Rose Shop sitesi:
- Daha modern ve profesyonel bir görünüme kavuştu
- Evia Home referanslı e-ticaret yapısı kazandı
- Sepet, filtreleme, dil/tema desteği gibi kullanıcı deneyimi iyileştirmeleri eklendi
- Tüm kararların gerekçeleri bu dokümanda kayıt altına alındı
