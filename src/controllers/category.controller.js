const categoryService = require('../services/category.service');
const categoryAllService = require('../services/categoreAll.service');

const category = async (req, res, next) => {
  const { name } = req.body;
  try {
    const result = await categoryService.criateCategory(name);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const categoryAll = async (req, res, next) => {
   try {
    const result = await categoryAllService.categoryAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  category,
  categoryAll,
};