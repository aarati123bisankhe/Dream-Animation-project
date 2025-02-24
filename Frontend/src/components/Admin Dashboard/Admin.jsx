import React, { useState } from 'react';
import './admin.css';

const AdminDashboard = () => {
    // State for adding a new movie
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        description: '',
        cast: '',
        poster: null,
        video: null,
    });

    // State for managing movies
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Movie 1',
            genre: 'Action',
            description: 'This is an action movie.',
            cast: 'Actor 1, Actor 2',
            poster: 'url_to_poster_1',
            video: 'url_to_video_1',
        },
        {
            id: 2,
            title: 'Movie 2',
            genre: 'Comedy',
            description: 'This is a comedy movie.',
            cast: 'Actor 3, Actor 4',
            poster: 'url_to_poster_2',
            video: 'url_to_video_2',
        },
    ]);

    // State to track the active section (Add Movie or Manage Movies)
    const [activeSection, setActiveSection] = useState('add-movie');

    // Handle form input changes for adding a movie
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    // Handle form submission for adding a movie
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: movies.length + 1,
            ...formData,
        };
        setMovies([...movies, newMovie]);
        alert('Movie added successfully!');
        setFormData({
            title: '',
            genre: '',
            description: '',
            cast: '',
            poster: null,
            video: null,
        });
    };

    // Handle movie deletion
    const handleDelete = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
        alert('Movie deleted successfully!');
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h5>Admin Dashboard</h5>
                <ul>
                    <li>

                       <a
                            href="#add-movie"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default behavior
                                setActiveSection('add-movie');
                            }}
                        >
                            Add Movie
                        </a>
                    </li>
                    <li>
                        {/* <a
                            href="#manage-movies"
                            onClick={(e) => setActiveSection('manage-movies')}
                        >
                            Manage Movies
                        </a> */}
                         <a
                            href="#manage-movies"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default behavior
                                setActiveSection('manage-movies');
                            }}
                        >
                            Manage Movies
                        </a>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <h1>Welcome to the Admin Dashboard</h1>

                {/* Add Movie Form */}
                {activeSection === 'add-movie' && (
                    <div className="add-movie-form">
                        <h2>Add New Movie</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Genre:</label>
                                <input
                                    type="text"
                                    name="genre"
                                    value={formData.genre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Description:</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Cast:</label>
                                <input
                                    type="text"
                                    name="cast"
                                    value={formData.cast}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Poster Image:</label>
                                <input
                                    type="file"
                                    name="poster"
                                    onChange={handleChange}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div>
                                <label>Video:</label>
                                <input
                                    type="file"
                                    name="video"
                                    onChange={handleChange}
                                    accept="video/*"
                                    required
                                />
                            </div>
                            <button type="submit">Add Movie</button>
                        </form>
                    </div>
                )}

                 {/* Manage Movies Section */}
                 {activeSection === 'manage-movies' && (
                    <div className="manage-movies">
                        <h6>Manage Movies</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Description</th>
                                    <th>Cast</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <tr key={movie.id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre}</td>
                                        <td>{movie.description}</td>
                                        <td>{movie.cast}</td>
                                        <td>
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(movie.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;