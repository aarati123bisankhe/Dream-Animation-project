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