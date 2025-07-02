const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === 'vendor' && password === 'pass123') {
    const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
