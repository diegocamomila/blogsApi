const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/', userController.user);

module.exports = route;