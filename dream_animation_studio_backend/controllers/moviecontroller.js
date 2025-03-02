// const Movie = require("../model/Movie"); // Import the Movie model

// // Add a new movie
// const addMovie = async (req, res) => {
//     try {
//         const { title, genre, description, cast } = req.body;
//         const poster = req.files?.poster ? req.files.poster[0].path : null;
//         const video = req.files?.video ? req.files.video[0].path : null;

//         if (!title || !genre || !description || !cast || !poster || !video) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         const newMovie = new Movie({
//             title,
//             genre,
//             description,
//             cast,
//             poster,
//             video,
//         });

//         await newMovie.save();
//         res.status(201).json({ message: "Movie added successfully", movie: newMovie });
//     } catch (error) {
//         console.error("Error adding movie:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// // Get all movies
// const getAllMovies = async (req, res) => {
//     try {
//         const movies = await Movie.find();
//         res.status(200).json(movies);
//     } catch (error) {
//         console.error("Error fetching movies:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// // Delete a movie
// const deleteMovie = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const movie = await Movie.findByIdAndDelete(id);
        
//         if (!movie) {
//             return res.status(404).json({ error: "Movie not found" });
//         }

//         res.status(200).json({ message: "Movie deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting movie:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// module.exports = {
//     addMovie,
//     getAllMovies,
//     deleteMovie,
// };
