const express = require('express');
const cors = require('cors'); // Import the cors package
const userRoutes = require('./routes/userRoutes');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your React app's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);

// Protected route example
app.post('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected POST route', user: req.user });
});

module.exports = app;