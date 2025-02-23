const express = require('express');
const { addMovieHandler, getMoviesHandler } = require('../Controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/movies', authMiddleware(['admin']), addMovieHandler);
router.get('/movies', authMiddleware(['user', 'admin']), getMoviesHandler);

module.exports = router;