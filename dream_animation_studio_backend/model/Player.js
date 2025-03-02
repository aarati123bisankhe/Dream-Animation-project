// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/db'); // Import database connection

// const Player = sequelize.define('Player', {
//   player_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   nationality: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   category: {
//     type: DataTypes.ENUM('Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper'),
//     allowNull: false,
//   },
//   profile_picture: {
//     type: DataTypes.STRING, // Store the path or URL to the profile picture
//     allowNull: true, // This is optional
//   },
//   bio: {
//     type: DataTypes.STRING, // A short biography or description of the player
//     allowNull: true, // This is optional
//   },
//   contact_info: {
//     type: DataTypes.STRING, // Contact info like email or phone number
//     allowNull: true, // This is optional
//   }
// },
// {
//   tableName: "players",
//   timestamps: true,
// });

// module.exports = Player;
