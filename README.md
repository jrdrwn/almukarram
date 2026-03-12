
# README

## Deskripsi
Proyek ini adalah aplikasi web berbasis Laravel (backend) dan Inertia.js + React (frontend). Backend menangani API, autentikasi, dan logika bisnis, sedangkan frontend menggunakan React untuk UI dinamis.

---

## Struktur Direktori
- `app/` : Kode backend Laravel (model, controller, dll)
- `resources/js/` : Kode frontend React (halaman, komponen)
- `routes/` : Routing Laravel
- `public/` : Aset publik (build, gambar, index.php)
- `database/` : Migrasi, seeder, factory
- `config/` : Konfigurasi aplikasi
- `tests/` : Pengujian (Pest, PHPUnit)

---

## Prasyarat
- Node.js & npm
- Composer
- MySQL/PostgreSQL (atau database lain sesuai konfigurasi)
- (Opsional) Git

---

## Setup

### 1. Clone Repository
```bash
git clone <url-repo>
cd <nama-folder>
```

### 2. Install Dependency
- **Backend (PHP):**
  ```bash
  composer install
  ```
- **Frontend (JS):**
  ```bash
  npm install
  ```

### 3. Konfigurasi Environment
- Copy file `.env.example` ke `.env`:
  ```bash
  cp .env.example .env
  ```
- Edit `.env` sesuai kebutuhan (database, mail, dsb).

### 4. Generate Key Laravel
```bash
php artisan key:generate
```

### 5. Migrasi & Seed Database
- Migrasi:
  ```bash
  php artisan migrate
  ```
- Seed (opsional):
  ```bash
  php artisan db:seed
  ```

---

## Pengembangan

### 1. Jalankan Backend
```bash
php artisan serve
```

### 2. Jalankan Frontend (Inertia/React)
```bash
npm run dev
```

- Perubahan pada file JS/React akan otomatis direfresh.
- Perubahan pada file PHP cukup reload browser jika artisan serve aktif.
- Jika menggunakan hot reload, pastikan port tidak bentrok.

---

## Testing

### 1. Backend (Pest/PHPUnit)
```bash
./vendor/bin/pest
```
atau
```bash
./vendor/bin/phpunit
```

### 2. Frontend (opsional)
Jika ada setup testing JS, gunakan:
```bash
npm run test
```

---

## Build & Deploy

### 1. Build Frontend
```bash
npm run build
```
Hasil build akan masuk ke `public/build/`.

### 2. Optimasi Laravel
```bash
php artisan optimize
```

### 3. Production
- Pastikan `.env` sudah diatur untuk production.
- Pastikan permission folder `storage/` dan `bootstrap/cache/` benar.
- Jalankan server web (Apache/Nginx) ke folder `public/`.

### 4. Langkah Umum Deploy
1. **Install dependency**
   - `composer install --no-dev --optimize-autoloader`
   - `npm install && npm run build`
2. **Migrasi database**
   - `php artisan migrate --force`
3. **Optimasi**
   - `php artisan optimize`

---

## Troubleshooting
- Cek log di `storage/logs/` jika error.
- Gunakan `php artisan` untuk melihat daftar command.
- Pastikan versi Node.js dan Composer sesuai requirement.
- Jika error pada build JS, hapus folder `node_modules` lalu `npm install` ulang.

---

## Referensi
- [Laravel Docs](https://laravel.com/docs/)
- [Inertia.js Docs](https://inertiajs.com/)
- [React Docs](https://react.dev/)
- [Pest Docs](https://pestphp.com/docs/)

---

Jika ada pertanyaan, silakan hubungi maintainer atau cek dokumentasi di atas.
