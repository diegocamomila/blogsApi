const userService = require('../services/user.service');
const getService = require('../services/get.service');
const getByIdService = require('../services/getById.service');

const user = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const token = await userService.checkUser(displayName, email, password, image);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const get = async (_req, res, next) => {
  try {
    const allUser = await getService.getAllUser();
    return res.status(200).json(allUser);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {    
    const findUser = await getByIdService.getById(id);
    return res.status(200).json(findUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  user,
  get,
  getById,
};