const express = require('express');
const router = express.Router();
authControllers = require('../controllers/auth.controllers')
const { validateSignup, validateLogin } = require('../middleware/auth.validation.middleware')


router.post('/signup', validateSignup, authControllers.createUser);

router.post('/login', validateLogin, authControllers.loginUser);



module.exports = router;
