const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_db_user',
    host: 'localhost',
    database: 'dream_animations',
    password: 'your_db_password',
    port: 5432,
});

module.exports = pool;