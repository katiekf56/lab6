// filepath: backend/server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// CRUD routes
app.get('/api/employees', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Employees');
  res.json(rows);
});

app.post('/api/employees', async (req, res) => {
  const { name, email, role } = req.body;
  const [result] = await pool.query(
    'INSERT INTO Employees (name, email, role) VALUES (?, ?, ?)',
    [name, email, role]
  );
  res.json({ id: result.insertId, name, email, role });
});

app.put('/api/employees/:id', async (req, res) => {
  const { name, email, role } = req.body;
  await pool.query(
    'UPDATE Employees SET name=?, email=?, role=? WHERE id=?',
    [name, email, role, req.params.id]
  );
  res.json({ id: req.params.id, name, email, role });
});

app.delete('/api/employees/:id', async (req, res) => {
  await pool.query('DELETE FROM Employees WHERE id=?', [req.params.id]);
  res.json({ success: true });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});