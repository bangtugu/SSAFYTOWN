const express = require('express');
const router = express.Router();
const userController = require('./score.controller')

router.get('/game1/:userId/:score', userController.game1);
router.get('/game2/:userId/:score', userController.game2);

module.exports = router;