# 📚 Week 1 – Pengenalan & Setup

## 🎯 Capaian
- Memahami konsep dasar Framework7 & arsitektur project.
- Berhasil setup environment (Docker + Vite + Framework7 CLI).
- Membuat aplikasi **Hello F7** sederhana dengan 2 halaman (Home & About).

---

## 📖 Materi Minggu Ini
1. **Konsep Framework7**
   - Apa itu Framework7 dan bagaimana perannya dalam pengembangan aplikasi web/mobile.
   - Perbedaan Framework7 Core, Vue, React, dan Svelte.
   - Struktur project dasar (src, public, routes, pages).
2. **Instalasi & Setup**
   - Setup environment dengan Docker + WSL (Ubuntu).
   - Menjalankan project menggunakan `npm run dev` (Vite server).
3. **Struktur Project & Routing**
   - File penting: `app.js`, `routes.js`, `index.html`.
   - Cara kerja pages dan routing di Framework7.
4. **Membuat Halaman Baru**
   - Membuat halaman `home.f7.html` dan `about.f7.html`.
   - Menambahkan route di `routes.js`.
   - Navigasi antar halaman.

---

## 🛠️ Praktikum / Tugas
Buat aplikasi sederhana bernama **`hello-f7`** di folder `project/` dengan ketentuan:
- Halaman **Home**:
  - Menampilkan teks “Hello Framework7 🚀”.
  - Memiliki link untuk menuju halaman About.
- Halaman **About**:
  - Berisi deskripsi singkat (misalnya nama, pekerjaan, atau bio singkat).
  - Memiliki link untuk kembali ke Home.
- Pastikan navigasi antar halaman berfungsi melalui router.

---

## 📦 Struktur Folder
week1/
├── README.md
└── project/
└── hello-f7/
├── package.json
├── src/
│ ├── pages/
│ │ ├── home.f7.html
│ │ └── about.f7.html
│ ├── app.js
│ ├── routes.js
│ └── ...
└── public/

