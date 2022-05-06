const express = require('express');
const router = express.Router();
const user = require('./user')     //추가 1

router.use('/user', user);

module.exports = router;