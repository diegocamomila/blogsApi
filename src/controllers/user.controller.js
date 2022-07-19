const userServices = require('../services/user.service');

const user = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const token = await userServices.user(displayName, email, password, image);
    res.status(2001).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  user,
};