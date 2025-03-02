








// const User = require("../model/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// // Register User
// const registerUser = async (req, res) => {
//     const { name, email, password } = req.body;
  
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "Please provide all fields" });
//     }
  
//     try {
//       const existingUser = await User.findOne({ where: { email } });
//       if (existingUser) {
//         return res.status(400).json({ error: "Email already exists" });
//       }
  
//       const hashedPassword = await bcrypt.hash(password, 10);
//       await User.create({ name, email, password: hashedPassword });
  
//       return res.status(201).json({ message: "Registration successful" });
//     } catch (error) {
//       console.error("❌ Error in registerUser:", error);  // ✅ Logs detailed error in terminal
//       return res.status(500).json({ error: "Something went wrong", details: error.message });
//     }
//   };
  

// // Login User
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Please provide email and password" });
//   }

//   try {
//     const user = await User.findOne({ where: { email } });
//     if (!user) return res.status(404).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

//     const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "24h" });

//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// };

// module.exports = { registerUser, loginUser };
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: "Email already in use" }); // Use 409 for conflict
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({
            message: "Registration successful!",
            user: { id: newUser.id, name: newUser.name, email: newUser.email }
        });

    } catch (error) {
        console.error("Error in registerUser:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email },
            process.env.JWT_SECRET || 'your_secret_key',
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error("Error in loginUser:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerUser, loginUser };
