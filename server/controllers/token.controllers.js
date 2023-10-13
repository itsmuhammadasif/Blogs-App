const jwt = require('jsonwebtoken');

exports.verifyTokens = async (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, no token is found' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_KEY);

    res.status(200).json(decoded);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized, not token.' });
  }
};