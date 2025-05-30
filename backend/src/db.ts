import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306
});

db.connect((err) => {
  if (err) {
    console.error('Error en la conexion a la base de datos', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
  db.query('SELECT 1 + 1 AS resultado', (err, results) => {
  });
});


export default db;
// This code sets up a MySQL database connection using the mysql package and environment variables for configuration.