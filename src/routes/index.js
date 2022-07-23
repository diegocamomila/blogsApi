const express = require('express');
const routeLogin = require('./login.route');
const routeUser = require('./user.route');
const routeCategory = require('./category.route');
const routePost = require('./post.route');

const router = express.Router();

router.use('/login', routeLogin);
router.use('/user', routeUser);
router.use('/categories', routeCategory);
router.use('/post', routePost);

module.exports = router;