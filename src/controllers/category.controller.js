const categoryService = require('../services/category.service');

const category = async (req, res, next) => {
  const { name } = req.body;
  try {
    const result = await categoryService.criateCategory(name);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  category,
};