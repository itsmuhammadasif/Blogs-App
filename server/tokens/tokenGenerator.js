const jwt = require('jsonwebtoken');

function generateToken(user) {
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      id: user.id,
      roles: user.roles,
    },
    process.env.SECRET_KEY
  );
  return token;
}

module.exports = {
  generateToken,
};
