const { Router } = require('express');
const userController = require('../controllers/user.controller');
const althentication = require('../middlewares/althentication.middleware');

const route = Router();

route.post('/', userController.user);
route.get('/', althentication, userController.get);

module.exports = route;