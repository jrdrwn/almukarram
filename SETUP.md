

# Dokumentasi Setup, Develop, dan Deploy

## Rincian Harga Website

Total harga: **Rp3.250.000,00**

### Rincian:
- Pengembangan backend Laravel: Rp1.000.000,00
- Pengembangan frontend Inertia.js + React: Rp900.000,00
- Integrasi dan setup database: Rp300.000,00
- Desain UI/UX dan responsif: Rp400.000,00
- Testing & QA (Pest, PHPUnit): Rp200.000,00
- Dokumentasi & training penggunaan: Rp150.000,00
- Deploy & optimasi server: Rp300.000,00

> Harga sudah termasuk:
> - Source code lengkap
> - Setup awal di server
> - Dokumentasi penggunaan
> - Garansi bug 1 bulan setelah deploy

## 1. Prasyarat
- Node.js & npm
- Composer
- MySQL/PostgreSQL (atau database lain sesuai konfigurasi)
- (Opsional) Git

## 2. Setup Project

### a. Clone Repository
```bash
git clone <url-repo>
cd <nama-folder>
```

### b. Install Dependency
- **Backend (PHP):**
  ```bash
  composer install
  ```
- **Frontend (JS):**
  ```bash
  npm install
  ```

### c. Konfigurasi Environment
- Copy file `.env.example` ke `.env`:
  ```bash
  cp .env.example .env
  ```
- Edit `.env` sesuai kebutuhan (database, mail, dsb).

### d. Generate Key Laravel
```bash
php artisan key:generate
```

### e. Migrasi & Seed Database
- Migrasi:
  ```bash
  php artisan migrate
  ```
- Seed (opsional):
  ```bash
  php artisan db:seed
  ```

---

## 3. Pengembangan

### a. Jalankan Backend
```bash
php artisan serve
```

### b. Jalankan Frontend (Inertia/React)
```bash
npm run dev
```

- Perubahan pada file JS/React akan otomatis direfresh.
- Perubahan pada file PHP cukup reload browser jika artisan serve aktif.
- Jika menggunakan hot reload, pastikan port tidak bentrok.

---

## 4. Testing

### a. Backend (Pest/PHPUnit)
```bash
./vendor/bin/pest
```
atau
```bash
./vendor/bin/phpunit
```

### b. Frontend (opsional)
Jika ada setup testing JS, gunakan:
```bash
npm run test
```

---

## 5. Build & Deploy

### a. Build Frontend
```bash
npm run build
```
Hasil build akan masuk ke `public/build/`.

### b. Optimasi Laravel
```bash
php artisan optimize
```

### c. Production
- Pastikan `.env` sudah diatur untuk production.
- Pastikan permission folder `storage/` dan `bootstrap/cache/` benar.
- Jalankan server web (Apache/Nginx) ke folder `public/`.

### d. Langkah Umum Deploy
1. **Install dependency**
   - `composer install --no-dev --optimize-autoloader`
   - `npm install && npm run build`
2. **Migrasi database**
   - `php artisan migrate --force`
3. **Optimasi**
   - `php artisan optimize`

---

## 6. Troubleshooting
- Cek log di `storage/logs/` jika error.
- Gunakan `php artisan` untuk melihat daftar command.
- Pastikan versi Node.js dan Composer sesuai requirement.
- Jika error pada build JS, hapus folder `node_modules` lalu `npm install` ulang.

---

## 7. Referensi
- [Laravel Docs](https://laravel.com/docs/)
- [Inertia.js Docs](https://inertiajs.com/)
- [React Docs](https://react.dev/)
- [Pest Docs](https://pestphp.com/docs/)

---

Jika ada pertanyaan atau error, cek log di `storage/logs/` atau gunakan perintah `php artisan` untuk troubleshooting.
