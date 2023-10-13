const { Comment, Blog, User } = require('../models');

exports.createComment = async (req, res) => {
    try {
        const { text, userId, name, email } = req.body;
        const { blogId } = req.params;
        const blog = await Blog.findByPk(blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(400).json({ message: 'Invalid userId' });
        }

        const comment = await Comment.create({
            text,
            userId,
            blogId,
            name,
            email,
        });

        res.status(201).json(comment);
        console.log('Comment is created successfully: ', comment)
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getComments = async (req, res) => {
    try {
        const { blogId } = req.params;

        const comments = await Comment.findAll({
            where: { blogId },
        });

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error getting comments:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.destroy();

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
