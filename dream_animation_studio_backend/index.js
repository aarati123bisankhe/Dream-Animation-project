

// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const sequelize = require("./database/db"); // Sequelize instance
// const userRoutes = require("./routes/userRoute"); // Import routes

// dotenv.config();
// const app = express();

// // ✅ Enable CORS to allow frontend to access backend
// app.use(cors({
//     origin: "http://localhost:5173", // Allow frontend
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true
// }));

// // ✅ Middleware for JSON
// app.use(express.json());

// // ✅ Database Connection Test (Fixing Sequelize issue)
// app.get("/test-db", async (req, res) => {
//     try {
//         await sequelize.authenticate();
//         res.json({ message: "Database Connected Successfully" });
//     } catch (error) {
//         res.status(500).json({ error: "Database Connection Failed", details: error.message });
//     }
// });

// // ✅ User Routes
// app.use("/api/user", userRoutes);

// // ✅ Start Server
// const PORT = process.env.PORT || 5173;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT} 🚀`);
// });











































// // //Initialization
// // const express = require('express');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const sequelize = require('./database/db');
// // const coachRoute = require('./routes/coachRoute')
// // const playerRoute = require('./routes/playerRoute')
// // const playerStatusRoute = require('./routes/playerStatusRoutes')
// // // const productRoute = require('./routes/productRoute')


// // //Importing Models
// // const Player = require('./model/Player'); // Import the Player model
// // const Coach = require('./model/Admin'); // Import the Coach model
// // const PlayerStatus = require('./model/PlayerStatus'); // Import the PlayerStatus model

// // //Creating a Server
// // const app = express();

// // //Creating a port
// // const PORT = process.env.PORT || 5000

// // //Creating a middleware
// // app.use(cors());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: true}));


// // app.get('/login',(req, res)=>{
// //     res.send("Welcome to the web page")
// // })


// // app.use('/coach', coachRoute)
// // app.use('/players', playerRoute);
// // app.use('/playerStatus', playerStatusRoute);
// // // app.use('/products', productRoute);

// // const syncModels = async () => {
// //     try {
// //         // Sync models (force: true will drop and recreate the table, alter: true will modify the table structure if needed)
// //         await sequelize.sync({ force: false }); // Use force: true only during development (it drops the tables)
// //         console.log("Models are synchronized with the database.");
// //     } catch (error) {
// //         console.error("Error synchronizing models:", error);
// //     }
// // };
// // // Sync models before starting the server
// // syncModels();

// // //Running on PORT
// // app.listen(PORT, ()=>{
// //     console.log(`Server Running on........................ PORT ${PORT}`)
// // })


//Initialization
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database/db');
const userRoute = require('./routes/userRoute')



//Importing Models
const User = require('./model/User'); // Import the Coach model

//Creating a Server
const app = express();

//Creating a port
const PORT = process.env.PORT || 5000

//Creating a middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/login',(req, res)=>{
    res.send("Welcome to the web page")
})


app.use('/api/user', userRoute)


const syncModels = async () => {
    try {
        // Sync models (force: true will drop and recreate the table, alter: true will modify the table structure if needed)
        await sequelize.sync({ force: false }); // Use force: true only during development (it drops the tables)
        console.log("Models are synchronized with the database.");
    } catch (error) {
        console.error("Error synchronizing models:", error);
    }
};
// Sync models before starting the server
syncModels();

//Running on PORT
app.listen(PORT, ()=>{
    console.log(`Server Running on........................ PORT ${PORT}`)
})