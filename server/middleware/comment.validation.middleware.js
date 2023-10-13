const { body, validationResult } = require('express-validator');

const validateCommentCreation = [
  body('text').notEmpty().withMessage('Comment text is required'),
  body('userId').notEmpty().withMessage('User ID is required'),
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];



module.exports = { validateCommentCreation };
