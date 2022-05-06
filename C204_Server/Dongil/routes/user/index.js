const express = require('express');
const router = express.Router();
const userController = require('./user.controller')

router.get('/test', userController.test);
router.get('/idcheck', userController.idcheck);
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;