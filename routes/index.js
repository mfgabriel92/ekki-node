const express = require('express');
const router = express.Router();
const users = require('../controllers/users')

router.get('/api/me', users.me);

module.exports = router;