const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
}

module.exports = generateToken;
