const { Router } = require('express');
const categoryController = require('../controllers/category.controller');
const althentication = require('../middlewares/althentication.middleware');

const route = Router();

route.post('/', althentication, categoryController.category);

module.exports = route;