const sqlite3 = require('sqlite3').verbose();

const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./database.sqlite', (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
        reject(err);
      } else {
        console.log('Connected to SQLite database.');
        db.run(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
          );
        `, (err) => {
          if (err) {
            console.error('Error creating users table:', err.message);
            reject(err);
          } else {
            console.log('Users table initialized.');
            resolve();
          }
        });
      }
    });
  });
};

module.exports = { initializeDatabase };