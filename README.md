# Oppodex

## Açıklama

Oppodex, LI.FI Widget kullanarak EVM uyumlu zincirlerde swap ve bridge işlemlerini toplayan, kullanıcı dostu bir DEX-aggregator arayüzüdür.

## Kurulum

```bash
git clone https://github.com/soletswap/Oppodex.git
cd Oppodex
npm install
npm run dev
```

## Deployment ve Base Özelliği

### Base Özelliği Nedir?

Vite projelerinde `base` özelliği, uygulamanın hangi URL path'inde çalışacağını belirler. Bu özellik özellikle deployment aşamasında kritik öneme sahiptir.

### Mevcut Yapılandırma

Projemizde `vite.config.js` dosyasında base özelliği şu şekilde tanımlanmıştır:

```javascript
export default defineConfig({
  // Base URL for the application - important for deployment
  // Set to '/' for root domain or '/subdirectory/' for subdirectory deployment
  base: '/',
  // diğer yapılandırmalar...
})
```

### Base Özelliğinin Kullanım Durumları

#### 1. Root Domain (Varsayılan)
```javascript
base: '/'
```
- **Kullanım**: Ana domain'de çalışan uygulamalar için
- **Örnek**: `https://oppodex.com/`
- **Durum**: Mevcut varsayılan ayar

#### 2. Subdirectory Deployment
```javascript
base: '/oppodex/'
```
- **Kullanım**: Alt dizinde çalışan uygulamalar için
- **Örnek**: `https://example.com/oppodex/`
- **Durum**: GitHub Pages, shared hosting gibi ortamlar için gerekli

#### 3. CDN Deployment
```javascript
base: 'https://cdn.example.com/oppodex/'
```
- **Kullanım**: CDN üzerinden serve edilen uygulamalar için
- **Örnek**: AWS CloudFront, Cloudflare gibi CDN'ler

### Base Özelliğinin Neden Önemli Olduğu

1. **Asset Path'leri**: JavaScript, CSS ve diğer asset dosyalarının doğru yolda yüklenmesi
2. **Router Yapılandırması**: SPA routing'in doğru çalışması
3. **API Endpoint'leri**: Relative URL'lerin doğru resolve edilmesi
4. **SEO**: Meta tag'ler ve canonical URL'lerin doğru oluşması

### Base Özelliğini Ne Zaman Değiştirmeli

#### Değiştirmeniz Gereken Durumlar:
- GitHub Pages'e deploy ediyorsanız: `base: '/repo-name/'`
- Shared hosting'de alt dizin kullanıyorsanız: `base: '/dizin-adi/'`
- CDN kullanıyorsanız: `base: 'https://cdn-url.com/path/'`
- Monorepo'da birden fazla app varsa: `base: '/app-name/'`

#### Değiştirmenize Gerek Olmayan Durumlar:
- Vercel, Netlify gibi modern hosting'lerde root domain kullanıyorsanız
- Custom domain ile root'ta çalışıyorsanız
- Docker container'da standalone çalışıyorsanız

### Deployment Örnekleri

#### GitHub Pages için:
```javascript
// vite.config.js
export default defineConfig({
  base: '/Oppodex/', // Repository adınızla değiştirin
  // ...
})
```

#### Alt dizin deployment için:
```javascript
// vite.config.js
export default defineConfig({
  base: '/my-app/', // Alt dizin adınızla değiştirin
  // ...
})
```

### Test Etme

Base özelliğini değiştirdikten sonra:

1. **Build testi**: `npm run build`
2. **Preview testi**: `npm run preview`
3. **Production testi**: Built dosyaları target environment'da test edin

### Sorun Giderme

Eğer deployment sonrası beyaz sayfa görüyorsanız veya asset'ler yüklenmiyorsa:

1. Base özelliğinin deployment path'iyle eşleştiğini kontrol edin
2. Browser developer tools'da network tab'inde 404 hataları olup olmadığını kontrol edin
3. Asset path'lerinin doğru oluştuğunu kontrol edin
