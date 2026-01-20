# SURA SERAMİK - Profesyonel Fayans Ustası Web Sitesi

## 🎨 Proje Hakkında

Bu proje, Kocaeli bölgesinde hizmet veren profesyonel bir fayans ve seramik ustası için tasarlanmış modern, SEO-optimize edilmiş tek sayfalık (single-page) web sitesidir.

**Canlı Demo:** Netlify üzerinde barındırılabilir

## ✨ Özellikler

### 🏠 Ana Özellikler
- ✅ Modern, profesyonel ve temiz tasarım
- ✅ Tamamen responsive (mobil uyumlu)
- ✅ Hızlı yükleme süreleri
- ✅ SEO optimizasyonu (kapsamlı meta taglar)
- ✅ Schema.org yapısal veri (LocalBusiness)
- ✅ WhatsApp entegrasyonu
- ✅ Tıklanabilir telefon numaraları

### 📱 Bölümler
1. **Hero Section** - Etkileyici karşılama ekranı
2. **Hakkımızda** - Şirket tanıtımı ve özellikler
3. **Hizmetler** - 8 farklı hizmet kartı
4. **Neden Biz?** - Güven unsurları
5. **Galeri** - Filtrelenebilir proje galerisi
6. **Hizmet Bölgeleri** - Kocaeli ilçeleri
7. **İletişim** - Form ve iletişim bilgileri
8. **Footer** - Hızlı linkler

### 🔧 Teknik Özellikler
- Pure HTML5, CSS3, JavaScript (framework yok)
- Netlify-ready static site
- Lazy loading görüntüler
- CSS Grid & Flexbox layout
- CSS değişkenleri (variables)
- Smooth scroll animasyonları
- IntersectionObserver API kullanımı

## 📁 Dosya Yapısı

```
sura-seramik/
├── index.html          # Ana HTML dosyası
├── style.css           # Tüm stiller
├── main.js             # JavaScript işlevselliği
└── README.md           # Bu dosya
```

## 🚀 Kurulum

### Yerel Geliştirme
1. Dosyaları indirin
2. `index.html` dosyasını tarayıcıda açın
3. Veya yerel bir sunucu kullanın:
   ```bash
   # Python ile
   python -m http.server 8000
   
   # Node.js ile
   npx serve
   ```

### Netlify Deployment
1. [Netlify](https://netlify.com) hesabı oluşturun
2. "New site from Git" veya "Deploy manually" seçin
3. Dosyaları sürükleyip bırakın
4. Site otomatik olarak yayınlanır!

## ⚙️ Özelleştirme

### 📞 İletişim Bilgilerini Güncelleme

`index.html` dosyasında aşağıdaki yerleri güncelleyin:

```html
<!-- Telefon numarası -->
<a href="tel:+905551234567">+90 555 123 45 67</a>

<!-- WhatsApp -->
<a href="https://wa.me/905551234567">WhatsApp</a>

<!-- Email -->
<a href="mailto:info@suraseramik.com">info@suraseramik.com</a>
```

### 🎨 Renkleri Değiştirme

`style.css` dosyasının başındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary: #1a365d;        /* Ana renk (koyu mavi) */
    --accent: #d69e2e;         /* Vurgu rengi (altın) */
    --terracotta: #c05621;     /* İkinci vurgu (turuncu) */
}
```

### 🖼️ Görselleri Değiştirme

Görseller Unsplash CDN'den çekilmektedir. Kendi görsellerinizi kullanmak için:

1. Görseli bir CDN'e yükleyin (Cloudinary, ImageKit, vb.)
2. HTML'deki `src` attributelerini güncelleyin:

```html
<img src="https://your-cdn.com/your-image.jpg" alt="Açıklama">
```

### 📍 Hizmet Bölgelerini Güncelleme

`index.html` dosyasında `areas-grid` bölümünü düzenleyin.

## 🔍 SEO Optimizasyonu

### Meta Tags
Site aşağıdaki SEO meta taglarını içerir:
- Title tag (60 karakter)
- Meta description (155 karakter)
- Meta keywords
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URL
- Geo meta tags (yerel SEO)

### Schema.org
`LocalBusiness` yapısal verisi:
- Şirket bilgileri
- İletişim bilgileri
- Hizmet bölgeleri
- Çalışma saatleri
- Hizmet türleri

### Hedef Anahtar Kelimeler
- Kocaeli fayans ustası
- Kocaeli seramik ustası
- İzmit fayansçı
- Kocaeli banyo tadilat
- Kocaeli mutfak fayans
- Kocaeli yer döşeme
- Gebze fayans ustası
- Derince seramik döşeme

## 📱 Responsive Breakpoints

```css
/* Large Tablets & Small Desktops */
@media (max-width: 1200px) { ... }

/* Tablets */
@media (max-width: 992px) { ... }

/* Mobile Landscape */
@media (max-width: 768px) { ... }

/* Mobile Portrait */
@media (max-width: 480px) { ... }
```

## 🎯 Performans İpuçları

1. **Görselleri optimize edin** - WebP formatı kullanın
2. **CSS/JS minimize edin** - Production için
3. **CDN kullanın** - Görsel ve font dosyaları için
4. **Lazy loading** - Zaten aktif
5. **Caching** - Netlify otomatik yapar

## 📊 Analytics Entegrasyonu

Google Analytics eklemek için `</head>` tagından önce:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🌐 Tarayıcı Desteği

- ✅ Chrome (son 2 versiyon)
- ✅ Firefox (son 2 versiyon)
- ✅ Safari (son 2 versiyon)
- ✅ Edge (son 2 versiyon)
- ✅ iOS Safari
- ✅ Android Chrome

## 📄 Lisans

Bu proje özel kullanım için geliştirilmiştir.

## 📞 Destek

Sorularınız için:
- Email: info@suraseramik.com
- Telefon: +90 555 123 45 67

---

**Son Güncelleme:** Ocak 2025  
**Versiyon:** 1.0.0# fayansWebsite
