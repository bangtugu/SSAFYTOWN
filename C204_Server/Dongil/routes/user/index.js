const express = require('express');
const router = express.Router();
const userController = require('./user.controller')

router.get('/idvalidation/:userId', userController.idValidation);
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;