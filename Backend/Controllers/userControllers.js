const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// };
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      console.log('Received login request for:', email);
  
      // Find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log('User not found');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password does not match');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      console.log('Login successful, token:', token);
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Server error:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
module.exports = { registerUser, loginUser };