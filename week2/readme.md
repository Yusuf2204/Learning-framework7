# 📚 Week 2 - Framework7 Basics

Pada minggu ini kita mempelajari **komponen dasar Framework7** dan bagaimana menggunakannya dalam sebuah project.

---

## ✅ Checklist Materi Week 2

- [x] **Navbar & Toolbar / Tabbar**
- [x] **List, Card, Button**
- [x] **Dialog, Modal Popup, Toast**
- [x] **Form & Validasi Sederhana**

---

## 📌 Ringkasan Materi

### 1. Navbar & Tabbar
- Navigasi dasar antar halaman (`home.f7`, `profile.f7`).
- Toolbar di bawah dengan Tabbar.

### 2. List, Card, Button
- Menggunakan **List** untuk menampilkan data.
- **Card** untuk menampilkan informasi dengan layout rapi.
- **Button** dengan `button-fill` untuk aksi utama.

### 3. Dialog, Modal Popup, Toast
- **Dialog** → alert, confirm.
- **Popup** → edit form di halaman profile.
- **Toast** → notifikasi singkat setelah update data.

### 4. Form Handling
- Menggunakan `form.convertToData()` untuk mengambil input.
- Validasi sederhana (contoh: field wajib diisi, angka valid).
- Menyimpan data ke variabel `profile` lalu update UI dengan `$update()`.

---

## 🚀 Preview Hasil

- **Home Page** → tab utama dengan link ke Profile.
- **Profile Page** → menampilkan data user & tombol edit.
- **Edit Profile (Popup)** → bisa update `Name`, `Age`, `Gender`.
- **Toast** muncul setelah profile disimpan.

---

## 🔜 Next (Week 3)
- Routing lebih kompleks (dynamic route, query param).
- Fetch data dari API (Request & Load).
- Infinite Scroll & Pull To Refresh.
- LocalStorage untuk menyimpan data.

---

## 📂 Struktur Folder
```
week2/  
├── README.md                # Dokumentasi Week 2  
└── project/  
    └── src/  
        ├── assets/          # (opsional) aset gambar, css, dll  
        ├── components/      # (opsional) komponen umum  
        ├── pages/           # halaman bawaan framework7  
        │   ├── about.f7  
        │   ├── form.f7  
        │   ├── dynamic-route.f7  
        │   ├── request-and-load.f7  
        │   └── 404.f7  
        └── week2/           # halaman khusus Week 2  
            ├── home.f7      # halaman Home  
            └── profile.f7   # halaman Profile + form edit  
```