const jwt = require('jsonwebtoken');

// Middleware to protect routes
const protect = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Remove 'Bearer ' prefix if present
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET || 'your_jwt_secret_key');
    req.user = decoded; // Attach the decoded payload (user info) to the request object
    next(); // Allow the request to continue
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = protect;





// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const token = req.header("Authorization");

//     if (!token) {
//         return res.status(401).json({ error: "Access denied. No token provided." });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
//         req.user = decoded; // Attach user details to request object
//         next();
//     } catch (error) {
//         res.status(401).json({ error: "Invalid token." });
//     }
// };

// const adminMiddleware = (req, res, next) => {
//     if (req.user.role !== "admin") {
//         return res.status(403).json({ error: "Access denied. Admins only." });
//     }
//     next();
// };

module.exports = { authMiddleware };

