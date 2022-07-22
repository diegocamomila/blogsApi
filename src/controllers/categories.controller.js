const categoriesService = require('../services/categories.service');

const categories = async (req, res, next) => {
  const { displayName } = req.body;
  try {
    const token = await categoriesService.register(displayName);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  categories,
};