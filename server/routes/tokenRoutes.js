const express = require('express');
const router = express.Router();

tokenControllers = require('../controllers/token.controllers')


router.get('/verify-token', tokenControllers.verifyTokens);


module.exports = router;
