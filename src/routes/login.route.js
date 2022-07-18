const { Router } = require('express');
const loginController = require('../controllers/login.controller');

const route = Router();

route.post('/', loginController.login);

module.exports = route;