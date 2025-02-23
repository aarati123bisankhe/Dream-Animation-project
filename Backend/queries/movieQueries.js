const pool = require('../db');

const addMovie = async (title, description, releaseYear, addedBy) => {
    const query = `
        INSERT INTO movies (title, description, release_year, added_by)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const values = [title, description, releaseYear, addedBy];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const getAllMovies = async () => {
    const query = `
        SELECT * FROM movies;
    `;
    const result = await pool.query(query);
    return result.rows;
};

module.exports = { addMovie, getAllMovies };