// const Player = require('../model/Player'); // Import Player model
// const upload = require('../middleware/imageUpload'); // Import Multer upload middleware

// // Create a new player
// const createPlayer = async (req, res) => {
//     const { name, age, nationality, category } = req.body;
//     const profile_picture = req.file ? req.file.path : null; // Get the profile picture path from the upload

//     if (!name || !age || !nationality || !category) {
//         return res.status(400).json({
//             error: "Please provide all required fields (name, age, nationality, category)"
//         });
//     }

//     try {
//         const newPlayer = await Player.create({
//             name,
//             age,
//             nationality,
//             category,
//             profile_picture  // Save the profile picture path in the database
//         });
//         res.status(201).json({ message: "Player created successfully", player: newPlayer });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// };

// // Get all players
// const getPlayers = async (req, res) => {
//     try {
//         const players = await Player.findAll();
//         res.status(200).json(players);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to fetch players" });
//     }
// };

// // Get a single player by ID
// const getPlayerById = async (req, res) => {
//     const { playerId } = req.params;

//     try {
//         const player = await Player.findByPk(playerId);
//         if (!player) {
//             return res.status(404).json({ error: "Player not found" });
//         }
//         res.status(200).json(player);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to fetch player" });
//     }
// };

// // Update a player's details
// const updatePlayer = async (req, res) => {
//     const { playerId } = req.params;
//     const { name, age, nationality, category } = req.body;
//     const profile_picture = req.file ? req.file.path : null; // Get the updated profile picture path

//     try {
//         const player = await Player.findByPk(playerId);
//         if (!player) {
//             return res.status(404).json({ error: "Player not found" });
//         }

//         await player.update({
//             name,
//             age,
//             nationality,
//             category,
//             profile_picture  // Update the profile picture path if a new one is uploaded
//         });

//         res.status(200).json({ message: "Player updated successfully", player });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to update player" });
//     }
// };

// // Delete a player by ID
// const deletePlayer = async (req, res) => {
//     const { playerId } = req.params;

//     try {
//         const player = await Player.findByPk(playerId);
//         if (!player) {
//             return res.status(404).json({ error: "Player not found" });
//         }

//         await player.destroy();
//         res.status(200).json({ message: "Player deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to delete player" });
//     }
// };

// module.exports = { createPlayer, getPlayers, getPlayerById, updatePlayer, deletePlayer };
