const { Router } = require('express');
const userController = require('../controllers/post.controller');
const althentication = require('../middlewares/althentication.middleware');

const route = Router();

route.post('/', althentication, userController.post);

module.exports = route;