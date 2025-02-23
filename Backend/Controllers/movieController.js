const { addMovie, getAllMovies } = require('../db/queries/movieQueries');

const addMovieHandler = async (req, res) => {
    try {
        const { title, description, releaseYear } = req.body;
        const movie = await addMovie(title, description, releaseYear, req.user.id);
        res.status(201).send(movie);
    } catch (err) {
        res.status(400).send(err);
    }
};

const getMoviesHandler = async (req, res) => {
    try {
        const movies = await getAllMovies();
        res.send(movies);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { addMovieHandler, getMoviesHandler };