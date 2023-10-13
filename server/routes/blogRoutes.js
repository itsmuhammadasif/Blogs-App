const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Blog } = require('../models');
const authMiddleware = require('../middleware/authMiddleware');
const client = require('../config/dbconnect')
blogControllers = require('../controllers/blog.controllers')
const {validateCreateBlog} = require('../middleware/blogs.validation.middleware')


router.get('/blogs', authMiddleware, blogControllers.getBlogs);

router.get('/blogs/:id', blogControllers.getBlogsById);

router.delete('/blogs/:id', blogControllers.deleteBlogsById)

router.post('/create', authMiddleware, validateCreateBlog, blogControllers.createBlog);

module.exports = router


