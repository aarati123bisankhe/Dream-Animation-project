const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  console.log('Request Headers:', req.headers); // Log all headers
  console.log('Raw Authorization Header:', req.headers['authorization']); // Log the raw header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  console.log('Token:', token); // Log the extracted token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;