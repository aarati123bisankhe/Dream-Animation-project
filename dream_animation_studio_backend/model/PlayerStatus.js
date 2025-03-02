// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/db'); // Import database connection
// const Player = require('./Player'); // Import Player model for association

// const PlayerStats = sequelize.define('PlayerStats', {
//   stat_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   player_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: Player, // Link to Player model
//       key: 'player_id',
//     },
//     onDelete: 'CASCADE', // If the player is deleted, stats will be deleted as well
//   },
//   batting_score: {
//     type: DataTypes.INTEGER,
//     allowNull: true, // Allow null values in case scores are not available yet
//   },
//   bowling_score: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   fielding_score: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   fitness_score: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   match_awareness_score: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
// }, {
//   tableName:"playerStatus",
//   timestamps: true, // Automatically create `createdAt` and `updatedAt`
// });

// // Association: A Player has many PlayerStats
// Player.hasMany(PlayerStats, { foreignKey: 'player_id', onDelete: 'CASCADE' });
// PlayerStats.belongsTo(Player, { foreignKey: 'player_id' });

// module.exports = PlayerStats;
