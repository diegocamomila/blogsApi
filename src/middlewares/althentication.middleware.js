const { checkToken } = require('../services/checkToken.service');

 const althentication = (req, res, next) => {
  const { authorization } = req.headers;
    if (!authorization) {
      const err = new Error('Token not found');
      err.code = 'Unauthorized';
      throw err;
    }
      try {
        const userEmail = checkToken(authorization);
        req.user = userEmail;
        next();
      } catch (erro) {
        const err = new Error('Expired or invalid token');
        err.code = 'Unauthorized';
        throw err;
      }
};
module.exports = althentication;
