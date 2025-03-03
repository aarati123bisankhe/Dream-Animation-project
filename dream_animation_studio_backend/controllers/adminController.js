const Admin = require('../model/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register Admin
const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ where: { email } });
        if (existingAdmin) {
            return res.status(409).json({ error: "Email already in use" }); // 409 Conflict
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin
        const newAdmin = await Admin.create({ name, email, password: hashedPassword });

        res.status(201).json({
            message: "Registration successful!",
            admin: { id: newAdmin.id, name: newAdmin.name, email: newAdmin.email }
        });

    } catch (error) {
        console.error("Error in registerAdmin:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// // Login Admin
// const loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     // Validate input
//     if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required" });
//     }

//     try {
//         // Find admin by email
//         const admin = await Admin.findOne({ where: { email } });
//         if (!admin) {
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         // Compare password
//         const isMatch = await bcrypt.compare(password, admin.password);
//         if (!isMatch) {
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: admin.id, name: admin.name, email: admin.email },
//             process.env.JWT_SECRET || 'your_secret_key',
//             { expiresIn: '24h' }
//         );

//         res.status(200).json({ message: "Login successful", token,
//             // role: "admin"

//             admin: { id: admin.id, name: admin.name, email: admin.email }
//          });

//     } catch (error) {
//         console.error("Error in loginAdmin:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const admin = await Admin.findOne({ where: { email } });

        if (!admin) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Generate JWT token for admin with isAdmin flag
        const token = jwt.sign(
            { id: admin.id, name: admin.name, email: admin.email, isAdmin: true },
            process.env.JWT_SECRET || 'your_jwt_secret_key',
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: "Admin Login successful", token });

    } catch (error) {
        console.error("Error in loginAdmin:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { registerAdmin, loginAdmin };
