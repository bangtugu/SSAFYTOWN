const express = require('express');
const router = express.Router();
const user = require('./user');
const score = require('./score');
const ranking = require('./ranking');


router.use('/user', user);
router.use('/score', score);
router.use('/ranking', ranking);

module.exports = router;