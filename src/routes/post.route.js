const { Router } = require('express');
const userController = require('../controllers/post.controller');
const althentication = require('../middlewares/althentication.middleware');

const route = Router();

route.get('/:id', althentication, userController.getId);
route.get('/', althentication, userController.getAll);
route.post('/', althentication, userController.post);
// route.put('/:id', althentication, userController.putId);

module.exports = route;