const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkToken = (token) => {
    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
      return data;
    } catch (_err) {
      const e = new Error('Expired or invalid token');
      e.code = 'Unauthorized';
      throw e;
    }
  };
  
  module.exports = {
    checkToken,
  };