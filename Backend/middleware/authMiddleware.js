const jwt = require('jsonwebtoken');
const pool = require('../db/db');

const authMiddleware = (roles) => async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'your_jwt_secret');

        const userQuery = `
            SELECT * FROM users
            WHERE id = $1;
        `;
        const userResult = await pool.query(userQuery, [decoded.id]);

        const user = userResult.rows[0];
        if (!user || !roles.includes(user.role)) {
            throw new Error('Unauthorized access');
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).send({ error: 'Unauthorized access' });
    }
};

module.exports = authMiddleware;