// const PlayerStats = require('../model/PlayerStatus'); // Import PlayerStats model
// const Player = require('../model/Player'); // Import Player model

// // Create Player Stats
// const createPlayerStats = async (req, res) => {
//     const { player_id, batting_score, bowling_score, fielding_score, fitness_score, match_awareness_score } = req.body;

//     if (!player_id || batting_score === undefined || bowling_score === undefined || fielding_score === undefined || fitness_score === undefined || match_awareness_score === undefined) {
//         return res.status(400).json({
//             error: "Please provide all required fields (player_id, batting_score, bowling_score, fielding_score, fitness_score, match_awareness_score)"
//         });
//     }

//     try {
//         // Check if player exists
//         const player = await Player.findByPk(player_id);
//         if (!player) {
//             return res.status(404).json({ error: "Player not found" });
//         }

//         // Create new player stats
//         const newStats = await PlayerStats.create({
//             player_id,
//             batting_score,
//             bowling_score,
//             fielding_score,
//             fitness_score,
//             match_awareness_score
//         });

//         res.status(201).json({ message: "Player stats created successfully", stats: newStats });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// };

// // Get all stats for a specific player
// const getPlayerStatsByPlayerId = async (req, res) => {
//     const { playerId } = req.params;

//     try {
//         const stats = await PlayerStats.findOne({ where: { player_id: playerId } });

//         if (!stats) {
//             return res.status(404).json({ error: "Stats not found for this player" });
//         }

//         res.status(200).json(stats);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to fetch player stats" });
//     }
// };

// // Get stats for all players
// const getAllPlayerStats = async (req, res) => {
//     try {
//         const stats = await PlayerStats.findAll();
//         res.status(200).json(stats);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to fetch player stats" });
//     }
// };

// // Update player stats
// const updatePlayerStats = async (req, res) => {
//     const { stat_id } = req.params;
//     const { batting_score, bowling_score, fielding_score, fitness_score, match_awareness_score } = req.body;

//     try {
//         const stats = await PlayerStats.findByPk(stat_id);

//         if (!stats) {
//             return res.status(404).json({ error: "Player stats not found" });
//         }

//         await stats.update({
//             batting_score,
//             bowling_score,
//             fielding_score,
//             fitness_score,
//             match_awareness_score
//         });

//         res.status(200).json({ message: "Player stats updated successfully", stats });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to update player stats" });
//     }
// };

// // Delete player stats
// const deletePlayerStats = async (req, res) => {
//     const { stat_id } = req.params;

//     try {
//         const stats = await PlayerStats.findByPk(stat_id);

//         if (!stats) {
//             return res.status(404).json({ error: "Player stats not found" });
//         }

//         await stats.destroy();
//         res.status(200).json({ message: "Player stats deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to delete player stats" });
//     }
// };

// module.exports = {
//     createPlayerStats,
//     getPlayerStatsByPlayerId,
//     getAllPlayerStats,
//     updatePlayerStats,
//     deletePlayerStats
// };
