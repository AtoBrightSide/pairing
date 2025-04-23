const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// Sign up with email and password
const signUpWithEmail = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error.' });

    if (user) {
      return res.status(400).json({ error: 'Email is already registered.' });
    }

    db.run(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, password],
      (err) => {
        if (err) return res.status(500).json({ error: 'Failed to create user.' });
        res.status(201).json({ message: 'User created successfully.' });
      }
    );
  });
};

// Login
const login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error.' });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials.' });
    }


    res.status(200).json({ message: 'Login successful.', user });
  });
};

module.exports = {
  signUpWithEmail,
  login,
};