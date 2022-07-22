const { Router } = require('express');
const categoriesController = require('../controllers/categories.controller');

const route = Router();

route.post('/', categoriesController.categories);

module.exports = route;