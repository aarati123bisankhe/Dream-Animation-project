// const express = require('express');
// const { registerAdmin, loginAdmin } = require('../controllers/adminController');

// const router = express.Router();

// // Admin Authentication Routes
// router.post('/register', registerAdmin);  // Register new admin
// router.post('/login', loginAdmin);        // Admin login

// module.exports = router;

const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/adminController');
const { protect, adminProtect } = require('../middleware/protect');

const router = express.Router();

// Admin Authentication Routes
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Admin Dashboard (Only admins can access)
router.get('/dashboard', protect, adminProtect, (req, res) => {
    res.json({ message: "Welcome to Admin Dashboard", admin: req.user });
});

module.exports = router;


