const express = require('express');
// const { registerUser, loginUser } = require('../controllers/userController');
const { registerUser, loginUser } = require('../controllers/userControllers');
const rateLimiterMiddleware = require('../middleware/rateLimiter');

const router = express.Router();

// Public routes
router.post('/register', rateLimiterMiddleware, registerUser); // Correct route: /api/user/register
router.post('/login', rateLimiterMiddleware, loginUser); // Correct route: /api/user/login

module.exports = router;