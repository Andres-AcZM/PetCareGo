import express from 'express';
import db from './db';

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test-db', (_req, res) => {
  db.query('SELECT 1 + 1 AS resultado', (err: { message: any; }, results: { resultado: any; }[]) => {
    if (err) {
      console.error('❌ Error ejecutando consulta:', err);
      return res.status(500).json({ conectado: false, error: err.message });
    }
    res.json({ conectado: true, resultado: results[0].resultado });
  });
});