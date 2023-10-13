const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controllers');
const {validateCommentCreation} = require('../middleware/comment.validation.middleware')

router.post('/blogs/:blogId/comments', validateCommentCreation, commentController.createComment);

router.get('/blogs/:blogId/comments', commentController.getComments);

router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
