const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Blog } = require('../models');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const client = require('../config/dbconnect')

exports.getBlogs = async (req, res) => {
  try {

    let blogs;
    blogs = await Blog.findAll();
    res.json(blogs);

  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'An error occurred while fetching blogs.' });
  }
}

exports.getBlogsById = async (req, res) => {

  try {
    const { id } = req.params;
    let blog;
    blog = await Blog.findOne({ where: { id } })
    if (!blog) {
      return res.status(404).json({ error: 'Blog is not found' })
    }
    res.json(blog)
  }
  catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}

exports.deleteBlogsById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = Blog.destroy({ where: { id } })

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'An error occurred while deleting the blog' });
  }

}

exports.createBlog = async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const userId = req.user.id
    const newBlog = await Blog.create({ title, body, author, userId });
    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
