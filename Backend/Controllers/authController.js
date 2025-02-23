const { createUser, findUserByUsername } = require('../db/queries/userQueries');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await createUser(username, hashedPassword, role || 'user');
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
        res.status(201).send({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await findUserByUsername(username);

        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error('Invalid login credentials');
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
        res.send({ user, token });
    } catch (err) {
        res.status(400).send({ error: 'Invalid login credentials' });
    }
};

module.exports = { register, login };