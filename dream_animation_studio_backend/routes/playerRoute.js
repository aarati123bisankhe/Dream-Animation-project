// const express = require('express');
// const router = express.Router();
// const upload = require('../middleware/imageUpload'); // Import the Multer middleware
// const {
//   createPlayer,
//   getPlayers,
//   getPlayerById,
//   updatePlayer,
//   deletePlayer
// } = require('../controllers/playerController');

// // Create a new player with profile picture upload
// router.post('/create', upload.single('profile_picture'), createPlayer);

// // Get all players
// router.get('/', getPlayers);

// // Get a single player by ID
// router.get('/:playerId', getPlayerById);

// // Update player details (including profile picture upload)
// router.put('/:playerId', upload.single('profile_picture'), updatePlayer);

// // Delete a player by ID
// router.delete('/:playerId', deletePlayer);

// module.exports = router;
