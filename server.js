require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();
const PORT = process.env.PORT || 3200;

app.use(cors());
app.use(express.json());

// Cek status API
app.get('/status', (req, res) => {
  res.json({ ok: true, service: 'film-api' });
});

// Ambil semua data film
app.get('/movies', (req, res) => {
  const sql = "SELECT * FROM movies ORDER BY id ASC";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Ambil satu film berdasarkan ID
app.get('/movies/:id', (req, res) => {
  const sql = "SELECT * FROM movies WHERE id = ?";
  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Film tidak ditemukan' });
    }
    res.json(row);
  });
});

// Tambah film baru
app.post('/movies', (req, res) => {
  const { title, director, year } = req.body;
  if (!title || !director || !year) {
    return res.status(400).json({ error: 'title, director, year wajib diisi' });
  }

  const sql = "INSERT INTO movies (title, director, year) VALUES (?,?,?)";
  db.run(sql, [title, director, year], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, title, director, year });
  });
});

// Update data film berdasarkan ID
app.put('/movies/:id', (req, res) => {
  const { title, director, year } = req.body;
  const sql = "UPDATE movies SET title = ?, director = ?, year = ? WHERE id = ?";

  db.run(sql, [title, director, year, req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Film tidak ditemukan' });
    }
    res.json({ id: Number(req.params.id), title, director, year });
  });
});

// Hapus film berdasarkan ID
app.delete('/movies/:id', (req, res) => {
  const sql = "DELETE FROM movies WHERE id = ?";
  db.run(sql, [req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Film tidak ditemukan' });
    }
    res.status(204).send();
  });
});

// Ambil semua data director
app.get('/directors', (req, res) => {
  const sql = "SELECT * FROM directors ORDER BY id ASC";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Ambil satu director berdasarkan ID
app.get('/directors/:id', (req, res) => {
  const sql = "SELECT * FROM directors WHERE id = ?";
  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Director tidak ditemukan' });
    }
    res.json(row);
  });
});

// Tambah director baru
app.post('/directors', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'name wajib diisi' });
  }
  const sql = "INSERT INTO directors (name) VALUES (?)";
  db.run(sql, [name], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name });
  });
});

// Update data director berdasarkan ID
app.put('/directors/:id', (req, res) => {
  const { name } = req.body;
  const sql = "UPDATE directors SET name = ? WHERE id = ?";
  db.run(sql, [name, req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Director tidak ditemukan' });
    }
    res.json({ id: Number(req.params.id), name });
  });
});

// Hapus director berdasarkan ID
app.delete('/directors/:id', (req, res) => {
  const sql = "DELETE FROM directors WHERE id = ?";
  db.run(sql, [req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Director tidak ditemukan' });
    }
    res.status(204).send();
  });
});

// Middleware jika rute tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ error: 'Rute tidak ditemukan' });
});

// Menyalakan server
app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});