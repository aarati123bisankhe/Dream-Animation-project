// const Coach = require('../model/Admin'); // Import Coach model
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// const registerAdmin = async (req, res) => {
//     const { name, email, password } = req.body;

//     // Validate input
//     if (!name || !email || !password) {
//         return res.status(400).json({
//             error: "Please provide name, email, and password"
//         });
//     }

//     try {
//         // Check if the coach already exists
//         const existingAdmin = await admin.findOne({ where: { email } });
//         if (existingAdmin) {
//             return res.status(400).json({
//                 error: "Admin already registered"
//             });
//         }

//         // Hash the password
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // Create new admin
//         await Admin.create({ name, email, password: hashedPassword });
//         res.status(201).json({ message: "Registration successful!" });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// };

// const loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     // Validate input
//     if (!email || !password) {
//         return res.status(400).json({
//             error: "Please provide email and password"
//         });
//     }

//     try {
//         // Find admin by email
//         const admin = await Coach.findOne({ where: { email } });
//         if (!admin) {
//             return res.status(400).json({
//                 error: "Invalid credentials"
//             });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, admin.password);
//         if (!isMatch) {
//             return res.status(400).json({
//                 error: "Invalid credentials"
//             });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: admin.admin_id, email: admin.email },
//             process.env.JWT_SECRET || 'your_secret_key',
//             { expiresIn: '24h' }
//         );

//         res.status(200).json({ message: "Login successful", token });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// };

// module.exports = { registerAdmin, loginAdmin };
