const express = require('express');
const { signUpWithEmail, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signUpWithEmail);
router.post('/login', login);

module.exports = router;