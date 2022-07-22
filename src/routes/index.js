const express = require('express');
const routeLogin = require('./login.route');
const routeUser = require('./user.route');
const routeCategory = require('./category.route');

const router = express.Router();

router.use('/login', routeLogin);
router.use('/user', routeUser);
router.use('/categories', routeCategory);

module.exports = router;