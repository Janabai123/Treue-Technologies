const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
 
  const token = req.headers('Authorization');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, 'e-commapp'); // Replace 'your-secret-key' with a strong secret key used for signing the tokens
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;