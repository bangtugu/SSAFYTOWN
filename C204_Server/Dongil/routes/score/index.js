const express = require('express');
const router = express.Router();
const userController = require('./score.controller')

router.post('/game1/:userId/:score', userController.game1);
router.post('/game2/:userId/:score', userController.game2);

module.exports = router;