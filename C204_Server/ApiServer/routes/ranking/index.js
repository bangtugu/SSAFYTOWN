const express = require('express');
const router = express.Router();
const userController = require('./ranking.controller')

router.get('/game1', userController.game1);
router.get('/game2', userController.game2);
// router.post('/signup', userController.signup);
// router.post('/login', userController.login);

module.exports = router;