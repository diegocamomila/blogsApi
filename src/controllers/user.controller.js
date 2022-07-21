const userService = require('../services/user.service');

const user = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const token = await userService.checkUser(displayName, email, password, image);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const get = async (req, res, next) => {
  try {
    const allUser = await userService.getAllUser();
    res.status(200).json({ allUser });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  user,
  get,
};