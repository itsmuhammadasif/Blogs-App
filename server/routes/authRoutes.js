const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models')
const { body, validationResult } = require('express-validator');
authControllers = require('../controllers/auth.controllers')
const { validateSignup, validateLogin} = require('../middleware/auth.validation.middleware')


router.post('/signup', validateSignup, authControllers.createUser);

router.post('/login', validateLogin, authControllers.loginUser);



module.exports = router;
