require('dotenv').config();
const jwt = require('jsonwebtoken');

const newToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '7d',
      algorithm: 'HS256',
  });
  return token;
};

module.exports = {
  newToken,
};