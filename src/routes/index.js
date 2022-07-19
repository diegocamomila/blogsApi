const express = require('express');
const routeLogin = require('./login.route');
const routeUser = require('./user.route');

const router = express.Router();

router.use('/login', routeLogin);
router.use('/user', routeUser);

module.exports = router;