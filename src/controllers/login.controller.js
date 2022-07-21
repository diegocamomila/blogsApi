const loginService = require('../services/login.service');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await loginService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};