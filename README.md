# 🎬 Movie Data Management Backend

Aplikasi **backend sederhana** berbasis **Node.js** dan **SQLite** untuk manajemen data film dan sutradara. Proyek ini cocok untuk latihan dan eksplorasi implementasi **RESTful API**.

---

## 🚀 Memulai

### 📋 Prasyarat

Pastikan Anda telah menginstal:
- **Node.js** (disarankan versi LTS)
- **npm** (Node Package Manager)
- **Git** (untuk meng-clone repositori)

### ⚙️ Instalasi & Menjalankan Proyek

1. **Clone** repositori:
    ```bash
    git clone https://github.com/later-ano/temporary.git
    cd temporary
    ```

2. **Install** dependensi:
    ```bash
    npm install
    ```

3. **Jalankan** server:
    ```bash
    node server.js
    # Server berjalan di http://localhost:[PORT]
    # (PORT diatur di file .env atau default 3200)
    ```

4. **Uji API** menggunakan Postman atau tool lain (koleksi tersedia di `postman_box/`).

---

## 📂 Struktur Proyek

```
├── server.js           # Entry point aplikasi (Express.js)
├── database.js         # Koneksi & setup database SQLite
├── movies.db           # File database SQLite
├── package.json
├── package-lock.json
├── .env                # Variabel lingkungan (PORT, DB_SOURCE, dll)
├── .gitignore
├── logbook/            # Catatan pengembangan & dokumentasi tambahan
├── postman_box/        # Koleksi Postman untuk pengujian API
└── node_modules/
```

---

## 🖥️ API Endpoints

### Status
| Metode | Endpoint      | Deskripsi                        |
| ------ | ------------- | -------------------------------- |
| GET    | `/status`     | Mengecek status API              |

### Movies
| Metode   | Endpoint           | Deskripsi                                 |
| -------- | ------------------ | ----------------------------------------- |
| GET      | `/movies`          | Mengambil semua daftar film               |
| GET      | `/movies/:id`      | Mengambil detail film berdasarkan ID      |
| POST     | `/movies`          | Menambahkan film baru                    |
| PUT      | `/movies/:id`      | Memperbarui informasi film berdasarkan ID |
| DELETE   | `/movies/:id`      | Menghapus film berdasarkan ID             |

### Directors
| Metode   | Endpoint             | Deskripsi                                    |
| -------- | -------------------- | -------------------------------------------- |
| GET      | `/directors`         | Mengambil semua daftar sutradara             |
| GET      | `/directors/:id`     | Mengambil detail sutradara berdasarkan ID    |
| POST     | `/directors`         | Menambahkan sutradara baru                   |
| PUT      | `/directors/:id`     | Memperbarui nama sutradara berdasarkan ID    |
| DELETE   | `/directors/:id`     | Menghapus sutradara berdasarkan ID           |

> **Catatan:** Detail request & response dapat dilihat di koleksi Postman pada folder `postman_box/`.

---

## 🛠️ Dependencies

- **Express.js**: Framework web minimalis untuk API.
- **sqlite3**: Driver SQLite untuk Node.js.
- **dotenv**: Memuat variabel lingkungan dari file `.env`.

---

## 📌 Catatan

- **Database:** Menggunakan SQLite (`movies.db`). Setup & seed data awal otomatis diatur di `database.js`.
- **Dokumentasi:** Progres, troubleshooting, dan catatan pengembangan ada di folder `logbook/`.
- **Testing:** Gunakan Postman atau REST Client lain untuk mencoba endpoint.

---

## 📝 Lisensi

Proyek ini hanya untuk keperluan pembelajaran dan eksplorasi. Silakan gunakan, modifikasi, dan distribusikan sesuai kebutuhan.