// backend/routes/users.js
const express = require('express');
const router = express.Router();
const { User, Rating } = require('../models');
const auth = require('../middleware/auth');

router.get('/', auth(['admin']), async (req, res) => {
  const users = await User.findAll({ include: Rating });
  res.json(users);
});

module.exports = router;
